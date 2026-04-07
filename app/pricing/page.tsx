import { Activity, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['6 monitors', '5 min check interval', '7-day data retention', '1 team member', '1 Slack channel'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    features: ['30 monitors', '1 min check interval', '30-day data retention', '5 team members', 'Unlimited alerts', '1 custom domain'],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$29',
    period: '/month',
    features: ['100 monitors', '30 sec check interval', '30-day data retention', '20 team members', 'Unlimited alerts', '3 custom domains'],
    cta: 'Start Team',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-500" />
            <span className="text-lg font-bold tracking-tight">Pulsee</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Log in</Link>
            <Link href="/signup" className="text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Pricing */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Simple, transparent pricing</h1>
            <p className="text-lg text-gray-500">Start free. Upgrade when you need more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-xl p-8 ${plan.highlight ? 'bg-brand-500 text-white ring-2 ring-brand-500 shadow-xl shadow-purple-200' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-white/80' : 'text-brand-500'}`} />
                      <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`w-full h-11 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg transition-all active-scale ${
                    plan.highlight
                      ? 'bg-white text-brand-600 hover:bg-gray-50'
                      : 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm shadow-purple-200'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">Annual billing: 20% discount. All plans include SSL and monitoring from multiple regions.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
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
