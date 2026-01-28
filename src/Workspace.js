import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Workspace = () => {
  const navigate = useNavigate()
  const [workspace, setWorkspace] = useState({workspacename: ""})
  const [message, setMessage] = useState("")
  useEffect(()=>{

  },[])

  const handleCreateWorkSpace = async(e)=> {
   e.preventDefault();
   const userId = localStorage.getItem("userId")
    try {
      const res = await fetch("http://localhost:5000/api/workspace/createworkspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({workspacename : workspace.workspacename, userId : userId }),
      });
      const data = await res.json();
      if (data.name) {
        setMessage("WorkSpace Created !!");
        navigate('/addmembers') ;
      } else {
        setMessage("Invalid Credentials");
      }
    } catch (e) {
      setMessage(e.message);
    }
  }

  return (
   <div className="min-h-screen py-6 bg-[#0b0b0b] relative overflow-hidden flex items-center justify-center px-6">
  {/* BACKGROUND GLOWS */}
  <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[140px]" />
  <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[140px]" />

  {/* CARD */}
  <div className="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
    <span className="inline-block text-xs tracking-widest text-white/60 mb-6">
      WELCOME
    </span>

    <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
      Create your{" "}
      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        workspace
      </span>
    </h1>

    <p className="mt-4 text-white/70 text-sm leading-relaxed">
      Your workspace is where everything comes together — projects, tasks,
      conversations, and collaboration. Set it up once and start building with
      your team instantly.
    </p>

    {/* FORM */}
    <form className="mt-8 space-y-5">
      <div>
        <label className="block text-xs text-white/60 mb-2">
          WORKSPACE NAME
        </label>
        <input
          type="text"
          placeholder="e.g. Product Team"
          className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          onChange={(e)=>setWorkspace({...workspace, workspacename: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-xs text-white/60 mb-2">
          WORKSPACE DESCRIPTION
        </label>
        <textarea
          rows="3"
          placeholder="Tell us what this workspace is for"
          className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 text-white py-3 rounded-xl text-sm font-medium shadow-lg"
        onClick={handleCreateWorkSpace}
      >
        Create Workspace
      </button>
    </form>
    <p style={{color: "red"}}>{message}</p>
    {/* FOOTER */}
    <p className="mt-6 text-center text-sm text-white/60">
      You can invite teammates and customize settings later.
    </p>
  </div>
</div>

  )
}

export default Workspace
