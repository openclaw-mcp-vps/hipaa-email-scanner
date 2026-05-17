export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          HIPAA Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Emails for Accidental{" "}
          <span className="text-[#58a6ff]">HIPAA Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time PHI detection blocks sensitive patient data before it leaves your inbox.
          Stay compliant, avoid fines, and protect your patients automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">ML + Regex Detection</h3>
            <p className="text-sm text-[#8b949e]">Catches SSNs, MRNs, diagnoses, and 18 HIPAA identifiers in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚫</div>
            <h3 className="font-semibold text-white mb-1">Auto-Block & Suggest</h3>
            <p className="text-sm text-[#8b949e]">Stops violating emails and offers secure alternatives before sending.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Compliance Reports</h3>
            <p className="text-sm text-[#8b949e]">Audit-ready dashboards and PDF exports for your compliance officer.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited email scanning",
              "IMAP/SMTP integration",
              "18 PHI identifier patterns",
              "Real-time block & suggest",
              "Monthly compliance PDF",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which email providers are supported?</h3>
            <p className="text-sm text-[#8b949e]">Any provider that supports IMAP/SMTP — including Gmail, Outlook, and custom mail servers. Setup takes under 5 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does this make us fully HIPAA compliant?</h3>
            <p className="text-sm text-[#8b949e]">HIPAA Email Scanner is a technical safeguard that significantly reduces PHI exposure risk. We sign a BAA with every customer. Full compliance requires additional administrative and physical safeguards.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my email data stored or read by your team?</h3>
            <p className="text-sm text-[#8b949e]">No. Scanning happens in-memory and no email content is persisted. Only violation metadata (timestamp, rule triggered) is logged for your compliance dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} HIPAA Email Scanner. Not a substitute for legal advice.
      </footer>
    </main>
  );
}
