import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{
      padding: '60px 48px 36px', borderTop: '1px solid var(--border-light)',
      background: 'var(--white)'
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
        gap: '48px', maxWidth: '1200px', margin: '0 auto'
      }} className="max-md:grid-cols-2 max-md:gap-8">
        <div>
          <Link href="/" style={{
            fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.01em',
            color: 'var(--text)', textDecoration: 'none', display: 'flex',
            alignItems: 'center', gap: '9px'
          }}>
            <div style={{
              width: '30px', height: '30px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #5ecba8, #6fa8e0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '.65rem', fontWeight: 700, color: '#fff', letterSpacing: '.04em'
            }}>ER</div>
            Easy Reception AI
          </Link>
          <p style={{
            fontSize: '.83rem', color: 'var(--muted)', lineHeight: 1.65,
            marginTop: '14px', maxWidth: '280px', fontWeight: 300
          }}>Never miss another client. 24/7 AI phone answering for service businesses — set up 1-on-1, fully managed.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h5 style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Use Cases</h5>
          <a href="#" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Home Services</a>
          <a href="#" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Healthcare & Physio</a>
          <a href="#" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Legal</a>
          <a href="#" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Real Estate</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h5 style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Company</h5>
          <a href="/#stories" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Client Stories</a>
          <a href="/#faq" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>FAQ</a>
          <a href="https://calendly.com/getoncallai/30min" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Book a Consultation</a>
          <Link href="/privacy" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 300 }}>Terms & Conditions</Link>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px', margin: '48px auto 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px', paddingTop: '24px', borderTop: '1px solid var(--border-light)'
      }}>
        <span style={{ fontSize: '.75rem', color: 'var(--muted)' }}>© {new Date().getFullYear()} Easy Reception AI. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/privacy" style={{ fontSize: '.75rem', color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: '.75rem', color: 'var(--muted)', textDecoration: 'none' }}>Terms & Conditions</Link>
          <a href="https://www.linkedin.com/in/deepakash10" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.75rem', color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
