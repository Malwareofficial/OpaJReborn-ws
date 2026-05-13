const STEPS = [
  {
    num: '01',
    title: 'Install Fabric',
    desc: 'Download and run the Fabric installer for Minecraft 1.21.11. Select your profile in the Minecraft launcher.',
    link: { label: 'Fabric Installer', href: 'https://fabricmc.net/use/installer/' },
  },
  {
    num: '02',
    title: 'Download OpaJReborn',
    desc: 'Grab the latest .jar release from our GitHub releases page. Always use the latest stable build.',
    link: { label: 'GitHub Releases', href: 'https://github.com/opaJReborn/opaJReborn/releases' },
  },
  {
    num: '03',
    title: 'Drop in Mods Folder',
    desc: 'Place OpaJReborn.jar into your .minecraft/mods folder. Make sure you have FabricAPI installed too.',
    link: null,
  },
  {
    num: '04',
    title: 'Launch & Press RSHIFT',
    desc: 'Start Minecraft with the Fabric 1.21.11 profile. In-game, press RSHIFT to open the ClickGUI.',
    link: null,
  },
];

export default function Install() {
  return (
    <section id="install" className="section install-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Install in 4 Steps</h2>
          <p className="section-sub">
            Up and running in under 2 minutes. No accounts, no launchers — just drop and play.
          </p>
        </div>

        <div className="install__grid">
          {STEPS.map((step, i) => (
            <div key={step.num} className="install-step">
              <div className="install-step__num">{step.num}</div>
              {i < STEPS.length - 1 && <div className="install-step__connector" aria-hidden="true" />}
              <div className="install-step__content">
                <h3 className="install-step__title">{step.title}</h3>
                <p className="install-step__desc">{step.desc}</p>
                {step.link && (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="install-step__link"
                  >
                    {step.link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="install__cta">
          <a
            href="https://github.com/opaJReborn/opaJReborn/releases"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Latest Release
          </a>
          <a
            href="https://github.com/opaJReborn/opaJReborn"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost btn--lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View on GitHub
          </a>
        </div>
      </div>

      <style>{`
        .install-section { background: var(--bg-800); }
        .install__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
          margin-bottom: 64px;
        }
        .install-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 16px;
          position: relative;
        }
        .install-step__connector {
          position: absolute;
          top: 32px;
          left: calc(50% + 32px);
          right: calc(-50% + 32px);
          height: 2px;
          background: linear-gradient(90deg, var(--primary-600), var(--neutral-700));
          opacity: 0.4;
        }
        .install-step__num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-700);
          border: 2px solid var(--primary-600);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--primary-500);
          margin-bottom: 24px;
          box-shadow: var(--glow-primary);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .install-step__content { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .install-step__title {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .install-step__desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .install-step__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--primary-500);
          font-size: 13px;
          font-weight: 600;
          transition: color 0.2s;
        }
        .install-step__link:hover { color: var(--primary-300); }
        .install__cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .install__grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .install-step__connector { display: none; }
        }
        @media (max-width: 480px) {
          .install__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
