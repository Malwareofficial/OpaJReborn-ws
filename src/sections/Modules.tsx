const CATEGORIES = [
  {
    name: 'Combat',
    color: '#ff4040',
    modules: ['KillAura', 'CrystalAura', 'BedAura', 'Velocity', 'AutoPot', 'Criticals', 'TriggerBot', 'Reach', 'AntiBot', 'BowSpam'],
  },
  {
    name: 'Visual',
    color: '#00c2ff',
    modules: ['ESP', 'Tracers', 'Chams', 'FullBright', 'Nametags', 'Xray', 'BlockESP', 'StorageESP', 'HandView', 'NoHurtCam'],
  },
  {
    name: 'Movement',
    color: '#22c55e',
    modules: ['Speed', 'Flight', 'Jesus', 'NoFall', 'Scaffold', 'Blink', 'ElytraFly', 'Parkour', 'Phase', 'Sprint'],
  },
  {
    name: 'Player',
    color: '#f59e0b',
    modules: ['AutoArmor', 'InvManager', 'NoHunger', 'ChestStealer', 'Replenish', 'PearlTweaks', 'EatSpoof', 'NoSlowdown'],
  },
  {
    name: 'Utility',
    color: '#a78bfa',
    modules: ['AutoRespawn', 'Timer', 'Freecam', 'AutoLog', 'ChatSpammer', 'MiddleClick', 'FastPlace', 'PacketFly'],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="section modules-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Module List</span>
          <h2 className="section-title">50+ Modules</h2>
          <p className="section-sub">
            Constantly updated. Combat, visual, movement, and utility — all in one client.
          </p>
        </div>

        <div className="modules__grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="module-cat-card" style={{'--cat-color': cat.color} as React.CSSProperties}>
              <div className="module-cat-card__header">
                <span className="module-cat-card__dot" />
                <span className="module-cat-card__name">{cat.name}</span>
                <span className="module-cat-card__count">{cat.modules.length}</span>
              </div>
              <ul className="module-cat-card__list">
                {cat.modules.map((mod) => (
                  <li key={mod} className="module-cat-card__item">
                    <span className="module-cat-card__item-dot" />
                    {mod}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .modules__grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .module-cat-card {
          background: var(--bg-700);
          border: 1px solid var(--neutral-700);
          border-radius: var(--radius-xl);
          padding: 24px;
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          animation: fadeInScale 0.6s ease-out both;
        }
        .module-cat-card:nth-child(1) { animation-delay: 0.1s; }
        .module-cat-card:nth-child(2) { animation-delay: 0.2s; }
        .module-cat-card:nth-child(3) { animation-delay: 0.3s; }
        .module-cat-card:nth-child(4) { animation-delay: 0.4s; }
        .module-cat-card:nth-child(5) { animation-delay: 0.5s; }
        .module-cat-card:hover {
          border-color: var(--cat-color);
          transform: translateY(-8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0,0,0,0.2);
        }
        .module-cat-card__header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--neutral-700);
        }
        .module-cat-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cat-color);
          box-shadow: 0 0 8px var(--cat-color);
          flex-shrink: 0;
        }
        .module-cat-card__name {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          flex: 1;
        }
        .module-cat-card__count {
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--cat-color);
          background: rgba(0,0,0,0.3);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }
        .module-cat-card__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .module-cat-card__item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .module-cat-card:hover .module-cat-card__item {
          color: var(--text-primary);
          transform: translateX(4px);
        }
        .module-cat-card__item-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--neutral-600);
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .module-cat-card:hover .module-cat-card__item-dot { background: var(--cat-color); }
        @media (max-width: 1200px) {
          .modules__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .modules__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .modules__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
