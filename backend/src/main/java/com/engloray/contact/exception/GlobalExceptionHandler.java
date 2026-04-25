package com.engloray.contact.exception;

import com.engloray.contact.dto.ContactResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.mail.MailException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    /**
     * Handles validation errors (e.g. blank fields, invalid email format).
     * Returns 400 with field-level error messages.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> fieldErrors = new HashMap<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            fieldErrors.put(error.getField(), error.getDefaultMessage());
        }

        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", "Validation failed. Please check the fields below.");
        response.put("errors", fieldErrors);

        log.warn("Validation failed: {}", fieldErrors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    /**
     * Handles wrong HTTP method (e.g. POST instead of GET).
     * Returns 405 Method Not Allowed with a clear message.
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ContactResponse> handleMethodNotSupported(HttpRequestMethodNotSupportedException ex) {
        String supported = String.join(", ", ex.getSupportedMethods() != null
                ? ex.getSupportedMethods() : new String[]{"unknown"});
        String msg = String.format("Method '%s' is not allowed. Use: %s", ex.getMethod(), supported);
        log.warn("Wrong HTTP method used: {}", msg);
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(new ContactResponse(false, msg));
    }

    /**
     * Handles missing or malformed request body.
     * Returns 400 with a clear message.
     */
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ContactResponse> handleMissingBody(HttpMessageNotReadableException ex) {
        log.warn("Missing or malformed request body: {}", ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ContactResponse(false,
                        "Request body is missing or malformed. Please send a valid JSON body."));
    }

    /**
     * Handles SMTP / mail sending failures.
     * Returns 503 Service Unavailable with a clear message.
     */
    @ExceptionHandler(MailException.class)
    public ResponseEntity<ContactResponse> handleMailException(MailException ex) {
        log.error("Mail sending failed: {}", ex.getMessage(), ex);
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(new ContactResponse(false,
                        "Failed to send email. Please check SMTP credentials in application.properties."));
    }

    /**
     * Catches any other unexpected exceptions.
     * Returns 500 Internal Server Error.
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ContactResponse> handleGenericException(Exception ex) {
        log.error("Unexpected error: {}", ex.getMessage(), ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ContactResponse(false, "An unexpected error occurred: " + ex.getMessage()));
    }
}
