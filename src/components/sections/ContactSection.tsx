"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { contactData } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type ModalState = "success" | "error" | null;

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [modalState, setModalState] = useState<ModalState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { title, subtitle, phone, email, location } = contactData;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mzdkarrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setModalState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setModalState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Desktop: two columns | Mobile: single column card */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left — Info (desktop only shows this outside card) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex flex-col justify-center flex-1 pt-8"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground mb-10">{subtitle}</p>

            <div className="space-y-5">
              {[
                { icon: Smartphone, text: phone },
                { icon: Mail, text: email },
                { icon: MapPin, text: location },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-one" />
                  </div>
                  <span className="text-sm text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Card with form (on mobile: full card including info) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[480px] xl:w-[520px] bg-brand-one rounded-3xl p-8 shadow-sm border border-border flex-shrink-0"
          >
            {/* Mobile only — title + contact info inside card */}
            <div className="lg:hidden mb-8">
              <h2 className="text-3xl font-bold text-brand-four mb-2">
                {title}
              </h2>
              <p className="text-sm text-brand-three mb-6">{subtitle}</p>
              <div className="space-y-4">
                {[
                  { icon: Smartphone, text: phone },
                  { icon: Mail, text: email },
                  { icon: MapPin, text: location },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-four flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-one" />
                    </div>
                    <span className="text-sm text-brand-three">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold text-brand-four mb-4">
                Send a Message
              </h3>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-three mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-brand-one placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-three mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-brand-one placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-three mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-brand-one placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-four text-brand-one font-semibold py-3.5 px-6 rounded-full hover:text-brand-four hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* 3D Spline image */}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {modalState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModalState(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-8 shadow-2xl border border-border max-w-sm w-full"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.2,
                    duration: 0.6,
                    bounce: 0.5,
                  }}
                  className="relative w-32 h-32 mx-auto mb-6"
                >
                  <Image
                    src={
                      modalState === "success"
                        ? "/assets/MessageSuccess.svg"
                        : "/assets/MessageFail.svg"
                    }
                    alt={modalState === "success" ? "Success" : "Error"}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl font-bold text-foreground mb-3"
                >
                  {modalState === "success"
                    ? "Message Sent Successfully!"
                    : "Failed to send."}
                </motion.h3>

                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-muted-foreground mb-6"
                >
                  {modalState === "success"
                    ? "Thank you for reaching out. I'll get back to you as soon as possible."
                    : "Please check your internet connection or try refreshing the page."}
                </motion.p>

                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  onClick={() => setModalState(null)}
                  className="w-full bg-brand-four text-brand-one font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300"
                >
                  {modalState === "success" ? "Back to Home" : "Try Again"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
