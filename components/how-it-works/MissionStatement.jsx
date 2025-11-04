"use client";

import { motion } from "framer-motion";
import { Award, Copyright, Shield, TrendingUp } from "lucide-react";
import Subtitle from "../ui/Subtitle";

const MissionStatement = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary-50/30 to-transparent" />

      <div className="container relative z-10">
        <div>
          <div className="text-center mb-5">
            <Subtitle>Our Mission</Subtitle>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              We Are BookWhisk
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none mb-12 text-center"
          >
            <p className="text-lg md:text-xl text-slate-700 mb-2">
              We are BookWhisk, your{" "}
              <span className="font-semibold text-primary-600">
                self-publishing facilitators
              </span>
              . Our mission is to make independent publishing{" "}
              <span className="font-semibold">
                effortless, professional, and rewarding
              </span>{" "}
              for authors like you. We guide your book through every stage of
              the publishing process, from careful manuscript review and
              editorial refinement to formatting, design, and global release.
            </p>
            <p className="text-lg md:text-xl text-slate-700 mb-6">
              Every project is meticulously prepared to meet{" "}
              <span className="font-semibold">
                international publishing standards and Amazon's guidelines
              </span>
              , ensuring your book is{" "}
              <span className="font-semibold text-emerald-600">
                100% error-free
              </span>{" "}
              and ready to shine in every format.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <div className="flex gap-4 p-6 bg-linear-to-br from-primary-50 to-white rounded-2xl border border-primary-100">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Copyright className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Full Ownership
                </h3>
                <p className="text-slate-600">
                  Your book is published under your name. The ISBN and barcode
                  are registered to you, and you retain complete copyrights.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-linear-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  100% Royalties
                </h3>
                <p className="text-slate-600">
                  We never take a percentage of your future sales. All proceeds
                  from your book remain entirely yours.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-linear-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  One-Time Fee
                </h3>
                <p className="text-slate-600">
                  We charge a transparent, one-time service fee to manage the
                  full publishing process on your behalf.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-linear-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Professional Quality
                </h3>
                <p className="text-slate-600">
                  Efficient, transparent, and professional service at every step
                  of your publishing journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
