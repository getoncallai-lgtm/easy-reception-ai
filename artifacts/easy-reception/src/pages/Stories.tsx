import { Link } from "wouter";

const stories = [
  {
    id: 'dk-plumbing',
    industry: '🔧 Home Services',
    tag: 'Case Study',
    result: '+40% bookings in 30 days',
    headline: 'How DK Plumbing & Heating stopped losing jobs to missed calls',
    excerpt: 'Before Easy Reception AI, Dan\'s crew was on the road while calls went unanswered. Within one week of going live, he\'d captured three jobs that would have walked straight to a competitor.',
    init: 'D',
    name: 'Dan Kowalski',
    role: 'Owner · DK Plumbing & Heating',
    readTime: '4 min read',
    body: [
      'Dan Kowalski has been running DK Plumbing & Heating for eleven years. By any measure, business was good — a full crew, repeat customers, strong word-of-mouth. But there was a problem he\'d learned to live with: missed calls.',
      '"When you\'re under a sink or up in an attic, you\'re not answering the phone. We\'d come up for air at noon and see four missed calls, and by the time we\'d ring them back, two had already booked somewhere else. That\'s real money walking out the door."',
      'Dan looked at hiring a part-time receptionist, but the math didn\'t work. His busiest hours were exactly when someone in an office would be at lunch. He needed coverage that matched his callers\' urgency — not a 9-to-5 schedule.',
      'After setting up Easy Reception AI, his calls are answered within two rings regardless of what the crew is doing. The AI handles the intake — service type, address, urgency, preferred time — and books directly into his calendar.',
      '"The first week, I caught three jobs I know we would have missed. One was an emergency pipe situation on a Saturday. The AI flagged it, texted me immediately, and had the customer booked for first thing Sunday. That one job alone paid for months of the service."',
      'Forty percent more bookings didn\'t come from more advertising or a bigger crew. It came from answering the phone.',
    ],
  },
  {
    id: 'renaud-physio',
    industry: '🏥 Physiotherapy',
    tag: 'Case Study',
    result: '6 hours saved per week',
    headline: 'Renaud Physiotherapy freed their front desk from the phone — without losing the personal touch',
    excerpt: 'Dr. Sarah Renaud\'s staff were spending half their day answering the same five intake questions. Now the AI handles all of it, and her team is focused on patient care.',
    init: 'S',
    name: 'Dr. Sarah Renaud',
    role: 'Director · Renaud Physiotherapy',
    readTime: '5 min read',
    body: [
      'Renaud Physiotherapy runs two clinics and books an average of 90 appointments per week. For years, that volume meant a front desk team constantly pulled between the phone and the waiting room.',
      '"My staff are trained clinicians\' assistants. Their job should be supporting patients, doing intake paperwork, preparing rooms. Instead, they were spending three to four hours a day answering calls about parking, wait times, whether we take a specific insurance. It was demoralising for them and it wasn\'t good for patients."',
      'Dr. Renaud\'s concern before implementing Easy Reception AI was straightforward: would patients feel like they\'d been handed off to a machine?',
      '"I was honestly worried about that. Healthcare is personal. But the feedback has been positive — callers say it\'s professional and efficient. And critically, anything beyond a routine inquiry gets escalated directly to a human. The AI knows its lane."',
      'The results were measurable within two weeks. Front desk staff recovered six hours per week collectively — time now used for patient-facing tasks. After-hours inquiries that previously went to voicemail are now handled in real time, with callbacks scheduled automatically for the next morning.',
      '"We didn\'t reduce headcount. We made the people we have significantly more effective. That\'s the right way to use this kind of technology."',
    ],
  },
  {
    id: 'patel-associates',
    industry: '⚖️ Legal',
    tag: 'Case Study',
    result: 'Zero missed leads',
    headline: 'Patel & Associates: Every potential client now gets a response within minutes',
    excerpt: 'Marcus Patel was losing prospective clients not because of his legal work, but because of call volume his small firm couldn\'t keep up with. That changed in 48 hours.',
    init: 'M',
    name: 'Marcus Patel',
    role: 'Partner · Patel & Associates Law',
    readTime: '4 min read',
    body: [
      'At a firm of four lawyers, every prospective client call matters. Unlike a large practice with a dedicated intake team, Patel & Associates handled incoming calls through a shared line — which meant calls were either caught between meetings or not caught at all.',
      '"In law, the person who picks up the phone wins the client. Full stop. If someone is searching for legal help and you don\'t answer, they move to the next listing. We were losing clients before they even had a chance to explain their situation."',
      'Marcus was sceptical about AI handling legal intake. He expected a rigid, scripted system that would frustrate callers with complex or sensitive situations.',
      '"That was my concern — that it would be inflexible. But it\'s genuinely conversational. It asks the right questions, gathers the information we need, and knows exactly when to say \'I\'ll have a lawyer call you back\'. It doesn\'t overreach."',
      'Setup took under 48 hours. The AI was trained on their practice areas, jurisdictions, and intake protocol. Emergency matters trigger immediate notifications to the on-call partner.',
      '"We\'ve had zero missed leads since going live. Every call is logged, every inquiry is followed up. For a firm our size, that\'s genuinely transformative. It\'s more consistent than any receptionist we\'ve ever hired."',
    ],
  },
];

