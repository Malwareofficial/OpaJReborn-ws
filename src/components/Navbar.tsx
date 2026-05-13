import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'ClickGUI', href: '#clickgui' },
  { label: 'Modules', href: '#modules' },
  { label: 'Install', href: '#install' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-icon">⬡</span>
          <span className="navbar__logo-text">OpaJ<span className="navbar__logo-accent">Reborn</span></span>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/opaJReborn/opaJReborn"
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary btn--sm"
        >
          Download
        </a>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/opaJReborn/opaJReborn"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
            style={{ marginTop: 16 }}
          >
            Download
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 16px 0;
          transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
          border-bottom: 1px solid transparent;
        }
        .navbar--scrolled {
          background: rgba(10, 10, 12, 0.85);
          backdrop-filter: blur(16px);
          border-color: rgba(0, 194, 255, 0.1);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }
        .navbar__logo-icon {
          font-size: 22px;
          color: var(--primary-600);
          line-height: 1;
        }
        .navbar__logo-text { color: var(--text-primary); }
        .navbar__logo-accent { color: var(--primary-600); }
        .navbar__links {
          display: flex;
          list-style: none;
          gap: 32px;
          flex: 1;
          justify-content: center;
        }
        .navbar__link {
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          padding-bottom: 4px;
        }
        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-600);
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .navbar__link:hover {
          color: var(--primary-400);
        }
        .navbar__link:hover::after {
          width: 100%;
        }
        .navbar__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
        }
        .navbar__burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .navbar__burger:hover span {
          background: var(--primary-500);
        }
        .navbar__mobile {
          display: flex;
          flex-direction: column;
          padding: 16px 24px 24px;
          border-top: 1px solid var(--bg-500);
          background: rgba(10, 10, 12, 0.95);
        }
        .navbar__mobile-link {
          padding: 12px 0;
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 500;
          border-bottom: 1px solid var(--bg-500);
        }
        .navbar__mobile-link:hover { color: var(--text-primary); }
        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__inner > .btn { display: none; }
          .navbar__burger { display: flex; }
        }
        /* ── Buttons ── */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 14px;
          font-family: var(--font-sans);
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .btn--sm { padding: 8px 16px; font-size: 13px; }
        .btn--lg { padding: 16px 32px; font-size: 16px; }
        .btn--primary {
          background: var(--primary-600);
          color: #0a0a0c;
        }
        .btn--primary:hover {
          background: var(--primary-400);
          box-shadow: 0 0 24px rgba(0, 194, 255, 0.5);
          transform: translateY(-2px);
        }
        .btn--primary:active {
          transform: translateY(0);
        }
        .btn--ghost {
          background: var(--bg-500);
          color: var(--text-secondary);
          border: 1px solid var(--neutral-700);
        }
        .btn--ghost:hover {
          background: var(--bg-400);
          color: var(--text-primary);
          transform: translateY(-1px);
        }
        .btn--outline {
          background: transparent;
          color: var(--primary-600);
          border: 1px solid var(--primary-600);
        }
        .btn--outline:hover {
          background: rgba(0, 194, 255, 0.08);
          box-shadow: var(--glow-primary);
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
}
