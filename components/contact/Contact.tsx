"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Footer from "../Footer";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact({
  form_header,
  display_image,
  site_title,
  email_address,
  instagram_url,
}: {
  form_header: string;
  display_image: string;
  site_title: string;
  email_address: string;
  instagram_url: string;
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
          message: "Thank you! Your message has been sent.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message || "Failed to send message. Please try again.",
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
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-y-scroll">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <Image
          src={display_image}
          alt="Contact Page"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </motion.div>

      <div className="flex items-center justify-center p-8 bg-white h-full pt-24 pb-8 md:pt-40 md:pb-20 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mb-24 md:mb-28"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-black text-3xl md:text-4xl mb-8"
          >
            {form_header}
          </motion.h1>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="flex flex-col gap-2 w-full min-w-0">
                <label htmlFor="firstname">First name*</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  required
                  className="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black min-w-0"
                />
              </div>

              <div className="flex flex-col gap-2 w-full min-w-0">
                <label htmlFor="lastname">Last name*</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  required
                  className="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black min-w-0"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                className="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              {submitStatus.type && (
                <div
                  className={`px-4 py-2 rounded-md text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-3 py-2 bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </motion.div>
          </div>
        </form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-12 md:bottom-16 left-0 right-0 container mx-auto md:px-4"
        >
          <Footer
            site_title={site_title}
            email_address={email_address}
            instagram_url={instagram_url}
          />
        </motion.div>
      </div>
    </div>
  );
}
