// Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { sendEmail } from "@/app/_actions/sendEmail";

export default function Contact({
  form_header,
  display_image,
  email_address,
}: {
  form_header: string;
  display_image: string;
  email_address: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const result = await sendEmail(
        email_address,
        email,
        subject,
        message,
        firstName,
        lastName
      );

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you — your message has been sent.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Sticky image */}
      <div className="hidden md:block sticky top-0 h-screen">
        <Image
          src={display_image}
          alt="Contact"
          fill
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col justify-center px-8 md:px-16 pt-32 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md w-full mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#cd7400] mb-4 font-light">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-[#353535] mb-2">
            {form_header}
          </h1>
          <div className="w-8 h-px bg-[#cd7400] mb-10" />

          <div className="flex flex-col gap-6">
            {/* Name row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstname" className="text-xs tracking-widest uppercase text-black/50 font-light">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  required
                  className="px-0 py-2 border-b border-black/20 focus:outline-none focus:border-[#cd7400] bg-transparent transition-colors duration-200 text-sm placeholder:text-black/30"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastname" className="text-xs tracking-widest uppercase text-black/50 font-light">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  required
                  className="px-0 py-2 border-b border-black/20 focus:outline-none focus:border-[#cd7400] bg-transparent transition-colors duration-200 text-sm placeholder:text-black/30"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs tracking-widest uppercase text-black/50 font-light">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="px-0 py-2 border-b border-black/20 focus:outline-none focus:border-[#cd7400] bg-transparent transition-colors duration-200 text-sm placeholder:text-black/30"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs tracking-widest uppercase text-black/50 font-light">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                className="px-0 py-2 border-b border-black/20 focus:outline-none focus:border-[#cd7400] bg-transparent transition-colors duration-200 text-sm placeholder:text-black/30"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs tracking-widest uppercase text-black/50 font-light">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="px-0 py-2 border-b border-black/20 focus:outline-none focus:border-[#cd7400] bg-transparent transition-colors duration-200 text-sm placeholder:text-black/30 resize-none"
              />
            </div>

            {/* Status + Submit */}
            <div className="flex flex-col gap-3 pt-2">
              {submitStatus.type && (
                <p className={`text-xs tracking-wide ${submitStatus.type === "success"
                  ? "text-green-700"
                  : "text-red-700"
                  }`}>
                  {submitStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#353535] text-white text-xs tracking-[0.2em] uppercase font-light hover:bg-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </motion.div>
      </form>
    </div>
  );
}