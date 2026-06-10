import { useState } from "react";

const features = [
  { name: '24/7/365 Answering', core: 'Yes', growth: 'Yes', scale: 'Yes' },
  { name: 'Lead Qualification', core: 'Basic', growth: 'Advanced', scale: 'Custom' },
  { name: 'Email/SMS Notifications', core: 'Yes', growth: 'Yes', scale: 'Yes' },
  { name: 'Call Transcripts', core: 'Yes', growth: 'Yes', scale: 'Yes' },
  { name: 'Custom System Greeting', core: 'Yes', growth: 'Yes', scale: 'Yes' },
  { name: 'Calendar Integration', core: '1 Calendar', growth: '3 Calendars', scale: '10+ Calendars' },
  { name: 'After-Hours Routing', core: false, growth: 'Yes', scale: 'Yes' },
  { name: 'Multilingual Support', core: false, growth: 'Yes', scale: 'Yes' },
  { name: 'Full CRM Integration', core: false, growth: false, scale: 'Yes' },
  { name: 'Custom API Access', core: false, growth: false, scale: 'Yes' },
  { name: 'Dedicated Account Manager', core: false, growth: 'Yes', scale: 'Yes' },
];

const faqItems = [
  { q: 'How is pricing structured?', a: 'We offer tiered monthly plans based on your expected call volume, measured in minutes per month. Each plan includes a set allocation of minutes, a one-time setup fee, and a per-minute overage rate for calls beyond your monthly limit. All plans include unlimited call transcripts and summaries.' },
  { q: 'What counts as a "minute"?', a: "Usage is measured in active call minutes — the time from when the AI picks up to when the caller hangs up. Short calls under 30 seconds are not counted. You'll receive a notification when you reach 80% of your monthly limit, giving you time to review or upgrade before overage applies." },
  { q: 'Is there a setup fee?', a: "Yes — each plan includes a one-time setup fee that covers the cost of building, training, configuring, and testing your custom AI agent. This ensures your agent is properly tailored to your business rather than deploying a generic template. The setup fee is paid once; there is no annual renewal of it." },
  { q: 'Can I cancel anytime?', a: "Yes. Our plans are month-to-month with no minimum term commitment. You can cancel with 30 days' notice. After cancellation, your calls will revert to your original phone line and all your call data remains accessible in your dashboard for 90 days." },
  { q: 'Is there a free trial?', a: "We don't offer a self-serve free trial — instead, we offer a complimentary consultation and live demo tailored to your business. During this session, we walk you through the platform, answer your questions, and show you exactly how your AI receptionist would be configured. Book a consultation to get started." },
];

function FeatureCell({ value }: { value: string | boolean }) {
  if (value === false) return <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>—</span>;
  if (value === 'Yes') return <span style={{ color: 'var(--accent-hex)', fontSize: '1.1rem', fontWeight: 600 }}>✓</span>;
  return <span style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 400 }}>{value}</span>;
}

