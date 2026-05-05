package com.engloray.contact.controller;

import com.engloray.contact.dto.ContactRequest;
import com.engloray.contact.dto.ContactResponse;
import com.engloray.contact.service.EmailService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    /**
     * POST /api/contact/send
     * Accepts form data and sends it via secondary email to admin.
     *
     * Postman Test:
     * Method: POST
     * URL: http://localhost:8080/api/contact/send
     * Body (JSON):
     * {
     * "fullName": "John Doe",
     * "emailAddress": "john@example.com",
     * "subject": "Inquiry about services",
     * "message": "Hello, I would like to know more about your services."
     * }
     */
    @PostMapping("/send")
    public ResponseEntity<ContactResponse> sendContactForm(@Valid @RequestBody ContactRequest request) {
        log.info("Received contact form submission from: {} <{}>", request.getFullName(), request.getEmailAddress());
        try {
            emailService.sendContactFormEmail(request);
            return ResponseEntity.ok(new ContactResponse(true,
                    "Your message has been sent successfully! We will get back to you soon."));
        } catch (Exception e) {
            log.error("EMAIL ERROR FULL STACK:", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ContactResponse(false, e.getMessage()));
        }
    }

    /**
     * GET /api/contact/health
     * Simple health check endpoint to verify the backend is running.
     */
    @GetMapping("/health")
    public ResponseEntity<ContactResponse> healthCheck() {
        return ResponseEntity.ok(new ContactResponse(true, "Contact backend is up and running!"));
    }
}
