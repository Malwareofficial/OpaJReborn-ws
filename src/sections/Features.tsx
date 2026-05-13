const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
      </svg>
    ),
    title: 'OpaJ-Style ClickGUI',
    desc: 'Smooth, animated ClickGUI with OpaJ style. Drag modules, tweak settings, and customize keybinds with zero latency.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="22" y1="12" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="2" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="2"/>
        <line x1="12" y1="22" x2="12" y2="18"/>
      </svg>
    ),
    title: 'Combat Domination',
    desc: 'KillAura, Velocity, CrystalAura, BedAura, Surround — everything you need to dominate any gamemode.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Visual Enhancements',
    desc: 'ESP, FullBright, Tracers, Chams, BlockESP, and custom HUD elements for maximum awareness.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Movement Modules',
    desc: 'Speed, Flight, Jesus, NoFall, Scaffold — move with precision and bypass most anticheat patches.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'HUD Customizer',
    desc: 'Drag-and-drop HUD builder. Position watermarks, armor status, speed info — every pixel yours to control.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Config Profiles',
    desc: 'Save and load multiple config presets. Switch between PvP, HCF, and anarchy setups in one click.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why OpaJReborn</span>
          <h2 className="section-title">Built to Win</h2>
          <p className="section-sub">
            Every module, every toggle — crafted for performance on 1.21.11 Fabric.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="feature-card">
              <div className="feature-card__icon">{feat.icon}</div>
              <h3 className="feature-card__title">{feat.title}</h3>
              <p className="feature-card__desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          animation: fadeInUp 0.8s ease-out both;
        }
        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-600);
        }
        .section-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
        }
        .section-sub {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 480px;
          text-align: center;
          line-height: 1.6;
        }
        .features__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .feature-card {
          background: var(--bg-700);
          border: 1px solid var(--neutral-700);
          border-radius: var(--radius-xl);
          padding: 32px;
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          animation: fadeInScale 0.6s ease-out both;
        }
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }
        .feature-card:hover {
          border-color: rgba(0, 194, 255, 0.35);
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), var(--glow-primary-strong);
        }
        .feature-card__icon {
          width: 48px;
          height: 48px;
          background: rgba(0, 194, 255, 0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-500);
          margin-bottom: 20px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .feature-card:hover .feature-card__icon {
          transform: translateY(-4px) scale(1.1);
        }
        .feature-card__title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        .feature-card__desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .features__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .features__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
