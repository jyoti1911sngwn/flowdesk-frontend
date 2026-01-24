import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";


export default function SignupPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0b0b] relative overflow-hidden flex items-center justify-center px-6">
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[140px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center justify-start max-w-7xl">
        {/* LEFT CONTENT */}
        <div className="bg-white/5 z-10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
          <span className="inline-block text-xs lg:pr-16 tracking-widest text-white/60 mb-5">
            WORKSPACE • MEETINGS • TASKS
          </span>

          <h1 className="text-4xl lg:text-5xl max-w-md font-semibold leading-tight text-white">
            Let your team <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              work in flow
            </span>
          </h1>

          <p className="mt-5 text-white/70 max-w-md text-sm lg:text-base leading-relaxed">
            Create company workspaces, manage roles, schedule meetings, assign
            tasks, and collaborate — all from one secure dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-lg" onClick={()=> navigate('/signup')}>
              Create your free workspace
            </button>

            <button className="border border-white/20 text-white px-6 py-3 rounded-lg text-sm hover:bg-white/5 transition" onClick={() => navigate('/login')}>
              Log in
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-0 h-[700px] w-[900px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl lg:-translate-x-24">
          <img
            src="/flowdesk.png"
            alt="Flowdesk dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
