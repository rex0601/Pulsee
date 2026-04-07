'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Activity, Eye, EyeOff, Check, Circle } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const rules = [
    { label: 'Minimum 8 characters', met: false },
    { label: 'Contains a number', met: false },
    { label: 'Contains a special character', met: false },
    { label: 'No whitespace', met: true },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left — Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white tracking-tight">Pulsee</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white leading-[1.1] mb-4">
            Start monitoring<br />in 2 minutes.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-md">
            Free plan includes 5 monitors. No credit card required.
          </p>
          <div className="mt-12 flex flex-wrap gap-2">
            {['HTTP Monitoring', 'Status Pages', 'Slack Alerts', 'Custom Domains'].map((f) => (
              <span key={f} className="px-3.5 py-1.5 text-xs font-medium text-white/80 bg-white/[0.08] rounded-full border border-white/[0.08]">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Form */}
      <div className="flex-1 flex items-center justify-center bg-[#F9FAFB] px-6 sm:px-12">
        <div className="w-full max-w-[400px]">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <Activity className="w-5 h-5 text-brand-500" />
            <span className="text-lg font-bold tracking-tight">Pulsee</span>
          </div>

          <h1 className="text-[26px] font-bold text-gray-900 tracking-tight">Create your account</h1>
          <p className="text-sm text-gray-500 mt-1.5 mb-8">Start monitoring in minutes</p>

          {/* Google */}
          <button onClick={() => signIn('google', { callbackUrl: '/demo/dashboard' })} className="w-full h-11 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active-scale">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                <input type="text" placeholder="John" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                <input type="text" placeholder="Doe" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input type="email" placeholder="you@company.com" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full h-11 px-3.5 pr-10 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {rules.map((r, i) => (
                  <div key={i} className={`flex items-center gap-1.5 px-2 py-1 rounded ${r.met ? 'bg-green-50' : 'bg-gray-50'}`}>
                    {r.met ? <Check className="w-3 h-3 text-green-500" /> : <Circle className="w-3 h-3 text-gray-300" />}
                    <span className="text-[11px] font-medium text-gray-600">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-16 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400">
              Cloudflare Turnstile
            </div>

            <button type="submit" className="w-full h-11 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200 disabled:bg-brand-500/40 disabled:cursor-not-allowed" disabled>
              Create account
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account? <Link href="/login" className="text-brand-500 font-medium hover:text-brand-600">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
