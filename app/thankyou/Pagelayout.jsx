"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

const Pagelayout = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const checkIconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="h-dvh bg-linear-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff690008_1px,transparent_1px),linear-gradient(to_bottom,#ff690008_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-orange-100 bg-white/90 backdrop-blur-xl p-8 md:p-12 text-center shadow-xl shadow-primary-500/10 relative overflow-hidden"
          >
            <motion.div
              variants={checkIconVariants}
              className="mx-auto mb-6 relative"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-secondary-500 shadow-lg mx-auto">
                <CheckCircle
                  className="h-10 w-10 text-white"
                  strokeWidth={2.5}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary-100">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                Submission Successful
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-4"
            >
              Thank You for Reaching Out!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto"
            >
              We&apos;ve received your details and our publishing experts will
              get in touch within the next{" "}
              <span className="font-semibold text-primary-600">24 hours</span>.
              Keep an eye on your inbox for the next steps in your publishing
              journey.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="bg-linear-to-br from-primary-50 to-orange-50 rounded-xl p-4 border border-primary-100">
                  <Mail className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Check Your Email
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Confirmation sent
                  </p>
                </div>
                <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                  <MessageSquare className="w-8 h-8 text-secondary-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Response Time
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Within 24 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button href="/" variant="primary" className="min-w-40">
                Back to Home
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Pagelayout;
