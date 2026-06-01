"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src="https://i.postimg.cc/Y0vmpvJW/logo.png" alt="Logo" className="w-10 h-10 rounded-lg shadow-sm" />
          <span className="font-bold tracking-tighter text-xl">STARGAME <span className="text-blue-500">STUDIO</span></span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://discord.gg/Sbv3XKDbrP" target="_blank" className="text-sm font-medium hover:text-blue-600 transition">Our Community</a>
          {session ? (
            <div className="flex items-center gap-4">
              <img src={session.user.image} className="w-8 h-8 rounded-full border" />
              <button onClick={() => signOut()} className="text-sm font-semibold text-red-500 hover:text-red-700">Logout</button>
            </div>
          ) : (
            <button onClick={() => signIn('discord')} className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-zinc-800 transition">
              Login with Discord
            </button>
          )}
        </div>
      </nav>

      {/* Hero / About Us Section */}
      {!session ? (
        <section className="max-w-4xl mx-auto mt-32 text-center px-6">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Stargame Bot Department
          </div>
          <h1 className="text-6xl font-bold mb-8">Professional tools for <br/> ambitious developers.</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Welcome to the Bot Department. We specialize in building clean, modern, 
            and efficient Discord management systems. Check out our 
            <a href="https://docs.google.com/document/d/1ajtVpSeUBVtzyTz0k2weQaSYjJYsY3FcXe6x5kfX4nY/edit?usp=sharing" className="text-blue-500 underline ml-1">About Us</a> 
            to see our vision.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => signIn('discord')} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:scale-105 transition">Deploy Your First Bot</button>
            <a href="https://discord.gg/Sbv3XKDbrP" className="bg-white border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition">Join the Discord</a>
          </div>
        </section>
      ) : (
        /* The Dashboard (Visible when logged in) */
        <section className="max-w-6xl mx-auto mt-16 px-6">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {session.user.name}</h2>
          <p className="text-gray-400 mb-10 text-sm">Manage your 4 active bots from this panel.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Functional Bot Card: Warden AI */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Active</span>
              </div>
              <h3 className="text-xl font-bold">Warden AI (AutoMod)</h3>
              <p className="text-gray-400 text-sm mt-2 mb-6">Scanning messages with API key: <code className="bg-gray-100 px-1 italic">...TNrrYZ_WNL</code></p>
              <div className="flex gap-3">
                <button className="flex-1 bg-zinc-100 py-3 rounded-xl font-bold text-sm hover:bg-zinc-200">Settings</button>
                <button className="flex-1 bg-zinc-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-zinc-800">View Logs</button>
              </div>
            </div>

            {/* Functional Bot Card: Courier */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
               <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Active</span>
              </div>
              <h3 className="text-xl font-bold">Courier (DM Manager)</h3>
              <p className="text-gray-400 text-sm mt-2 mb-6">Supports 10 image uploads and custom /read commands.</p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold text-sm">Send New Outreach</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
