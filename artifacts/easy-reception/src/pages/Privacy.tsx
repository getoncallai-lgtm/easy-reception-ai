export default function Privacy() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: '100px', background: 'var(--white)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 48px' }}>
        <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>Legal</span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '56px' }}>Last Updated: September 18, 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {[
            {
              heading: 'Overview',
              body: 'Easy Reception AI ("Company," "we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, subscribe to our mailing list, or use our AI-powered receptionist services. This Policy complies with all applicable U.S. and California laws, including but not limited to: CCPA/CPRA, CalOPPA, California Shine the Light Law, COPPA, CAN-SPAM, and HIPAA (where applicable).'
            },
            {
              heading: '1. Information We Collect',
              body: 'We may collect identifiers (name, phone, email, firm name), professional and business information, communications data (call logs, transcripts, appointments), technical data (IP, browser, device), mailing/email data, and sensitive data where applicable.'
            },
            {
              heading: '2. Cookies and Tracking Technologies',
              body: 'We use cookies and similar technologies to improve our website and services. These may include essential cookies, analytics cookies, preference cookies, and marketing/advertising cookies. You can disable cookies in your browser, but this may affect site functionality. We do not use cookies to sell personal information.'
            },
            {
              heading: '3. How We Use Your Information',
              body: 'We use your information to deliver and improve our services, book appointments, handle intake, train and refine AI (confidential, never shared), send updates, and comply with law.'
            },
            {
              heading: '4. How We Share Information',
              body: 'We may share information with vetted service providers, legal authorities, and in business transfers. We do not sell or rent personal information to third parties.'
            },
            {
              heading: '5. AI Training & Data Confidentiality',
              body: 'Some client data may be used to train and improve our AI receptionist models. Training data is processed internally, never shared, anonymized when possible, and secured with encryption and access controls.'
            },
            {
              heading: '6. Data Security',
              body: 'We use encryption, access controls, monitoring, and audits. While no method is 100% secure, we maintain the highest commercially reasonable standards.'
            },
            {
              heading: '7. Your Privacy Rights (California Residents)',
              body: 'Under the CCPA/CPRA, you have the right to know, access, delete, opt-out of sale/sharing, correct, and limit use of sensitive personal information. Contact: getoncallai@gmail.com'
            },
            {
              heading: '8. Mailing & Email Communications',
              body: 'We may send updates or marketing emails. You may opt out at any time. We comply with the CAN-SPAM Act.'
            },
            {
              heading: '9. Children\'s Privacy',
              body: 'We do not knowingly collect information from children under 13. If discovered, data will be deleted immediately.'
            },
            {
              heading: '10. Data Retention',
              body: 'We retain personal data only as long as necessary to provide services, comply with law, and enforce agreements.'
            },
            {
              heading: '11. International Users',
              body: 'Our services are operated in the United States. If you access from outside the U.S., you consent to transfer and processing in the U.S.'
            },
            {
              heading: '12. Changes to This Policy',
              body: "We may update this Privacy Policy. Changes will be posted with the 'Last Updated' date. Continued use constitutes acceptance."
            },
            {
              heading: '13. Contact Us',
              body: 'For questions or concerns, contact us at: getoncallai@gmail.com'
            },
          ].map(section => (
            <div key={section.heading} style={{ paddingBottom: '36px', borderBottom: '1px solid var(--border-light)' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: '12px' }}>{section.heading}</h2>
              <p style={{ fontSize: '.92rem', color: 'var(--text2)', lineHeight: 1.78, fontWeight: 300 }}>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
