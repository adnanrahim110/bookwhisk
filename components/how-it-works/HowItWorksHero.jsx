"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

const HowItWorksHero = () => {
  return (
    <section className="relative bg-linear-to-br from-primary-50 via-white to-secondary-50 overflow-hidden pt-44 pb-32">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 shadow-lg mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-800">
              Your Publishing Journey Starts Here
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            How <span className="text-primary-600">BookWhisk</span> Works
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 font-light mb-8 leading-relaxed"
          >
            Your Publishing Journey, Clearly Mapped
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm">
              <BookOpen className="w-6 h-6 text-primary-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">8</div>
                <div className="text-sm text-slate-600">Clear Steps</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Transparent</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm">
              <BookOpen className="w-6 h-6 text-primary-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">1-on-1</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksHero;
