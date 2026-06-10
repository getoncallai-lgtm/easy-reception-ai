import { useState, useEffect, useRef } from "react";
import greetingAudioSrc from "@assets/ai_greeting_for_hero_section_1780920557076.mp3";
import demoCallSrc from "@assets/Easy_Reception_-_North_Star_Demo_Call_1780920578191.mp3";

const CALENDLY = "https://calendly.com/getoncallai/30min";

function formatTime(secs: number) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function WaveformPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const bars = Array.from({ length: 40 }, (_, i) => {
    const h = 20 + Math.abs(Math.sin(i * 0.7) * 60 + Math.cos(i * 1.3) * 20);
    return Math.min(100, Math.max(15, h));
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onEnded = () => { setPlaying(false); setProgress(0); setCurrentTime(0); };
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const playedCount = Math.floor((progress / 100) * bars.length);

  return (
    <div style={{ background: 'var(--off-white)', borderRadius: '12px', padding: '14px 16px', marginBottom: '14px' }}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '36px', marginBottom: '10px', cursor: 'pointer' }} onClick={toggle}>
        {bars.map((h, i) => (
          <div key={i} style={{
            flex: 1, borderRadius: '3px', minWidth: '3px', height: `${h}%`,
            background: i < playedCount ? 'linear-gradient(to top, #3ba882, #4a9fd8)' : 'linear-gradient(to top, #c6e8df, #c4d9ef)',
            transition: 'background .1s'
          }} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={toggle} style={{
          width: '32px', height: '32px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #3ba882, #4a9fd8)',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, boxShadow: '0 3px 10px rgba(59,168,130,0.35)'
        }} data-testid="waveform-play">
          {playing
            ? <span style={{ display: 'flex', gap: '2px' }}><span style={{ width: '3px', height: '10px', background: '#fff', borderRadius: '1px' }} /><span style={{ width: '3px', height: '10px', background: '#fff', borderRadius: '1px' }} /></span>
            : <svg width="12" height="12" fill="#fff" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
          }
        </button>
        <span style={{ fontSize: '.75rem', color: 'var(--muted)', fontVariantNumeric: 'tabular-nums', minWidth: '72px' }}>
          {formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : '—'}
        </span>
        <div onClick={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          if (audioRef.current?.duration) audioRef.current.currentTime = pct * audioRef.current.duration;
        }} style={{ flex: 1, height: '3px', background: 'var(--border)', borderRadius: '2px', position: 'relative', cursor: 'pointer' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: 'linear-gradient(90deg, #3ba882, #4a9fd8)', borderRadius: '2px', width: `${progress}%`, transition: 'width .1s linear' }} />
        </div>
      </div>
    </div>
  );
}

function DemoAudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onEnded = () => { setPlaying(false); setProgress(0); setCurrentTime(0); };
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  return (
    <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px' }}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-hex)', marginBottom: '14px' }}>
        🎧 Listen how Brenda handles a real call
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button onClick={toggle} style={{
          width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #3ba882, #4a9fd8)',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(59,168,130,0.35)'
        }} data-testid="demo-audio-play">
          {playing
            ? <span style={{ display: 'flex', gap: '3px' }}><span style={{ width: '4px', height: '14px', background: '#fff', borderRadius: '2px' }} /><span style={{ width: '4px', height: '14px', background: '#fff', borderRadius: '2px' }} /></span>
            : <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
          }
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '.82rem', fontWeight: 500, color: 'var(--text)' }}>
              {playing ? 'Playing — Brenda & Sam · North Star Heating' : 'Brenda & Sam · North Star Heating · Furnace emergency'}
            </span>
            <span style={{ fontSize: '.75rem', color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>
              {formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : '—'}
            </span>
          </div>
          <div onClick={(e) => {
            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            if (audioRef.current?.duration) audioRef.current.currentTime = pct * audioRef.current.duration;
          }} style={{ width: '100%', height: '5px', background: 'var(--border)', borderRadius: '3px', position: 'relative', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: 'linear-gradient(90deg, #3ba882, #4a9fd8)', borderRadius: '3px', width: `${progress}%`, transition: 'width .1s linear' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationsCarousel() {
  const integrations = [
    { abbr: 'Twilio', bg: '#f22f46', name: 'Twilio', cat: 'Phone / SMS' },
    { abbr: 'GHL', bg: 'linear-gradient(135deg,#F26D0A,#F7A000)', name: 'GoHighLevel', cat: 'CRM & Automation' },
    { abbr: 'Hs', bg: '#ff7a59', name: 'HubSpot', cat: 'CRM' },
    { abbr: 'SF', bg: '#00a1e0', name: 'Salesforce', cat: 'CRM' },
    { abbr: 'GCal', bg: 'linear-gradient(135deg,#4285f4,#34a853)', name: 'Google Calendar', cat: 'Scheduling' },
    { abbr: 'Cly', bg: '#006bff', name: 'Calendly', cat: 'Scheduling' },
    { abbr: 'Zap', bg: '#ff4a00', name: 'Zapier', cat: 'Automation' },
    { abbr: 'Mk', bg: '#7c3af5', name: 'Make', cat: 'Automation' },
    { abbr: 'Slk', bg: '#4a154b', name: 'Slack', cat: 'Notifications' },
    { abbr: 'N', bg: '#000', name: 'Notion', cat: 'Knowledge Base' },
    { abbr: 'At', bg: 'linear-gradient(135deg,#fcb400,#18bfff)', name: 'Airtable', cat: 'Database' },
    { abbr: 'Gs', bg: '#0f9d58', name: 'Google Sheets', cat: 'Reporting' },
    { abbr: 'Olk', bg: '#0078d4', name: 'Outlook', cat: 'Email & Calendar' },
    { abbr: 'n8n', bg: '#ea4b71', name: 'n8n', cat: 'Automation' },
    { abbr: 'Stripe', bg: '#6772e5', name: 'Stripe', cat: 'Payments' },
    { abbr: 'Zoho', bg: '#c8202a', name: 'Zoho CRM', cat: 'CRM' },
  ];
  const doubled = [...integrations, ...integrations];
  return (
    <div style={{ position: 'relative', overflow: 'hidden', marginTop: '48px', marginBottom: '16px' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '80px', zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to right, var(--white), transparent)' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '80px', zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to left, var(--white), transparent)' }} />
      <div style={{ overflow: 'hidden' }}>
        <div className="carousel-track" style={{ display: 'flex', gap: '14px', width: 'max-content' }}>
          {doubled.map((it, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', background: 'var(--white)', minWidth: '110px', flexShrink: 0 }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: it.bg, color: '#fff', fontSize: '.62rem', fontWeight: 700, letterSpacing: '.02em' }}>{it.abbr}</div>
              <div style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{it.name}</div>
              <div style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: '2px', whiteSpace: 'nowrap' }}>{it.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const pricingFeatures = [
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

function FeatureCell({ value }: { value: string | boolean }) {
  if (value === false) return <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>—</span>;
  if (value === 'Yes') return <span style={{ color: 'var(--accent-hex)', fontSize: '1.1rem', fontWeight: 600 }}>✓</span>;
  return <span style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 400 }}>{value}</span>;
}

const faqData: Record<string, { q: string; a: string }[]> = {
  overview: [
    { q: 'What exactly is Easy Reception AI?', a: 'Easy Reception AI is a voice-based AI receptionist designed specifically for service businesses. It answers every inbound call your business receives, engages naturally with callers, qualifies their needs, and books appointments — all without any human involvement. It works 24/7, never takes a break, and never has a bad day.' },
    { q: 'Who is this designed for?', a: 'We work primarily with service-based businesses where the phone is critical to revenue — home services (plumbing, HVAC, electrical, landscaping), physiotherapy and medical clinics, real estate agencies, and law firms. If your business loses money when a call goes unanswered, this is built for you.' },
    { q: 'Is this different from a voicemail or answering service?', a: 'Completely different. Voicemail passively records a message and leaves the work to you. A traditional answering service uses humans who read from a script. Easy Reception AI has a live, dynamic conversation — asking follow-up questions, checking your calendar availability, booking appointments in real time, and notifying you instantly. It acts, it doesn\'t just record.' },
    { q: 'How quickly can I be up and running?', a: 'Most clients are live within 24–48 hours of their onboarding call. We handle everything on our end — every client gets a dedicated specialist who sets up the AI with you 1-on-1, trains it on your business, configures call forwarding, and runs test calls before going live. You don\'t touch a single line of code.' },
  ],
  tech: [
    { q: 'What technology powers the AI voice?', a: 'We use enterprise-grade voice AI technology — the same class of infrastructure used by major media companies, broadcasters, and Fortune 500 brands. The voices are trained on vast amounts of human speech data, producing natural cadence, tone variation, and emotional nuance that basic AI voices lack. The result is a receptionist that genuinely sounds human.' },
    { q: 'Will it sound robotic?', a: 'No. Our voice infrastructure produces the most natural-sounding AI voices available today. Most callers cannot distinguish the AI from a human receptionist. You can also choose from a range of voices and we\'ll select one that best fits your brand.' },
    { q: 'How does the AI know about my business?', a: 'During our 1-on-1 onboarding call, we build a knowledge base from the information you provide — your services, pricing, FAQs, service area, booking process, and preferences. The AI is trained on this data so it can answer questions accurately and represent your brand correctly. We refine it further using real call data after launch.' },
    { q: 'Does the AI get smarter over time?', a: 'Yes. We review call transcripts regularly and optimise your agent based on real patterns — questions it struggled with, common caller objections, booking friction points. Over time, the agent becomes increasingly accurate and effective for your specific business context.' },
  ],
  onboarding: [
    { q: 'What does the onboarding process involve?', a: 'After sign-up, we schedule a 30-minute 1-on-1 onboarding call with your dedicated specialist. We learn about your services, typical calls, booking process, urgent call handling, and any business-specific language. We then build and configure your AI agent, set up call forwarding, and run test calls together before going live. No technical work is required from you — we handle every detail and keep you in the loop throughout.' },
    { q: 'Do I need to change my phone number?', a: 'No. We set up call forwarding so your existing business number routes seamlessly to your AI receptionist. Your clients continue calling the same number as always. Alternatively, you can port your number to us if you prefer — we manage the entire transfer process.' },
    { q: 'How long until the AI is ready to take calls?', a: 'Typically 24–48 hours from your onboarding call. We build, configure, test, and launch within that window. For Scale clients with complex requirements (multiple locations, custom integrations), it may take up to 5 business days.' },
    { q: "Can I update the AI's information after launch?", a: 'Absolutely. If you add new services, change your hours, update your booking process, or want to adjust how the AI handles certain calls, simply reach out and your account manager will update the agent\'s knowledge base — typically within 24 hours.' },
  ],
  calls: [
    { q: 'What happens when a caller asks something unexpected?', a: "The AI is trained to handle ambiguity gracefully. If a question falls outside its knowledge base, it acknowledges it honestly and either offers to take a message, suggests the caller follow up via email, or offers to have a team member call them back. It will never guess at answers or provide incorrect information." },
    { q: 'What if a caller specifically asks for a human?', a: 'If a caller requests a human, the AI can either warm-transfer the call to you directly (if you\'re available), take a detailed message with their contact info and urgency level, or schedule a specific callback time. The handling is entirely configurable based on your preference.' },
    { q: 'Can the AI handle emergency calls?', a: 'Yes. For businesses in trades like plumbing, HVAC, or healthcare, we configure an urgent call protocol. The AI identifies emergency keywords and urgency tone, escalates appropriately, and notifies you immediately via SMS — even outside business hours.' },
    { q: 'Will it book appointments accurately — even for complex schedules?', a: 'Yes. The booking module integrates with your live calendar (Google Calendar, Calendly, Outlook, and others). It only offers slots that are genuinely available, books in real time, and sends automatic confirmation messages to both the caller and your team. Double-bookings are structurally impossible.' },
  ],
  failsafe: [
    { q: 'What happens if the AI fails or goes offline?', a: 'We have multi-layered redundancy. If the AI is unavailable for any reason, calls are automatically forwarded to your backup number. Our uptime SLA is 99.9% — downtime is extremely rare, but we never leave your calls unprotected.' },
    { q: 'Is my client data safe and private?', a: 'All call data is encrypted in transit and at rest. We never sell, share, or use your client data for any purpose other than operating your AI agent. Call recordings and transcripts are accessible only through your private, password-protected dashboard.' },
    { q: 'Is this HIPAA-friendly for medical and physio clinics?', a: 'We take healthcare privacy seriously. Our infrastructure is designed to be compatible with HIPAA requirements for US-based clinics and PHIPA for Canadian providers. We strongly recommend discussing your specific compliance obligations with us before onboarding in the healthcare sector.' },
    { q: "Will callers know they're speaking to an AI?", a: "This depends on your preference and applicable regulations. We can configure the AI to clearly identify as an AI assistant, or to operate under a persona name without proactively disclosing its nature (e.g., \"Hi, this is Brenda from XYZ Services\"). In some jurisdictions, AI disclosure may be legally required — we advise you on this during onboarding." },
  ],
  cost: [
    { q: 'How is pricing structured?', a: 'We offer tiered monthly plans based on your expected call volume, measured in minutes per month. Each plan includes a set allocation of minutes, a one-time setup fee, and a per-minute overage rate. All plans include unlimited call transcripts and summaries.' },
    { q: 'What counts as a "minute"?', a: 'Usage is measured in active call minutes — the time from when the AI picks up to when the caller hangs up. Short calls under 30 seconds are not counted. You\'ll receive a notification when you reach 80% of your monthly limit.' },
    { q: 'Is there a setup fee?', a: 'Yes — each plan includes a one-time setup fee that covers the cost of building, training, configuring, and testing your custom AI agent. This ensures your agent is properly tailored to your business rather than deploying a generic template.' },
    { q: 'Can I cancel anytime?', a: "Yes. Our plans are month-to-month with no minimum term commitment. You can cancel with 30 days' notice. After cancellation, your calls will revert to your original phone line and all your call data remains accessible in your dashboard for 90 days." },
    { q: 'Is there a free trial?', a: "We don't offer a self-serve free trial — instead, we offer a complimentary consultation and live demo tailored to your business. During this session, we walk you through the platform, answer your questions, and show you exactly how your AI receptionist would be configured." },
  ],
};

const faqTabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'tech', label: 'The Technology' },
  { key: 'onboarding', label: 'Onboarding' },
  { key: 'calls', label: 'On a Real Call' },
  { key: 'failsafe', label: 'Fail-Safe & Security' },
  { key: 'cost', label: 'Cost & Billing' },
];

function FaqSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  return (
    <section id="faq" style={{ padding: '100px 48px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <span className="sec-eyebrow">FAQ</span>
        <h2 className="sec-h2">Every question, answered</h2>
        <p className="sec-sub" style={{ marginBottom: '36px' }}>Select a category below to find the answers you're looking for.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {faqTabs.map(tab => (
            <button key={tab.key} onClick={() => { setActiveTab(tab.key); setOpenItems({}); }} style={{
              padding: '8px 18px', borderRadius: '100px', fontSize: '.82rem', fontWeight: activeTab === tab.key ? 500 : 400,
              background: activeTab === tab.key ? 'var(--text)' : 'transparent',
              color: activeTab === tab.key ? '#fff' : 'var(--text2)',
              border: activeTab === tab.key ? 'none' : '1px solid var(--border)',
              cursor: 'pointer', transition: 'all .2s'
            }}>{tab.label}</button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqData[activeTab].map((item, i) => {
            const key = `${activeTab}-${i}`;
            const open = !!openItems[key];
            return (
              <div key={key} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                <div onClick={() => toggle(key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', cursor: 'pointer', fontSize: '.95rem', fontWeight: 500, color: 'var(--text)' }}>
                  {item.q}
                  <span style={{ fontSize: '1.2rem', color: 'var(--muted)', flexShrink: 0, marginLeft: '16px', transition: 'transform .2s', display: 'inline-block', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
                </div>
                {open && <div style={{ padding: '0 24px 20px', fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300 }}>{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [priceCurrency, setPriceCurrency] = useState<'USD' | 'CAD'>('USD');

  const pricingPlans = {
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

  const currentPlans = pricingPlans[priceCurrency];

  return (
    <div>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1,
        background: `radial-gradient(ellipse 700px 500px at 80% 20%, rgba(94,203,168,0.14) 0%, transparent 70%),
          radial-gradient(ellipse 600px 400px at 10% 80%, rgba(111,168,224,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 400px 400px at 90% 90%, rgba(186,167,248,0.1) 0%, transparent 70%),
          #ffffff`,
        pointerEvents: 'none'
      }} />

      {/* ── HERO ── */}
      <div style={{
        minHeight: '100vh', paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: '80px',
        paddingLeft: '48px', paddingRight: '48px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px',
        maxWidth: '1200px', margin: '0 auto'
      }} className="hero-grid">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(94,203,168,0.12)', border: '1px solid rgba(94,203,168,0.3)',
            color: 'var(--accent-hex)', borderRadius: '100px', fontSize: '.75rem', fontWeight: 500,
            letterSpacing: '.06em', textTransform: 'uppercase', padding: '6px 14px', marginBottom: '28px'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-hex)', animation: 'blink 2s ease infinite' }} />
            Your front desk powered by AI
          </div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.08, color: 'var(--text)', marginBottom: '24px' }}>
            Never miss another<br />client to a <span className="grad-text">missed call.</span>
          </h1>
          <p style={{ fontSize: '1.08rem', fontWeight: 300, color: 'var(--text2)', maxWidth: '460px', lineHeight: 1.75, marginBottom: '36px' }}>
            Easy Reception AI answers every call, qualifies your leads, and books appointments — 24 hours a day, 7 days a week. Your front desk never sleeps.
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="hero-cta-primary">Book a Free Consultation →</a>
            <a href="#demo" className="btn-outline" data-testid="hero-cta-secondary">▶ &nbsp;See How It Works</a>
          </div>
          <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '.78rem', color: 'var(--muted)' }}>
            <span>Live in 48 hours</span>
            <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} />
            <span>1-on-1 setup, fully managed</span>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          <p style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center', marginBottom: '14px' }}>
            Hear Brenda, your AI receptionist
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.95)', borderRadius: '20px', padding: '28px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
          }}>
            <div style={{ fontSize: '.75rem', fontWeight: 500, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Incoming call · In progress
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(59,168,130,0.12)', border: '1px solid rgba(59,168,130,0.25)', color: 'var(--accent-hex)', borderRadius: '100px', fontSize: '.68rem', fontWeight: 500, padding: '2px 9px' }}>
                <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-hex)', animation: 'blink 2s infinite' }} />
                Live
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #d4eee8, #d4e8f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text2)' }}>B</div>
              <div>
                <div style={{ fontSize: '.98rem', fontWeight: 500 }}>Brenda</div>
                <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '2px' }}>Easy Reception AI · Greeting</div>
              </div>
            </div>
            <WaveformPlayer src={greetingAudioSrc} />
            <div style={{ background: 'linear-gradient(135deg, rgba(94,203,168,0.08), rgba(111,168,224,0.08))', border: '1px solid rgba(94,203,168,0.2)', borderRadius: '12px', padding: '12px 14px', fontSize: '.82rem', lineHeight: 1.6, color: 'var(--text2)', fontStyle: 'italic' }}>
              <span style={{ color: 'var(--accent-hex)', fontStyle: 'normal', fontWeight: 500 }}>Brenda:</span> Press play and say hello!
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              {['Natural voice', 'Always available', 'Instant response'].map(chip => (
                <div key={chip} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '100px', padding: '5px 12px', fontSize: '.73rem', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-hex)', display: 'inline-block' }} />
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
            {[
              { num: '94%', label: 'Caller satisfaction' },
              { num: '2.3m', label: 'Avg response time' },
              { num: '24/7', label: 'Always answering' },
              { num: '0', label: 'Missed calls' },
            ].map(stat => (
              <div key={stat.label} style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.95)', borderRadius: '14px', padding: '16px 18px', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
                <span className="grad-text" style={{ fontSize: '1.8rem', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1, display: 'block', marginBottom: '4px' }}>{stat.num}</span>
                <span style={{ fontSize: '.74rem', color: 'var(--muted)', fontWeight: 400 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRADIENT SEPARATOR ── */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(94,203,168,0.4), rgba(111,168,224,0.4), rgba(186,167,248,0.3), transparent)' }} />

      {/* ── WHAT IT IS ── */}
      <section style={{ padding: '100px 48px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span className="sec-eyebrow">What It Is</span>
          <h2 className="sec-h2">Your AI receptionist, explained simply</h2>
          <p className="sec-sub">Three steps. Zero missed calls.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', marginTop: '60px' }} className="clarity-grid">
            {[
              { num: '01', icon: '📞', title: 'Phone Rings', desc: 'A client calls your business number. Instead of hitting voicemail or a busy signal, they\'re instantly connected to your AI receptionist — any time of day, any day of the year.' },
              { num: '02', icon: '🤖', title: 'AI Engages', desc: 'The AI answers naturally, asks the right questions, qualifies the caller\'s needs, checks your calendar, and books an appointment — all in real time, in a human-like conversation.' },
              { num: '03', icon: '🔔', title: 'You\'re Notified', desc: 'The moment a call ends, you receive a full summary — caller details, their request, the outcome, and a transcript. Every interaction is logged to your dashboard and CRM.' },
            ].map(card => (
              <div key={card.num} style={{ background: 'var(--white)', padding: '40px 36px', transition: 'background .25s' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px', display: 'block' }}>{card.num}</span>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', background: 'linear-gradient(135deg, rgba(94,203,168,0.15), rgba(94,203,168,0.08))' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text)' }}>{card.title}</h3>
                <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section style={{ padding: '100px 48px', background: 'var(--white)' }} id="integrations">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="sec-eyebrow">Our Integrations</span>
            <h2 className="sec-h2">Plugs into your existing stack</h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>Easy Reception AI connects seamlessly with the tools your business already uses — no complex setup required.</p>
          </div>
          <IntegrationsCarousel />
          <p style={{ textAlign: 'center', fontSize: '.8rem', color: 'var(--muted)', marginTop: '8px' }}>+ hundreds more via Zapier and Make · Custom integrations available on Scale plan</p>
        </div>
      </section>

      {/* ── GRADIENT SEPARATOR ── */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(94,203,168,0.4), rgba(111,168,224,0.4), rgba(186,167,248,0.3), transparent)' }} />

      {/* ── FEATURES ── */}
      <section style={{ padding: '100px 48px', background: 'var(--off-white)' }} id="features">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="sec-eyebrow">Features</span>
              <h2 className="sec-h2">Everything your front desk does,<br />done better</h2>
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '.85rem' }}>Book a Free Consultation →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="features-grid">
            {[
              { icon: '🕐', iconBg: 'rgba(94,203,168,.18)', title: '24/7 Never Miss a Call', desc: 'Your AI receptionist is always on — after hours, weekends, holidays. Every call is answered within two rings, no matter when it comes in.' },
              { icon: '📅', iconBg: 'rgba(111,168,224,.18)', title: 'Smart Appointment Booking', desc: 'Integrates with your live calendar to offer real availability, book in real time, and send automatic confirmations to both you and the caller.' },
              { icon: '🎯', iconBg: 'rgba(186,167,248,.22)', title: 'Instant Lead Qualification', desc: 'The AI asks the right questions upfront — service type, location, urgency, budget — so only pre-qualified opportunities reach your desk.' },
              { icon: '📋', iconBg: 'rgba(248,200,167,.22)', title: 'Complete Call Transcripts', desc: 'Every conversation is recorded, transcribed, and summarised. Access full transcripts and AI-generated call summaries from your dashboard.' },
              { icon: '🚨', iconBg: 'rgba(94,203,168,.18)', title: 'Emergency Call Escalation', desc: 'Configurable urgent call detection. When a caller signals an emergency, the AI immediately notifies you via SMS — even at 2am.' },
              { icon: '🔗', iconBg: 'rgba(186,167,248,.18)', title: 'Seamless Integrations', desc: 'Connects with GoHighLevel, HubSpot, Salesforce, Google Calendar, Calendly, Zapier, Make, Slack, and hundreds more.' },
            ].map(feat => (
              <div key={feat.title} style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--white)', transition: 'border-color .2s, transform .2s, box-shadow .2s', cursor: 'default' }} className="feat-card">
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem', background: feat.iconBg }}>{feat.icon}</div>
                <h4 style={{ fontSize: '.97rem', fontWeight: 600, letterSpacing: '-.01em', marginBottom: '10px' }}>{feat.title}</h4>
                <p style={{ fontSize: '.84rem', color: 'var(--text2)', lineHeight: 1.68, fontWeight: 300 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRADIENT SEPARATOR ── */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(94,203,168,0.4), rgba(111,168,224,0.4), rgba(186,167,248,0.3), transparent)' }} />

      {/* ── DEMO / IN ACTION ── */}
      <section style={{ padding: '100px 48px', background: 'var(--white)' }} id="demo">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="sec-eyebrow">In Action</span>
            <h2 className="sec-h2">Let us explain in under two mins</h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>
              Everything you need to know — what it is, why it matters, and exactly how it works — in one short video. Then press play and hear Brenda take a real call herself.
            </p>
          </div>

          {/* Single video placeholder */}
          <div style={{ marginBottom: '28px', borderRadius: '20px', overflow: 'hidden', aspectRatio: '16/9', position: 'relative', boxShadow: '0 24px 64px rgba(0,0,0,0.14)', maxWidth: '760px', margin: '0 auto 28px' }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(94,203,168,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div style={{ position: 'absolute', width: '320px', height: '320px', background: 'radial-gradient(ellipse, rgba(94,203,168,0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(12px)', border: '1.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 1, marginBottom: '16px' }}>
                <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid rgba(255,255,255,0.85)', marginLeft: '4px' }} />
              </div>
              <div style={{ zIndex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>Easy Reception AI — Full Explainer</div>
                <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.45)' }}>What it is · Why it matters · How it works · Under 2 minutes</div>
              </div>
            </div>
          </div>

          {/* Bridge text */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <p style={{ fontSize: '.95rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7 }}>
              Ready to hear what your callers will experience? <strong style={{ fontWeight: 500, color: 'var(--text)' }}>Press play below</strong> — this is Brenda handling a real inbound call.
            </p>
          </div>

          {/* Demo call audio */}
          <DemoAudioPlayer src={demoCallSrc} />

          {/* Transcript */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-.01em' }}>North Star Heating — Furnace Emergency</h3>
                <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: '3px' }}>Full call transcript · Sam R. · Markham, ON</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ background: 'rgba(94,203,168,0.1)', color: 'var(--accent-hex)', border: '1px solid rgba(94,203,168,0.25)', borderRadius: '100px', padding: '4px 12px', fontSize: '.72rem' }}>Booked</span>
                <span style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '100px', padding: '4px 12px', fontSize: '.72rem', color: 'var(--text2)' }}>Urgent</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: 'var(--off-white)', borderRadius: '12px', padding: '20px', marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
              {[
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: 'Thank you for calling North Star Heating. This is Brenda speaking. How can I help you today?' },
                { speaker: 'Sam', cls: 'var(--blue)', text: "Brenda, my name is Sam. My furnace just cut out and I was hoping you could send someone over here." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Hi Sam, got it. When you say it cut out, do you have absolutely no heat at all right now or is it still blowing a bit of air?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "It's completely off." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Okay, so no heat at all. Just to check Sam — you're not smelling gas or any burning or electrical smell, and there's no smoke or flooding around the furnace, right?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "Yeah, no, nothing like that." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Alright, thanks for confirming that. We should get someone out there as soon as we can. Are you hoping for a visit today or are you okay with the next available slot, even if that's tomorrow?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "I was hoping if you guys could send someone today." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "That makes sense — we'll treat it as urgent. I have an opening this afternoon between 1 and 4. Does that window work for you?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "Yeah, that works." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Perfect. Just so you know, that appointment is during regular hours and the diagnostic rate is $129 an hour. Want me to go ahead and book that in?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "Sure." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Alright — what's your full name, Sam? First and last." },
                { speaker: 'Sam', cls: 'var(--blue)', text: "That's Sam Robinson." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Thanks, Sam. And the service address — street number, street name, and city?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "That's 163 6th Avenue up in Markham." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Got it. And the best phone number for the technician to reach you?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "672-888-1407." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Before I lock this in — I have Sam Robinson at 163 6th Avenue in Markham, phone 672-888-1407, for no heat / furnace not running, today between 1 and 4 at $129/hr. Does all that look right?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "That looks great." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "Awesome — you're all set, Sam. Booked in for today between 1 and 4. The technician will call before they head over. Anything else I can help with?" },
                { speaker: 'Sam', cls: 'var(--blue)', text: "No, that'll be it. Thank you." },
                { speaker: 'Brenda', cls: 'var(--accent-hex)', text: "You're welcome, Sam. Thanks for calling North Star Heating — we'll have the tech reach out before they arrive. Have a good rest of your day and stay warm!" },
              ].map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: line.cls, flexShrink: 0, paddingTop: '2px', minWidth: '50px' }}>{line.speaker}</span>
                  <span style={{ fontSize: '.86rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>{line.text}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(94,203,168,0.08), rgba(111,168,224,0.08))', border: '1px solid rgba(94,203,168,0.2)', borderRadius: '10px', padding: '12px 14px', fontSize: '.82rem', color: 'var(--text2)', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem' }}>✅</span>
              Appointment booked 1–4 PM · Emergency flag triggered · Diagnostic rate confirmed · SMS confirmation sent
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '100px 48px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="sec-eyebrow">Setup</span>
            <h2 className="sec-h2">Live in 48 hours, not 48 days</h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>We handle everything. You just show up for a 30-minute onboarding call.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'start', gap: 0 }} className="steps-grid">
            {[
              { num: 'Step 01', icon: '📞', title: 'Connect Your Number', desc: 'We set up call forwarding from your existing business number — or port your number to us. No downtime. No change for your clients.' },
              null,
              { num: 'Step 02', icon: '🛠', title: 'We Build Your Agent', desc: 'A 30-minute 1-on-1 onboarding call is all we need. Your dedicated specialist configures the AI, trains it on your business, and runs test calls until everything sounds exactly right.' },
              null,
              { num: 'Step 03', icon: '✅', title: 'It Handles Every Call', desc: 'Go live within 48 hours. Your AI receptionist answers every call, books appointments, and sends you real-time summaries automatically.' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px', marginTop: '80px' }}>
                  <div style={{ width: '40px', height: '1.5px', background: 'linear-gradient(90deg, rgba(94,203,168,0.4), rgba(111,168,224,0.4))', borderRadius: '2px' }} />
                </div>
              ) : (
                <div key={item.num} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px 30px', textAlign: 'center', transition: 'border-color .2s, box-shadow .2s, transform .2s' }} className="step-card">
                  <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.14em', color: 'var(--accent-hex)', textTransform: 'uppercase', marginBottom: '16px' }}>{item.num}</div>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-.02em', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '.86rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                </div>
              )
            )}
          </div>

          {/* ── SUPPORT CALLOUT ── */}
          <div style={{ marginTop: '40px', background: 'linear-gradient(135deg, rgba(94,203,168,0.07), rgba(111,168,224,0.07))', border: '1px solid rgba(94,203,168,0.2)', borderRadius: '20px', padding: '36px 40px', display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(94,203,168,0.2), rgba(111,168,224,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>🤝</div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-.01em', marginBottom: '10px', color: 'var(--text)' }}>White-glove support, from day one and beyond</h4>
              <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, maxWidth: '680px' }}>
                Every client gets a dedicated specialist who handles the entire setup with you personally — no templates, no self-serve portals. We walk you through each step, keep you informed throughout the integration, and remain your point of contact long after you go live. When you need a change, a new script, or a new integration, we're a message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRADIENT SEPARATOR ── */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(94,203,168,0.4), rgba(111,168,224,0.4), rgba(186,167,248,0.3), transparent)' }} />

      {/* ── TESTIMONIALS / CLIENT STORIES ── */}
      <section style={{ padding: '100px 48px' }} id="stories">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="sec-eyebrow">Client Stories</span>
              <h2 className="sec-h2">What changed for real businesses</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '48px' }} className="stories-grid">
            {[
              { industry: '🔧 Home Services', result: '+40% bookings', quote: 'Before Easy Reception, we were <strong>losing a third of our incoming calls</strong> while the crew was out on jobs. We couldn\'t hire a full-time receptionist — it just wasn\'t viable. Within the first week, we caught three jobs we would\'ve missed entirely.', init: 'D', name: 'Dan Kowalski', role: 'Owner · DK Plumbing & Heating' },
              { industry: '🏥 Physiotherapy', result: '6 hrs/week saved', quote: 'My front desk staff used to spend half their day on the phone answering the same five questions. Now <strong>the AI handles all of it</strong> — intake questions, appointment booking, rescheduling — and my team can actually focus on patients in the room.', init: 'S', name: 'Dr. Sarah Renaud', role: 'Director · Renaud Physiotherapy' },
              { industry: '⚖️ Law Firm', result: 'Zero missed leads', quote: 'I was honestly sceptical. But it\'s <strong>more consistent than any receptionist we\'ve hired</strong>. It takes the right information, filters out unqualified callers, and every lead arrives pre-screened. Setup was under 48 hours.', init: 'M', name: 'Marcus Patel', role: 'Partner · Patel & Associates Law' },
            ].map(s => (
              <div key={s.name} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--text2)' }}>{s.industry}</span>
                  <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--accent-hex)', background: 'rgba(26,138,111,0.08)', border: '1px solid rgba(26,138,111,0.15)', borderRadius: '100px', padding: '3px 10px' }}>{s.result}</span>
                </div>
                <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, flex: 1 }} dangerouslySetInnerHTML={{ __html: `"${s.quote}"` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4eee8, #d4e8f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '.9rem', color: 'var(--text2)', flexShrink: 0 }}>{s.init}</div>
                  <div>
                    <div style={{ fontSize: '.88rem', fontWeight: 600 }}>{s.name}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '2px' }}>{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: '100px 48px', background: 'var(--off-white)' }} id="pricing">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="sec-eyebrow">Pricing</span>
            <h2 className="sec-h2">Simple, transparent pricing</h2>
            <p className="sec-sub" style={{ margin: '0 auto 32px' }}>Plans built around your call volume. No surprises, no hidden fees — just a receptionist that pays for itself.</p>
            <div style={{ display: 'inline-flex', background: 'var(--white)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              {(['USD', 'CAD'] as const).map(c => (
                <button key={c} onClick={() => setPriceCurrency(c)} style={{
                  padding: '9px 28px', borderRadius: '8px', fontSize: '.88rem', fontWeight: 500,
                  background: priceCurrency === c ? 'var(--white)' : 'transparent',
                  color: priceCurrency === c ? 'var(--text)' : 'var(--muted)',
                  boxShadow: priceCurrency === c ? '0 2px 8px rgba(0,0,0,0.07)' : 'none',
                  border: priceCurrency === c ? '1px solid var(--border)' : 'none',
                  cursor: 'pointer', transition: 'all .2s'
                }}>{c === 'USD' ? '🇺🇸 USD' : '🇨🇦 CAD'}</button>
              ))}
            </div>
          </div>

          {/* Plan cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '64px' }} className="pricing-grid">
            {currentPlans.map(plan => (
              <div key={plan.name} style={{
                background: 'var(--white)', border: plan.highlight ? '2px solid var(--accent-hex)' : '1px solid var(--border)',
                borderRadius: '24px', padding: '40px 32px', position: 'relative',
                boxShadow: plan.highlight ? '0 24px 56px rgba(26,138,111,0.12)' : '0 8px 24px rgba(0,0,0,0.04)',
                transform: plan.highlight ? 'scale(1.03)' : 'none',
              }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #3ba882, #4a9fd8)', color: '#fff', fontSize: '.7rem', fontWeight: 700, padding: '5px 18px', borderRadius: '100px', letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(59,168,130,0.35)' }}>Most Popular</div>
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
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                  Book a Free Consultation →
                </a>
              </div>
            ))}
          </div>

          {/* Feature comparison */}
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-.02em', marginBottom: '8px', color: 'var(--text)' }}>Compare all features</h3>
          <p style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: '28px', fontWeight: 300 }}>Everything included in each plan.</p>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
              <div style={{ padding: '18px 28px', fontSize: '.78rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>Feature</div>
              {['Core', 'Growth', 'Scale'].map((p, i) => (
                <div key={p} style={{ padding: '18px 24px', textAlign: 'center', fontSize: '.88rem', fontWeight: 700, color: i === 1 ? 'var(--accent-hex)' : 'var(--text)' }}>
                  {p}{i === 1 && <span style={{ display: 'block', fontSize: '.62rem', fontWeight: 500, color: 'var(--accent-hex)', letterSpacing: '.06em', textTransform: 'uppercase', marginTop: '2px' }}>Popular</span>}
                </div>
              ))}
            </div>
            {pricingFeatures.map((feat, i) => (
              <div key={feat.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i < pricingFeatures.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                <div style={{ padding: '16px 28px', fontSize: '.88rem', color: 'var(--text2)', fontWeight: 300 }}>{feat.name}</div>
                {[feat.core, feat.growth, feat.scale].map((val, j) => (
                  <div key={j} style={{ padding: '16px 24px', textAlign: 'center', background: j === 1 ? 'rgba(94,203,168,0.03)' : 'transparent' }}>
                    <FeatureCell value={val} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── CTA ── */}
      <section id="cta" style={{ background: 'linear-gradient(135deg, #0d5c48, #1a4a7a)', padding: '100px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#fff', marginBottom: '16px' }}>Ready to stop missing calls?</h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '36px', fontWeight: 300 }}>
            Book a free consultation today. Your dedicated specialist will have your AI receptionist live within 48 hours — fully configured, fully managed, and built around your business.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '.9rem', padding: '14px 32px' }} data-testid="cta-book-demo">Book a Free Consultation →</a>
            <a href="#demo" style={{ fontSize: '.9rem', padding: '13px 28px', border: '1.5px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)', background: 'transparent', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>See How It Works</a>
          </div>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,0.45)', marginTop: '24px' }}>1-on-1 setup · Live in 48 hours · No setup complexity</p>
        </div>
      </section>
    </div>
  );
}
