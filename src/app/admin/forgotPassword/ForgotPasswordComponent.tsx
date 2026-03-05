"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Loader2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const ForgotPasswordComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo / Brand Area */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-linear-to-br from-primary-600 to-primary-800 shadow-xl shadow-primary-700/20 mb-4 group transition-transform hover:scale-105 duration-500">
            <Lock className="w-8 h-8 text-white transition-transform group-hover:rotate-12" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-1">
            Reset <span className="text-primary-600">Password</span>
          </h1>
          <p className="text-gray-500 font-medium px-4">
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white p-6 md:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-primary-600 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 py-2.5 bg-primary-950 text-white rounded-2xl text-base font-black transition-all duration-300 shadow-xl shadow-primary-950/20 hover:bg-primary-900 hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Link...
                  </>
                ) : (
                  <>
                    Send Reset Link
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              {/* Back to Login */}
              <div className="text-center pt-2">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary-600 transition-colors duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Login
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center py-2 space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-2">
                <ShieldCheck className="w-10 h-10 text-emerald-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Check your email
                </h3>
                <p className="text-gray-500 font-medium">
                  We've sent a password reset link to <br />
                  <span className="text-gray-900 font-bold">{email}</span>
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary-600 font-bold hover:text-primary-800 transition-colors"
              >
                Didn't receive the email? Try again
              </button>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="w-full flex items-center justify-center gap-3 py-2.5 bg-gray-100 text-gray-900 rounded-2xl text-base font-black transition-all duration-300 hover:bg-primary-50"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Return to Login
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center px-6">
          <p className="text-sm text-gray-400 font-medium italic">
            Wait for the reset link to arrive. Check your spam folder if you
            can't find it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