export default function Pricing() {
  const [currency, setCurrency] = useState<'USD' | 'CAD'>('USD');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = {
    USD: [
      { name: 'Core', subtitle: 'The Lead Guard', setup: '$149', monthly: '$89', min: 75, overage: '$0.89', highlight: false },
      { name: 'Growth', subtitle: 'The Obvious Choice', setup: '$499', monthly: '$189', min: 250, overage: '$0.79', highlight: true },
      { name: 'Scale', subtitle: 'The Full Office', setup: '$1,299', monthly: '$349', min: 700, overage: '$0.69', highlight: false },
    ],
    CAD: [
      { name: 'Core', subtitle: 'The Lead Guard', setup: 'CA$199', monthly: 'CA$119', min: 75, overage: 'CA$0.99', highlight: false },
      { name: 'Growth', subtitle: 'The Obvious Choice', setup: 'CA$649', monthly: 'CA$259', min: 250, overage: 'CA$0.89', highlight: true },
      { name: 'Scale', subtitle: 'The Full Office', setup: 'CA$1,799', monthly: 'CA$479', min: 700, overage: 'CA$0.79', highlight: false },
    ],
  };

  const current = plans[currency];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-h) + 64px)', background: 'var(--white)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{ textAlign: 'center', padding: '0 48px 80px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>Pricing</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '16px' }}>
            Simple, transparent pricing
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '36px', fontWeight: 300 }}>
            Plans built around your call volume. No surprises, no hidden fees — just a receptionist that pays for itself.
          </p>
          <div style={{ display: 'inline-flex', background: 'var(--surface)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            {(['USD', 'CAD'] as const).map(c => (
              <button key={c} onClick={() => setCurrency(c)} data-testid={`currency-${c.toLowerCase()}`} style={{
                padding: '9px 28px', borderRadius: '8px', fontSize: '.88rem', fontWeight: 500,
                background: currency === c ? 'var(--white)' : 'transparent',
                color: currency === c ? 'var(--text)' : 'var(--muted)',
                boxShadow: currency === c ? '0 2px 8px rgba(0,0,0,0.07)' : 'none',
                border: 'none', cursor: 'pointer', transition: 'all .2s'
              }}>{c === 'USD' ? '🇺🇸 USD' : '🇨🇦 CAD'}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <div style={{ padding: '0 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1100px', margin: '0 auto' }} className="pricing-grid">
          {current.map((plan) => (
            <div key={plan.name} style={{
              background: 'var(--white)', border: plan.highlight ? '2px solid var(--accent-hex)' : '1px solid var(--border)',
              borderRadius: '24px', padding: '40px 32px', position: 'relative',
              boxShadow: plan.highlight ? '0 24px 56px rgba(26,138,111,0.12)' : '0 8px 24px rgba(0,0,0,0.04)',
              transform: plan.highlight ? 'scale(1.03)' : 'none',
              transition: 'transform .2s, box-shadow .2s'
            }} data-testid={`plan-${plan.name.toLowerCase()}`}>
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #3ba882, #4a9fd8)',
                  color: '#fff', fontSize: '.7rem', fontWeight: 700,
                  padding: '5px 18px', borderRadius: '100px', letterSpacing: '.06em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(59,168,130,0.35)'
                }}>Most Popular</div>
              )}
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '4px', color: 'var(--text)' }}>{plan.name}</h3>
              <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '28px', fontStyle: 'italic' }}>"{plan.subtitle}"</p>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.03em', color: 'var(--text)' }}>{plan.monthly}</span>
                <span style={{ fontSize: '.9rem', color: 'var(--muted)', marginLeft: '6px' }}>/month</span>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '28px' }}>+ {plan.setup} one-time setup fee</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.88rem' }}>
                  <span style={{ color: 'var(--text2)' }}>Included minutes</span>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>{plan.min} min/mo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.88rem' }}>
                  <span style={{ color: 'var(--text2)' }}>Overage rate</span>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>{plan.overage}/min</span>
                </div>
              </div>
              <button className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }} data-testid={`cta-${plan.name.toLowerCase()}`}>
                Book a Free Consultation →
              </button>
              {plan.name === 'Scale' && (
                <p style={{ textAlign: 'center', fontSize: '.75rem', color: 'var(--muted)', marginTop: '12px' }}>Contact us for custom pricing</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURE COMPARISON ── */}
      <div style={{ padding: '0 48px 100px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '80px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '8px', color: 'var(--text)' }}>Compare all features</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--text2)', marginBottom: '40px', fontWeight: 300 }}>Everything included in each plan.</p>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
              <div style={{ padding: '20px 28px', fontSize: '.78rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>Feature</div>
              {['Core', 'Growth', 'Scale'].map((p, i) => (
                <div key={p} style={{ padding: '20px 24px', textAlign: 'center', fontSize: '.88rem', fontWeight: 700, color: i === 1 ? 'var(--accent-hex)' : 'var(--text)' }}>
                  {p}
                  {i === 1 && <span style={{ display: 'block', fontSize: '.65rem', fontWeight: 500, color: 'var(--accent-hex)', letterSpacing: '.06em', textTransform: 'uppercase', marginTop: '2px' }}>Most Popular</span>}
                </div>
              ))}
            </div>
            {features.map((feat, i) => (
              <div key={feat.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i < features.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                <div style={{ padding: '18px 28px', fontSize: '.88rem', color: 'var(--text2)', fontWeight: 300 }}>{feat.name}</div>
                {[feat.core, feat.growth, feat.scale].map((val, j) => (
                  <div key={j} style={{ padding: '18px 24px', textAlign: 'center', background: j === 1 ? 'rgba(94,203,168,0.03)' : 'transparent' }}>
                    <FeatureCell value={val} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ padding: '80px 48px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '40px', color: 'var(--text)' }}>Pricing questions, answered</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                <div onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', cursor: 'pointer', fontSize: '.95rem', fontWeight: 500, color: 'var(--text)' }} data-testid={`faq-${i}`}>
                  {item.q}
                  <span style={{ fontSize: '1.2rem', color: 'var(--muted)', flexShrink: 0, marginLeft: '16px', transition: 'transform .2s', display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: 'linear-gradient(135deg, #0d5c48, #1a4a7a)', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em' }}>Start answering every call</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', fontWeight: 300, lineHeight: 1.75 }}>
            Book a free consultation — we'll configure your AI receptionist and have it live within 48 hours.
          </p>
          <a href="/#cta" className="btn-primary" style={{ fontSize: '.9rem', padding: '14px 32px' }} data-testid="pricing-cta">Book a Free Consultation →</a>
          <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '20px' }}>Live in 48 hours · Fully managed setup</p>
        </div>
      </div>
    </div>
  );
}
