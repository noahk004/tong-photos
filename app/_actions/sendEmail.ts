"use server";

import EmailTemplate from "@/components/email-templates/new-message-alert";

export async function sendEmail(
  to: string,
  from: string,
  subject: string,
  message: string,
  firstName: string,
  lastName: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured in environment variables.");
    return {
      success: false,
      message: "Email service not configured properly.",
    };
  }
  if (!process.env.SITE_DOMAIN) {
    console.error("SITE_DOMAIN not configured in environment variables.");
    return {
      success: false,
      message: "Email service not configured properly.",
    };
  }
  const resendModule = await import("resend").catch(() => null);
  if (!resendModule || !resendModule.Resend) {
    console.error("Something went wrong while importing Resend module.");
    return {
      success: false,
      message: "Email service not configured properly.",
    };
  }
  const { Resend } = resendModule;
  const resend = new Resend(process.env.RESEND_API_KEY);

  // For development/testing, return success
  // In production, you should configure an email service
  if (process.env.NODE_ENV === "development") {
    return {
      success: true,
      message: "Email sent successfully (development mode)",
    };
  }

  try {
    const fromEmail = `info@${process.env.SITE_DOMAIN}`
    const result = await resend.emails.send({
      from: fromEmail,
      to: to,
      subject: `[CONTACT FORM SUBMISSION] ${subject}`,
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        subject: subject,
        from: from,
        message: message,
        timeSent: new Date(),
      }),
      replyTo: from,
    });

    if (result.error) {
      throw result.error;
    }

    return { success: true, message: "Email sent successfully" };

  } catch (err) {
    console.error("Error sending email:", err);
    return {
      success: false,
      message: err instanceof Error ? err.message : "Failed to send email",
    };
  }
}
