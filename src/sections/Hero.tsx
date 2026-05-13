import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number; alpha: number}> = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 194, 255, ${p.alpha})`;
        ctx.fill();
      });
      // draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 194, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="hero section">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Fabric 1.21.11 · Free · Open Source
        </div>

        <h1 className="hero__title">
          The <span className="hero__title-gradient">Blatant</span><br />
          Fabric Client
        </h1>

        <p className="hero__sub">
          OpaJReborn brings Opal-style ClickGUI, top-tier combat modules, and smooth visuals
          to Minecraft 1.21.11 Fabric. No compromises.
        </p>

        <div className="hero__cta">
          <a
            href="https://github.com/opaJReborn/opaJReborn/releases"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Free
          </a>
          <a href="#clickgui" className="btn btn--ghost btn--lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            See ClickGUI
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">50+</span>
            <span className="hero__stat-label">Modules</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">1.21.11</span>
            <span className="hero__stat-label">Fabric</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">Free</span>
            <span className="hero__stat-label">Forever</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">Open</span>
            <span className="hero__stat-label">Source</span>
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero__canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 194, 255, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 32px;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 194, 255, 0.08);
          border: 1px solid rgba(0, 194, 255, 0.2);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary-400);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .hero__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--success-500);
          box-shadow: 0 0 8px var(--success-500);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero__title {
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }
        .hero__title-gradient {
          background: linear-gradient(135deg, var(--primary-600), var(--primary-300));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__sub {
          font-size: clamp(16px, 2vw, 20px);
          color: var(--text-secondary);
          max-width: 560px;
          line-height: 1.6;
        }
        .hero__cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero__stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .hero__stat-num {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary-500);
          letter-spacing: -0.03em;
        }
        .hero__stat-label {
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
        }
        .hero__stat-divider {
          width: 1px;
          height: 40px;
          background: var(--neutral-700);
        }
        .hero__scroll-hint {
          margin-top: 32px;
          display: flex;
          justify-content: center;
        }
        .hero__scroll-hint span {
          display: block;
          width: 20px;
          height: 32px;
          border: 2px solid var(--neutral-600);
          border-radius: 10px;
          position: relative;
        }
        .hero__scroll-hint span::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: var(--primary-600);
          border-radius: 2px;
          animation: scrollDot 2s infinite;
        }
        @keyframes scrollDot {
          0% { top: 5px; opacity: 1; }
          100% { top: 16px; opacity: 0; }
        }
        @media (max-width: 600px) {
          .hero__stat-divider { display: none; }
          .hero__stats { gap: 24px; }
        }
      `}</style>
    </section>
  );
}
