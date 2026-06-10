export default function Terms() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: '100px', background: 'var(--white)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 48px' }}>
        <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '16px' }}>Legal</span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '8px' }}>Terms & Conditions</h1>
        <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '56px' }}>Last Updated: September 18, 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {[
            {
              heading: '1. Service Scope',
              body: 'Easy Reception AI provides AI-powered receptionist services including: call answering, appointment booking, reminders, intake data collection, and call summaries. Services are provided via integrations with third-party platforms (e.g., Twilio, ElevenLabs, CRMs). We may update or improve features from time to time without prior notice.'
            },
            {
              heading: '2. Account & Usage',
              body: 'You must provide accurate information when creating an account or onboarding. You are responsible for ensuring your business scripts, compliance requirements, and data shared with us are lawful and accurate. Services are intended for professional business use. Personal or unlawful use is prohibited.'
            },
            {
              heading: '3. Payments & Fees',
              body: 'Pricing is outlined in your plan agreement or subscription details. Fees are billed on a recurring basis unless otherwise stated. Setup/deployment fees apply unless waived under a promotional offer. Failure to pay may result in suspension or termination of Services.'
            },
            {
              heading: '4. Monthly Retainer',
              body: "Easy Reception AI operates on a monthly retainer basis. The retainer fee covers access to our Services for the month, including call handling, appointment booking, and integrations as outlined in your plan. The retainer is billed in advance each month. Retainer payments are non-refundable, including in cases of unused minutes, lower call volume, or early cancellation. If you wish to cancel, you must provide notice at least 7 days before your next billing date. Cancellation will take effect at the end of the current billing cycle. Any additional usage beyond the retainer plan (if applicable) will be billed separately according to your agreement."
            },
            {
              heading: '5. Promotions & Offers',
              body: 'From time to time, Easy Reception AI may run promotional offers (e.g., waived setup fee, early adopter discounts). Promotional offers are valid only during the stated period and cannot be retroactively applied. All promotional savings (e.g., $700 setup waiver) are subject to eligibility and confirmation by Easy Reception AI.'
            },
            {
              heading: '6. Compliance & Data Use',
              body: 'You are responsible for ensuring that the scripts and call flows you provide comply with industry-specific regulations (including but not limited to legal, healthcare, or financial compliance). Easy Reception AI does not provide legal, medical, or financial advice. Our Service simply executes your provided instructions. By using the Service, you grant Easy Reception AI permission to process and store call data, including recordings and transcripts, for service delivery and quality improvement.'
            },
            {
              heading: '7. Confidentiality & Security',
              body: 'We take reasonable steps to safeguard call data and personal information. We do not sell customer data to third parties. You must notify us immediately if you suspect unauthorized use of your account.'
            },
            {
              heading: '8. Limitations of Liability',
              body: 'Easy Reception AI is not responsible for: missed calls due to outages with third-party providers; incorrect or incomplete client information provided by callers; business outcomes or client decisions resulting from calls. Our liability, in any case, is limited to the amount you paid for the Services in the 3 months preceding the claim.'
            },
            {
              heading: '9. Termination',
              body: 'You may cancel your subscription at any time. We reserve the right to suspend or terminate Services if you breach these Terms or engage in unlawful use.'
            },
            {
              heading: '10. Governing Law',
              body: 'These Terms are governed by the laws of the applicable jurisdiction. Any disputes will be subject to the exclusive jurisdiction of the courts in the relevant location.'
            },
            {
              heading: '11. Contact Us',
              body: 'For any questions about these Terms & Conditions, contact us at: getoncallai@gmail.com'
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
