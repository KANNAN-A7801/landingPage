package com.engloray.contact.service;

import com.engloray.contact.dto.ContactRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Service
@Slf4j
public class EmailService {

    // Resend API key - set as environment variable RESEND_API_KEY in Render
    @Value("${resend.api.key}")
    private String resendApiKey;

    // The "from" address - must be verified in Resend dashboard
    // For testing, use: "Garuda Career <onboarding@resend.dev>"
    @Value("${mail.sender.from}")
    private String senderFrom;

    // The admin email that receives all contact form submissions
    @Value("${mail.admin.email}")
    private String adminEmail;

    private final HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(30))
            .build();

    /**
     * Sends contact form submission email via Resend HTTP API (HTTPS port 443).
     * This works on Render free tier unlike SMTP which is blocked.
     */
    public void sendContactFormEmail(ContactRequest request) throws Exception {
        String htmlBody = buildEmailBody(request);

        // Build JSON payload for Resend API
        String jsonPayload = """
                {
                  "from": "%s",
                  "to": ["%s"],
                  "reply_to": "%s",
                  "subject": "[New Contact] %s",
                  "html": %s
                }
                """.formatted(
                escapeJson(senderFrom),
                escapeJson(adminEmail),
                escapeJson(request.getEmailAddress()),
                escapeJson(request.getSubject()),
                toJsonString(htmlBody)
        );

        HttpRequest httpRequest = HttpRequest.newBuilder()
                .uri(URI.create("https://api.resend.com/emails"))
                .timeout(Duration.ofSeconds(30))
                .header("Authorization", "Bearer " + resendApiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
                .build();

        HttpResponse<String> response = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() >= 200 && response.statusCode() < 300) {
            log.info("Contact form email sent via Resend. From: {} | To: {} | Subject: {}",
                    senderFrom, adminEmail, request.getSubject());
        } else {
            log.error("Resend API error. Status: {} | Body: {}", response.statusCode(), response.body());
            throw new RuntimeException("Email service error (HTTP " + response.statusCode() + "): " + response.body());
        }
    }

    /**
     * Builds a clean HTML email body from the contact form data.
     */
    private String buildEmailBody(ContactRequest request) {
        return """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 30px auto; background-color: #ffffff;
                                     border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                        .header { background: linear-gradient(135deg, #3B3BD4, #6C6CFF);
                                  padding: 30px; text-align: center; color: white; }
                        .header h1 { margin: 0; font-size: 24px; letter-spacing: 1px; }
                        .content { padding: 30px; }
                        .field { margin-bottom: 20px; }
                        .label { font-size: 12px; font-weight: bold; color: #888888;
                                 text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
                        .value { font-size: 15px; color: #333333; background: #f9f9f9;
                                 padding: 12px 15px; border-radius: 6px; border-left: 4px solid #3B3BD4; }
                        .message-value { white-space: pre-wrap; }
                        .footer { background-color: #f4f4f4; padding: 15px; text-align: center;
                                  font-size: 12px; color: #aaaaaa; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>New Contact Form Submission</h1>
                            <p style="margin:8px 0 0; font-size:13px; opacity:0.85;">Garuda Career</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Full Name</div>
                                <div class="value">%s</div>
                            </div>
                            <div class="field">
                                <div class="label">Email Address</div>
                                <div class="value">%s</div>
                            </div>
                            <div class="field">
                                <div class="label">Subject</div>
                                <div class="value">%s</div>
                            </div>
                            <div class="field">
                                <div class="label">Message</div>
                                <div class="value message-value">%s</div>
                            </div>
                        </div>
                        <div class="footer">
                            Sent via Garuda Career contact form. Reply directly to respond to %s.
                        </div>
                    </div>
                </body>
                </html>
                """.formatted(
                escapeHtml(request.getFullName()),
                escapeHtml(request.getEmailAddress()),
                escapeHtml(request.getSubject()),
                escapeHtml(request.getMessage()),
                escapeHtml(request.getEmailAddress())
        );
    }

    private String escapeHtml(String input) {
        if (input == null) return "";
        return input
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#x27;");
    }

    private String escapeJson(String input) {
        if (input == null) return "";
        return input
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }

    /** Converts a multi-line string to a valid JSON string value (with quotes). */
    private String toJsonString(String input) {
        return "\"" + escapeJson(input) + "\"";
    }
}
