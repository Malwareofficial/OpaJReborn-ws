import { useState } from 'react';

const FAQS = [
  {
    q: 'Is OpaJReborn free?',
    a: 'Yes — OpaJReborn is completely free and open source. No premium tier, no paywalls, no BS.',
  },
  {
    q: 'Will I get banned using this?',
    a: 'OpaJReborn is a blatant client. It\'s not designed to bypass anticheat — it\'s designed to dominate. Use on servers that allow clients, private servers, or servers where you\'re just having fun. Getting banned is part of the game.',
  },
  {
    q: 'What Minecraft version does it support?',
    a: 'Currently targeting Fabric 1.21.11. We update the client with each major Fabric release.',
  },
  {
    q: 'Does it require FabricAPI?',
    a: 'Yes. Make sure FabricAPI is in your mods folder alongside OpaJReborn.jar. Both should be for version 1.21.11.',
  },
  {
    q: 'How do I open the ClickGUI?',
    a: 'Press RSHIFT in-game to toggle the ClickGUI. You can rebind this key inside the GUI settings.',
  },
  {
    q: 'Can I contribute or fork the project?',
    a: 'Absolutely. The project is on GitHub under an open license. PR\'s, forks, and issues are all welcome.',
  },
  {
    q: 'Why is it called "blatant"?',
    a: 'Blatant clients don\'t try to hide — they go hard. Big hitboxes, full fly, instant kill — no pretending to be legit. That\'s what OpaJReborn is.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Questions</span>
          <h2 className="section-title">FAQ</h2>
          <p className="section-sub">Everything you need to know.</p>
        </div>

        <div className="faq__list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'faq-item--open' : ''}`}>
              <button
                className="faq-item__trigger"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-item__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className="faq-item__body">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq__list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-item {
          background: var(--bg-700);
          border: 1px solid var(--neutral-700);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .faq-item--open { border-color: rgba(0, 194, 255, 0.3); }
        .faq-item__trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          text-align: left;
          transition: color 0.2s;
        }
        .faq-item__trigger:hover { color: var(--primary-400); }
        .faq-item--open .faq-item__trigger { color: var(--primary-400); }
        .faq-item__icon {
          flex-shrink: 0;
          color: var(--text-muted);
          transition: transform 0.3s;
        }
        .faq-item--open .faq-item__icon { transform: rotate(180deg); color: var(--primary-500); }
        .faq-item__body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .faq-item--open .faq-item__body { max-height: 300px; }
        .faq-item__body p {
          padding: 0 24px 20px;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
