import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddMembers = () => {
  const [emails, setEmails] = useState([""]);
  const navigate = useNavigate()
  const handleChange = (index, value) => {
    const updated = [...emails];
    updated[index] = value;
    setEmails(updated);
  };

  const addField = () => {
    setEmails([...emails, ""]);
  };

  const handleSubmit = () => {
    navigate("/dashboard")
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] relative overflow-hidden flex items-center justify-center px-6">
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[140px]" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
      >
        <span className="inline-block text-xs tracking-widest text-white/60 mb-6">
          INVITE TEAM
        </span>

        <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
          Add your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            team members
          </span>
        </h1>

        <p className="mt-4 text-white/70 text-sm leading-relaxed">
          Invite teammates to collaborate in your workspace. You can always add
          or remove members later.
        </p>

        {/* EMAIL INPUTS */}
        <div className="mt-8 space-y-4">
          {emails.map((email, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <input
                type="email"
                placeholder="member@company.com"
                value={email}
                onChange={(e) => handleChange(index, e.target.value)}
                className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              />

              <button
                type="button"
                onClick={addField}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-blue-400 hover:bg-white/20 transition"
              >
                <Plus size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 text-white py-3 rounded-xl text-sm font-medium shadow-lg"
        >
          Add Members
        </button>

        <p className="mt-6 text-center text-sm text-white/60">
          You can skip this step and invite people later.
        </p>
      </motion.div>
    </div>
  );
};

export default AddMembers;