const blogPosts = [
  {
    tag: 'Industry Insight',
    title: 'Why service businesses lose 30% of their leads to unanswered calls',
    excerpt: 'The data is uncomfortable: most small service businesses miss nearly a third of their inbound calls. Here\'s where the loss happens — and what to do about it.',
    date: 'May 2025',
    readTime: '6 min read',
  },
  {
    tag: 'How It Works',
    title: 'What makes AI voice technology sound human — and why it matters for your clients',
    excerpt: 'Not all AI voice systems are equal. We break down the technology behind natural-sounding AI and why caller experience is the metric that actually matters.',
    date: 'April 2025',
    readTime: '5 min read',
  },
  {
    tag: 'Compliance',
    title: 'AI receptionists and HIPAA: what healthcare providers need to know',
    excerpt: 'If you run a medical clinic or physiotherapy practice, data privacy obligations apply to every phone call. Here\'s what compliance looks like in practice.',
    date: 'March 2025',
    readTime: '7 min read',
  },
  {
    tag: 'Guide',
    title: 'The after-hours call problem: how trades businesses handle urgent calls without burning out',
    excerpt: 'Plumbers, HVAC techs, and electricians face a unique challenge: clients call outside business hours expecting an urgent response. AI receptionists change the equation.',
    date: 'February 2025',
    readTime: '5 min read',
  },
];

