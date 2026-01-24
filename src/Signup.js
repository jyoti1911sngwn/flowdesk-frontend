import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0b0b] relative overflow-hidden flex items-center justify-center px-6">
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[140px]" />

      {/* SIGNUP CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
        <span className="inline-block text-xs tracking-widest text-white/60 mb-6">
          GET STARTED
        </span>

        <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
          Create your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            workspace
          </span>
        </h1>

        <p className="mt-4 text-white/70 text-sm leading-relaxed">
          Sign up to create your company workspace and start collaborating in
          minutes.
        </p>

        {/* FORM */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-xs text-white/60 mb-2">
              FULL NAME
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>

          <div>
            <label className="block text-xs text-white/60 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>

          <div>
            <label className="block text-xs text-white/60 mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>

          <div>
            <label className="block text-xs text-white/60 mb-2">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 text-white py-3 rounded-xl text-sm font-medium shadow-lg"
          >
            Create account
          </button>
        </form>

        {/* FOOTER */}
        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
