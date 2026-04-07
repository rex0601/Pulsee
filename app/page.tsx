import { ArrowRight, Activity, Shield, Zap, Globe, Bell, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-500" />
            <span className="text-lg font-bold tracking-tight">Pulsee</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Log in</Link>
            <Link href="/signup" className="text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold mb-8">
            <Activity className="w-3.5 h-3.5" />
            Monitoring made simple
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
            Know when your
            <br />
            <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">services go down</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Monitor your websites, APIs, and services. Get alerted instantly when something breaks. Share beautiful status pages with your users.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/signup" className="flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all active-scale shadow-lg shadow-purple-200">
              Start for free <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#features" className="px-6 py-3 text-gray-600 font-medium border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Everything you need to stay online</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Simple setup. Powerful monitoring. Beautiful status pages.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'HTTP Monitoring', desc: 'Check any URL every 30 seconds. Get alerted when it goes down.' },
              { icon: BarChart3, title: 'Uptime Charts', desc: '30-day uptime history with response time graphs.' },
              { icon: Globe, title: 'Status Pages', desc: 'Beautiful public status pages. Custom domain support.' },
              { icon: Bell, title: 'Instant Alerts', desc: 'Slack and email notifications when incidents are detected.' },
              { icon: Shield, title: 'Auto Incidents', desc: '3 consecutive failures = automatic incident creation.' },
              { icon: Activity, title: 'Deep Health Checks', desc: 'Check databases, APIs, and external dependencies.' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Ready to start monitoring?</h2>
          <p className="text-gray-500 mb-8">Free plan includes 5 monitors. No credit card required.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white text-lg font-semibold rounded-lg transition-all active-scale shadow-lg shadow-purple-200">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Activity className="w-4 h-4" />
            <span>Pulsee by Digitalog Technologies, Inc.</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
