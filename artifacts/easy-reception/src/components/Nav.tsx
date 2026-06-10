import { Link } from "wouter";

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: 'var(--nav-h)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 48px',
      background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(24px) saturate(180%)',
      borderBottom: '1px solid var(--border-light)', transition: 'background .3s'
    }}>
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

      <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }} className="max-md:hidden">
        <li><a href="/#demo" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 400 }}>See How It Works</a></li>
        <li><a href="/#pricing" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 400 }}>Pricing</a></li>
        <li><a href="/#faq" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 400 }}>FAQs</a></li>
        <li><a href="/#stories" style={{ fontSize: '.83rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 400 }}>Stories</a></li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href="https://calendly.com/getoncallai/30min" target="_blank" rel="noopener noreferrer" style={{
          fontSize: '.82rem', fontWeight: 500, padding: '10px 22px', borderRadius: '9px',
          background: 'linear-gradient(135deg, #3ba882, #4a9fd8)',
          color: '#fff', textDecoration: 'none', transition: 'opacity .2s, transform .2s',
          boxShadow: '0 3px 14px rgba(59,168,130,0.3)'
        }} data-testid="nav-cta">Book a Free Consultation</a>
      </div>
    </nav>
  );
}
