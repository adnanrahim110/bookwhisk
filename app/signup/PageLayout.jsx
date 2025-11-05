"use client";

import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { LoaderLink } from "@/components/ui/NavigationLoader";
import { cn } from "@/utils/cn";
import { submitForm } from "@/utils/formSubmit";
import { RiPhoneLine } from "react-icons/ri";

const phoneDisplay = "+1 (407) 966-9398";
const phoneLink = "+14079669398";

const PageLayout = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [messageLength, setMessageLength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "message") {
      setMessageLength(value.length);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    });
    setMessageLength(0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const payload = new FormData(form);
    payload.append("formName", "Author Sign Up Form");
    payload.append(
      "fullName",
      `${formData.firstName} ${formData.lastName}`.trim()
    );
    payload.append("name", `${formData.firstName} ${formData.lastName}`.trim());

    setIsSubmitting(true);
    const { success, error, validationErrors } = await submitForm({
      formData: payload,
      requiredFields: [
        "firstName",
        "lastName",
        "email",
        "phone",
        "message",
        "consent",
      ],
    });

    if (success) {
      resetForm();
      setIsSubmitting(false);
      router.push("/thankyou");
      return;
    }

    const errorMessage =
      Object.values(validationErrors ?? {})[0] ||
      error ||
      "We couldn't submit your request. Please try again.";
    toast.error(errorMessage);
    setIsSubmitting(false);
  };

  const benefits = [
    "100% Royalties - Keep Everything You Earn",
    "Professional Quality Guaranteed",
    "Publish in 30 Days or Less",
  ];

  return (
    <div className="min-h-screen lg:h-dvh bg-linear-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff690008_1px,transparent_1px),linear-gradient(to_bottom,#ff690008_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse animation-delay-2000" />

      <div className="relative z-10 min-h-screen lg:h-dvh grid lg:grid-cols-2">
        <div className="hidden lg:flex relative bg-linear-to-br from-primary-500 via-primary-600 to-orange-600 items-center justify-center p-8">
          <div className="absolute inset-0 bg-[url('/imgs/hero-img.avif')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 max-w-lg">
            <LoaderLink href="/" className="inline-block mb-8">
              <Image
                src="/imgs/logo.avif"
                alt="BookWhisk"
                width={180}
                height={60}
                className="h-10 w-auto brightness-0 invert"
              />
            </LoaderLink>

            <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Transform Your Manuscript Into a Published Masterpiece
            </h2>

            <p className="text-lg text-orange-50 mb-8 leading-relaxed drop-shadow">
              Join thousands of authors who trust BookWhisk to bring their
              stories to life.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="shrink-0 w-7 h-7 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base text-white font-medium drop-shadow">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <p className="text-white/90 mb-3 text-sm font-medium">
                  Have questions? Call us directly:
                </p>
                <a
                  href={`tel:${phoneLink}`}
                  className="text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 group/phone"
                >
                  <RiPhoneLine className="text-xl" />
                  {phoneDisplay}
                  <svg
                    className="w-5 h-5 opacity-0 group-hover/phone:opacity-100 group-hover/phone:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="size-full flex items-center justify-center p-12">
          <div className="size-full">
            <div className="lg:hidden mb-8 text-center">
              <LoaderLink href="/" className="inline-block">
                <Image
                  src="/imgs/logo.avif"
                  alt="BookWhisk"
                  width={180}
                  height={60}
                  className="h-10 w-auto mx-auto"
                />
              </LoaderLink>
            </div>

            <div className="bg-white/80 h-full backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-orange-100 shadow-2xl shadow-primary-500/10">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  Create Your Account
                </h1>
                <p className="text-sm text-gray-600">
                  Start your publishing journey today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <div className="relative">
                      <User
                        className={cn(
                          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
                          focusedField === "firstName"
                            ? "text-primary-500"
                            : "text-gray-400"
                        )}
                      />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John"
                        required
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <div className="relative">
                      <User
                        className={cn(
                          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
                          focusedField === "lastName"
                            ? "text-primary-500"
                            : "text-gray-400"
                        )}
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Doe"
                        required
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className={cn(
                          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
                          focusedField === "email"
                            ? "text-primary-500"
                            : "text-gray-400"
                        )}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        required
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className={cn(
                          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
                          focusedField === "phone"
                            ? "text-primary-500"
                            : "text-gray-400"
                        )}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your publishing needs..."
                      required
                      rows="5"
                      maxLength={500}
                      className={cn(
                        "w-full px-3 py-2.5 text-sm bg-white border rounded-xl focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none",
                        focusedField === "message"
                          ? "border-primary-500"
                          : "border-gray-300"
                      )}
                    />
                    <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                      {messageLength}/500
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 bg-white text-primary-600 focus:ring-primary-500 focus:ring-offset-white cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                  >
                    I consent to receive text messages and agree to the{" "}
                    <LoaderLink
                      href="/terms"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      Terms of Service
                    </LoaderLink>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.consent || isSubmitting}
                  className={cn(
                    "w-full py-3 rounded-xl font-bold text-base transition-all duration-300 relative overflow-hidden",
                    isSubmitting
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : formData.consent
                      ? "bg-linear-to-r from-primary-500 to-primary-600 text-white group hover:from-primary-600 hover:to-primary-700 shadow-primary-500/30 hover:shadow-primary-500/50 shadow-lg"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Start Publishing Today
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  {formData.consent && !isSubmitting && (
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  )}
                </button>

                <p className="text-sm text-center text-gray-500 leading-relaxed">
                  By signing up, you agree to our{" "}
                  <LoaderLink
                    href="/terms-and-conditions"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Terms
                  </LoaderLink>{" "}
                  and{" "}
                  <LoaderLink
                    href="/privacy-policy"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Privacy Policy
                  </LoaderLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
