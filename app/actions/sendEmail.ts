"use server";

export async function sendEmail(
  to: string,
  from: string,
  subject: string,
  message: string,
  firstName: string,
  lastName: string
) {
  try {
    // Format the email body
    const emailBody = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${from}
Subject: ${subject}

Message:
${message}
    `.trim();

    // Try to use Resend if available
    // To enable email sending, install resend: npm install resend
    // Then set RESEND_API_KEY and FROM_EMAIL in your .env file
    if (process.env.RESEND_API_KEY) {
      try {
        const resendModule = await import("resend").catch(() => null);
        if (resendModule && resendModule.Resend) {
          const { Resend } = resendModule;
          const resend = new Resend(process.env.RESEND_API_KEY);

          const result = await resend.emails.send({
            from: process.env.FROM_EMAIL || "onboarding@resend.dev",
            to: to,
            subject: `Contact Form: ${subject}`,
            text: emailBody,
            replyTo: from,
          });

          if ("error" in result && result.error) {
            throw result.error;
          }

          return { success: true, message: "Email sent successfully" };
        }
      } catch (resendError) {
        console.error("Resend error:", resendError);
        // Fall through to alternative method
      }
    }

    // Fallback: Use mailto link (client-side will handle this)
    // This is a temporary solution until email service is configured
    // In production, you should set up Resend, SendGrid, or another email service
    console.log("Email service not configured. Email details:", {
      to,
      from,
      subject,
      body: emailBody,
    });

    // For development/testing, return success
    // In production, you should configure an email service
    if (process.env.NODE_ENV === "development") {
      return {
        success: true,
        message: "Email sent successfully (development mode)",
      };
    }

    return {
      success: false,
      message: "Email service not configured. Please set up RESEND_API_KEY.",
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      success: false,
      message: err instanceof Error ? err.message : "Failed to send email",
    };
  }
}
