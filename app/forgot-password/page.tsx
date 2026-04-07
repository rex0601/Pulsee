'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset email via Resend
    setSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-6">
      <div className="w-full max-w-[400px]">
        <div className="flex items-center gap-2 mb-8">
          <Activity className="w-5 h-5 text-brand-500" />
          <span className="text-lg font-bold tracking-tight">Pulsee</span>
        </div>

        {sent ? (
          <>
            <h1 className="text-[26px] font-bold text-gray-900 tracking-tight">Check your email</h1>
            <p className="text-sm text-gray-500 mt-1.5 mb-8">
              We sent a password reset link to <strong>{email}</strong>
            </p>
            <Link href="/login" className="flex items-center gap-2 text-sm text-brand-500 font-medium hover:text-brand-600">
              <ArrowLeft className="w-4 h-4" /> Back to login
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-[26px] font-bold text-gray-900 tracking-tight">Reset your password</h1>
            <p className="text-sm text-gray-500 mt-1.5 mb-8">Enter your email and we&apos;ll send you a reset link.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
              </div>
              <button type="submit" className="w-full h-11 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
                Send reset link
              </button>
            </form>

            <Link href="/login" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-6">
              <ArrowLeft className="w-4 h-4" /> Back to login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