export default function Stories() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-h) + 64px)', background: 'var(--white)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{ padding: '0 48px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>Stories</span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '16px', maxWidth: '700px' }}>
          Real businesses. Real results.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, maxWidth: '560px' }}>
          Case studies, customer stories, and insights from service businesses using Easy Reception AI to grow — without missing another call.
        </p>
      </div>

      {/* ── FEATURED STORY ── */}
      <div style={{ background: 'var(--off-white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent-hex)', display: 'block', marginBottom: '16px' }}>Featured Story</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '.72rem', fontWeight: 500, color: 'var(--text2)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '100px', padding: '4px 12px' }}>🔧 Home Services</span>
                <span style={{ fontSize: '.72rem', fontWeight: 600, color: 'var(--accent-hex)', background: 'rgba(26,138,111,0.08)', border: '1px solid rgba(26,138,111,0.15)', borderRadius: '100px', padding: '4px 12px' }}>+40% bookings in 30 days</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '16px', color: 'var(--text)' }}>
                How DK Plumbing & Heating stopped losing jobs to missed calls
              </h2>
              <p style={{ fontSize: '.95rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, marginBottom: '28px' }}>
                Before Easy Reception AI, Dan's crew was on the road while calls went unanswered. Within one week of going live, he'd captured three jobs that would have walked straight to a competitor.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4eee8, #d4e8f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '.95rem', color: 'var(--text2)', flexShrink: 0 }}>D</div>
                <div>
                  <div style={{ fontSize: '.9rem', fontWeight: 600 }}>Dan Kowalski</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>Owner · DK Plumbing & Heating</div>
                </div>
                <span style={{ fontSize: '.75rem', color: 'var(--muted)', marginLeft: '8px' }}>4 min read</span>
              </div>
            </div>

            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px' }}>
              <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '20px', fontStyle: 'italic' }}>From the interview with Dan Kowalski</div>
              {stories[0].body.slice(0, 3).map((para, i) => (
                <p key={i} style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: i === 1 ? 400 : 300, marginBottom: '16px', fontStyle: i === 1 ? 'italic' : 'normal' }}>
                  {para}
                </p>
              ))}
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <div style={{ background: 'rgba(94,203,168,0.08)', border: '1px solid rgba(94,203,168,0.2)', borderRadius: '10px', padding: '12px 16px', flex: 1, textAlign: 'center' }}>
                  <div className="grad-text" style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-.02em' }}>+40%</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '2px' }}>More bookings</div>
                </div>
                <div style={{ background: 'rgba(94,203,168,0.08)', border: '1px solid rgba(94,203,168,0.2)', borderRadius: '10px', padding: '12px 16px', flex: 1, textAlign: 'center' }}>
                  <div className="grad-text" style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-.02em' }}>3</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '2px' }}>Jobs week 1</div>
                </div>
                <div style={{ background: 'rgba(94,203,168,0.08)', border: '1px solid rgba(94,203,168,0.2)', borderRadius: '10px', padding: '12px 16px', flex: 1, textAlign: 'center' }}>
                  <div className="grad-text" style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-.02em' }}>48h</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '2px' }}>To go live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CUSTOMER STORIES GRID ── */}
      <div style={{ padding: '80px 48px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>Customer Stories</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '48px', color: 'var(--text)' }}>From the people using it every day</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="stories-grid">
            {stories.map(s => (
              <div key={s.id} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '0', transition: 'border-color .2s, box-shadow .2s, transform .2s' }} className="feat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--text2)' }}>{s.industry}</span>
                  <span style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--accent-hex)', background: 'rgba(26,138,111,0.08)', border: '1px solid rgba(26,138,111,0.15)', borderRadius: '100px', padding: '3px 10px' }}>{s.result}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.35, marginBottom: '12px', color: 'var(--text)' }}>{s.headline}</h3>
                <p style={{ fontSize: '.875rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, flex: 1, marginBottom: '24px' }}>{s.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4eee8, #d4e8f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '.85rem', color: 'var(--text2)', flexShrink: 0 }}>{s.init}</div>
                    <div>
                      <div style={{ fontSize: '.82rem', fontWeight: 600 }}>{s.name}</div>
                      <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '1px' }}>{s.readTime}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '.78rem', color: 'var(--accent-hex)', fontWeight: 500, cursor: 'pointer' }}>Read →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOG POSTS ── */}
      <div style={{ padding: '80px 48px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>From the Blog</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '48px', color: 'var(--text)' }}>Insights for service businesses</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="clarity-grid">
            {blogPosts.map((post, i) => (
              <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 28px', display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer', transition: 'border-color .2s, box-shadow .2s, transform .2s' }} className="feat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-hex)', background: 'rgba(26,138,111,0.08)', border: '1px solid rgba(26,138,111,0.15)', borderRadius: '100px', padding: '3px 10px' }}>{post.tag}</span>
                  <span style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{post.date} · {post.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.35, color: 'var(--text)' }}>{post.title}</h3>
                <p style={{ fontSize: '.875rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{post.excerpt}</p>
                <span style={{ fontSize: '.82rem', color: 'var(--accent-hex)', fontWeight: 500, marginTop: '4px' }}>Read article →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: 'linear-gradient(135deg, #0d5c48, #1a4a7a)', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em' }}>Ready to write your own story?</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', fontWeight: 300, lineHeight: 1.75 }}>
            Book a free consultation and have your AI receptionist live in 48 hours.
          </p>
          <Link href="/#cta" className="btn-primary" style={{ fontSize: '.9rem', padding: '14px 32px' }} data-testid="stories-cta">Book a Free Consultation →</Link>
        </div>
      </div>
    </div>
  );
}
