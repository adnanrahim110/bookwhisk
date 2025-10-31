"use client";

import { faqs } from "@/public";
import { MotionInView } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const FAQS_LIST = [
  {
    q: "How long does the publishing process take?",
    a: "Typical timelines vary by service. From manuscript to published book, expect 8-14 weeks for a full-service package; shorter for design-only or editing-only services.",
  },
  {
    q: "Can I keep my ISBN and distribution rights?",
    a: "Yes. We can use your existing ISBN, or provide one. You retain all rights — we only help you distribute and promote your work.",
  },
  {
    q: "Do you offer marketing and distribution?",
    a: "Absolutely — we handle online distribution, print-on-demand setup, and optional marketing services like book launch plans and advertising.",
  },
  {
    q: "What file formats do you accept for manuscripts?",
    a: "We accept Word (.doc/.docx), Google Docs, and plain text. For complex layouts, PDFs are fine but may require additional formatting.",
  },
  {
    q: "Can you help with cover design?",
    a: "Yes — our design team creates custom covers aligned to your genre and audience, with unlimited revisions during the concept stage.",
  },
];

const FAQItem = ({ item, isOpen, onToggle, idx }) => {
  const formattedIndex = idx + 1;

  return (
    <motion.div
      layout
      animate={{
        backgroundColor: isOpen ? "#fff0d3" : "#ffffff",
      }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border relative border-primary-100 overflow-hidden"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-full top-0 left-0 w-14 rounded-l-2xl flex items-center justify-start"
          >
            <span className="absolute text-[140px] -left-2 font-bold text-transparent bg-clip-text bg-linear-to-r from-primary-300 via-primary-200/50 to-transparent tabular-nums">
              {formattedIndex}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        animate={{
          paddingBottom: isOpen ? "4px" : "18px",
        }}
        transition={{ duration: 0.4 }}
        onClick={onToggle}
        className="w-full px-5 pt-5 pl-[68px] flex items-start justify-between gap-6 relative"
        aria-expanded={isOpen}
        aria-controls={`faq-${idx}`}
      >
        <div className="flex-1 flex items-center gap-2">
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-3 text-lg font-semibold border-2 border-primary text-primary rounded-full w-9 h-9 shrink-0 flex items-center justify-center pt-0.5"
              >
                {formattedIndex}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-left pt-1">
            <motion.h3
              animate={{ color: isOpen ? "#ff6900" : "#000" }}
              transition={{ duration: 0.4 }}
              className="text-xl font-semibold"
            >
              {item.q}
            </motion.h3>
          </div>
        </div>
        <motion.div
          animate={{
            backgroundColor: isOpen ? "#FFFFFF" : "#fff0d3",
          }}
          transition={{ duration: 0.4 }}
          className="rounded-full w-9 h-9 text-primary shrink-0 flex items-center justify-center"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={isOpen ? "minus" : "plus"}
              initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
              transition={{ duration: 0.2 }}
              className="text-2xl"
            >
              {isOpen ? <RiSubtractLine /> : <RiAddLine />}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-${idx}`}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            aria-hidden={!isOpen}
          >
            <div className="px-6 pb-6 pl-[68px] text-neutral-800 text-base">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-primary -z-10"
      />
    </motion.div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const filtered = useMemo(() => FAQS_LIST, []);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        <MotionInView
          className="text-center mb-12 lg:mb-16"
          v={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-800 mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Clear answers to common author questions. Get unstuck and get
            started on your publishing journey.
          </p>
        </MotionInView>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-[51%]">
            <div className="flex flex-col gap-5">
              {filtered.map((item, i) => (
                <MotionInView
                  key={item.q + i}
                  as="div"
                  v={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: i * 0.1 },
                    },
                  }}
                >
                  <FAQItem
                    item={item}
                    idx={i}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                </MotionInView>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[45%] mt-16 lg:mt-0">
            <MotionInView
              className="lg:sticky lg:top-24"
              v={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
            >
              <div className="relative w-full">
                <Image
                  width={856}
                  height={836}
                  src={faqs}
                  alt="Stack of books on a desk"
                  className="w-full h-auto"
                />
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
