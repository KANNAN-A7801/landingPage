package com.engloray.contact.service;

import com.engloray.contact.dto.ContactRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;

    // The secondary/sender email (configured in application.properties)
    @Value("${mail.sender.email}")
    private String senderEmail;

    // The admin email that receives all contact form submissions
    @Value("${mail.admin.email}")
    private String adminEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Sends contact form submission email FROM secondary mail TO admin mail.
     */
    public void sendContactFormEmail(ContactRequest request) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

        // FROM: secondary/sender email
        helper.setFrom(senderEmail);

        // TO: admin email
        helper.setTo(adminEmail);

        // Reply-To: the person who submitted the form (so admin can reply directly)
        helper.setReplyTo(request.getEmailAddress());

        // Subject
        helper.setSubject("[New Contact] " + request.getSubject());

        // HTML Email body
        String htmlBody = buildEmailBody(request);
        helper.setText(htmlBody, true);

        mailSender.send(mimeMessage);
        log.info("Contact form email sent successfully. From: {} | To: {} | Subject: {}",
                senderEmail, adminEmail, request.getSubject());
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
                            <h1>📬 New Contact Form Submission</h1>
                            <p style="margin:8px 0 0; font-size:13px; opacity:0.85;">Engloray Landing Page</p>
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
                            This email was sent via the Engloray contact form. Reply directly to respond to %s.
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
}
