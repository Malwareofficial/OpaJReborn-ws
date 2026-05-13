export default function Announcement() {
  return (
    <div className="announcement">
      <div className="container announcement__inner">
        <span className="announcement__badge">NEW</span>
        <span className="announcement__text">
          OpaJReborn v1.0 is out — Fabric 1.21.11 support, overhauled ClickGUI, 12 new modules.
        </span>
        <a
          href="https://github.com/opaJReborn/opaJReborn/releases"
          target="_blank"
          rel="noreferrer"
          className="announcement__link"
        >
          Read changelog →
        </a>
      </div>

      <style>{`
        .announcement {
          background: rgba(0, 194, 255, 0.07);
          border-bottom: 1px solid rgba(0, 194, 255, 0.18);
          padding: 10px 0;
        }
        .announcement__inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          text-align: center;
        }
        .announcement__badge {
          background: var(--primary-600);
          color: #0a0a0c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
        }
        .announcement__text {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .announcement__link {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-500);
          transition: color 0.2s;
        }
        .announcement__link:hover { color: var(--primary-300); }
      `}</style>
    </div>
  );
}
