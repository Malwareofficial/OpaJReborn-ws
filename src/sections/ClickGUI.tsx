import { useState } from 'react';

const MODULES = {
  Combat: [
    { name: 'KillAura', enabled: true, key: 'R' },
    { name: 'CrystalAura', enabled: false, key: 'G' },
    { name: 'BedAura', enabled: true, key: null },
    { name: 'Velocity', enabled: true, key: null },
    { name: 'AutoPot', enabled: false, key: null },
    { name: 'Criticals', enabled: true, key: null },
    { name: 'TriggerBot', enabled: false, key: null },
  ],
  Visual: [
    { name: 'ESP', enabled: true, key: null },
    { name: 'Tracers', enabled: false, key: null },
    { name: 'Chams', enabled: true, key: null },
    { name: 'FullBright', enabled: true, key: 'F' },
    { name: 'Nametags', enabled: true, key: null },
    { name: 'Xray', enabled: false, key: 'X' },
  ],
  Movement: [
    { name: 'Speed', enabled: false, key: null },
    { name: 'Flight', enabled: false, key: 'V' },
    { name: 'Jesus', enabled: false, key: null },
    { name: 'NoFall', enabled: true, key: null },
    { name: 'Scaffold', enabled: false, key: null },
    { name: 'Blink', enabled: false, key: 'B' },
  ],
  Player: [
    { name: 'AutoArmor', enabled: true, key: null },
    { name: 'InvManager', enabled: false, key: null },
    { name: 'NoHunger', enabled: true, key: null },
    { name: 'ChestStealer', enabled: false, key: null },
  ],
  Utility: [
    { name: 'AutoRespawn', enabled: true, key: null },
    { name: 'Timer', enabled: false, key: null },
    { name: 'Freecam', enabled: false, key: 'C' },
    { name: 'AutoLog', enabled: false, key: null },
  ],
};

type Category = keyof typeof MODULES;

export default function ClickGUI() {
  const [activeCategory, setActiveCategory] = useState<Category>('Combat');
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() => {
    const state: Record<string, boolean> = {};
    Object.entries(MODULES).forEach(([, mods]) => {
      mods.forEach((m) => { state[m.name] = m.enabled; });
    });
    return state;
  });

  return (
    <section id="clickgui" className="section clickgui-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">ClickGUI Preview</span>
          <h2 className="section-title">OpaJ-Style Interface</h2>
          <p className="section-sub">
            A sleek, animated GUI that stays out of your way. Click modules, adjust values — all in-game.
          </p>
        </div>

        <div className="gui-demo">
          {/* Window chrome */}
          <div className="gui-demo__chrome">
            <span className="gui-demo__dot gui-demo__dot--red" />
            <span className="gui-demo__dot gui-demo__dot--yellow" />
            <span className="gui-demo__dot gui-demo__dot--green" />
            <span className="gui-demo__title">OpaJReborn · ClickGUI</span>
          </div>

          <div className="gui-demo__body">
            {/* Sidebar categories */}
            <div className="gui-demo__sidebar">
              {(Object.keys(MODULES) as Category[]).map((cat) => (
                <button
                  key={cat}
                  className={`gui-cat ${activeCategory === cat ? 'gui-cat--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="gui-cat__dot" />
                  {cat}
                </button>
              ))}
            </div>

            {/* Module list */}
            <div className="gui-demo__modules">
              <div className="gui-demo__modules-header">
                {activeCategory}
                <span className="gui-demo__modules-count">
                  {MODULES[activeCategory].filter((m) => enabled[m.name]).length}/{MODULES[activeCategory].length} active
                </span>
              </div>
              <div className="gui-demo__module-list">
                {MODULES[activeCategory].map((mod) => (
                  <div
                    key={mod.name}
                    className={`gui-module ${enabled[mod.name] ? 'gui-module--on' : ''}`}
                    onClick={() => setEnabled((p) => ({ ...p, [mod.name]: !p[mod.name] }))}
                  >
                    <div className="gui-module__left">
                      <div className={`gui-module__toggle ${enabled[mod.name] ? 'gui-module__toggle--on' : ''}`}>
                        <div className="gui-module__toggle-thumb" />
                      </div>
                      <span className="gui-module__name">{mod.name}</span>
                    </div>
                    {mod.key && (
                      <span className="gui-module__key">{mod.key}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* HUD preview */}
            <div className="gui-demo__hud">
              <div className="gui-hud__watermark">OpaJReborn <span>v1.0</span></div>
              <div className="gui-hud__module-list">
                {Object.values(MODULES).flat()
                  .filter((m) => enabled[m.name])
                  .slice(0, 8)
                  .map((m) => (
                    <div key={m.name} className="gui-hud__module">{m.name}</div>
                  ))}
              </div>
              <div className="gui-hud__coords">
                <span className="gui-hud__label">XYZ</span>
                <span>128 / 64 / -255</span>
              </div>
              <div className="gui-hud__fps">
                <span className="gui-hud__label">FPS</span>
                <span className="gui-hud__fps-val">245</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .clickgui-section { background: var(--bg-800); }

        .gui-demo {
          border-radius: var(--radius-2xl);
          border: 1px solid var(--neutral-700);
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), var(--glow-primary);
          max-width: 900px;
          margin: 0 auto;
          animation: fadeInScale 0.8s ease-out both;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .gui-demo:hover {
          border-color: rgba(0, 194, 255, 0.4);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), var(--glow-primary-strong);
        }
        .gui-demo__chrome {
          background: var(--bg-600);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--neutral-700);
        }
        .gui-demo__dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .gui-demo__dot--red { background: #ff5f57; }
        .gui-demo__dot--yellow { background: #febc2e; }
        .gui-demo__dot--green { background: #28c840; }
        .gui-demo__title {
          margin-left: 8px;
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .gui-demo__body {
          display: grid;
          grid-template-columns: 160px 1fr 160px;
          min-height: 420px;
        }
        .gui-demo__sidebar {
          background: var(--bg-700);
          border-right: 1px solid var(--neutral-700);
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .gui-cat {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          border: none;
          background: none;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-sans);
          text-align: left;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .gui-cat:hover { background: var(--bg-500); color: var(--text-primary); transform: translateX(4px); }
        .gui-cat--active { background: rgba(0, 194, 255, 0.12); color: var(--primary-400); }
        .gui-cat__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
        }
        .gui-demo__modules {
          padding: 16px;
          overflow-y: auto;
          background: var(--bg-800);
        }
        .gui-demo__modules-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--neutral-700);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .gui-demo__modules-count {
          font-size: 11px;
          font-weight: 500;
          color: var(--primary-500);
          font-family: var(--font-mono);
        }
        .gui-demo__module-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .gui-module {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid transparent;
          user-select: none;
        }
        .gui-module:hover { background: var(--bg-600); transform: translateX(4px); }
        .gui-module--on {
          background: rgba(0, 194, 255, 0.06);
          border-color: rgba(0, 194, 255, 0.15);
        }
        .gui-module__left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gui-module__toggle {
          width: 30px;
          height: 16px;
          background: var(--neutral-700);
          border-radius: 8px;
          position: relative;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .gui-module__toggle--on { background: var(--primary-600); }
        .gui-module__toggle-thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          transition: left 0.2s;
        }
        .gui-module__toggle--on .gui-module__toggle-thumb { left: 16px; }
        .gui-module__name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .gui-module--on .gui-module__name { color: var(--primary-400); }
        .gui-module__key {
          font-size: 10px;
          font-family: var(--font-mono);
          font-weight: 600;
          background: var(--bg-500);
          border: 1px solid var(--neutral-600);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
          color: var(--text-muted);
        }
        .gui-demo__hud {
          background: var(--bg-700);
          border-left: 1px solid var(--neutral-700);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 12px;
          font-family: var(--font-mono);
        }
        .gui-hud__watermark {
          font-size: 14px;
          font-weight: 700;
          color: var(--primary-500);
        }
        .gui-hud__watermark span { color: var(--text-muted); font-weight: 400; }
        .gui-hud__module-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .gui-hud__module {
          font-size: 11px;
          color: var(--primary-400);
          padding: 1px 0;
        }
        .gui-hud__coords, .gui-hud__fps {
          display: flex;
          gap: 6px;
          color: var(--text-secondary);
          align-items: center;
        }
        .gui-hud__label {
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .gui-hud__fps-val { color: var(--success-500); }
        @media (max-width: 768px) {
          .gui-demo__body { grid-template-columns: 1fr; }
          .gui-demo__sidebar { flex-direction: row; flex-wrap: wrap; border-right: none; border-bottom: 1px solid var(--neutral-700); }
          .gui-demo__hud { display: none; }
        }
      `}</style>
    </section>
  );
}
