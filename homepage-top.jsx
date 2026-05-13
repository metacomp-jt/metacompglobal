/* MetaComp Global — Homepage Top v3 — Hero + Stats + Solutions (PDF-aligned) */

/* ── Scroll observer for fade-in ── */
function useFadeIn() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Hero Section + Stats ── */
const HERO_STATS = [
  { value: "US$10B+", label: "Annual Transaction Volume" },
  { value: "1,000+", label: "Institutional & Accredited Clients" },
  { value: "30+", label: "Available Currencies" },
  { value: "13+", label: "Stablecoins Supported" },
];

function HeroSection({ onNavigate }) {
  return (
    <>
    <section style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
        backgroundImage: "url('assets/hero-bg.png')",
        backgroundSize: "cover", backgroundPosition: "center right",
        opacity: 0.9, pointerEvents: "none",
      }}></div>

      {/* Hero content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 48px 80px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 720 }}>
          <h1 style={{
            fontFamily: F, fontWeight: 700,
            fontSize: 64, lineHeight: 1.08,
            background: "linear-gradient(135deg, #1a1145 0%, #3d2d8f 30%, #4a8db7 60%, #3BB5A8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-1.5px", marginBottom: 24,
          }}>
            Pioneer in Web2.5 Finance
          </h1>

          <p style={{
            fontFamily: F, fontSize: 20, lineHeight: 1.7,
            fontStyle: "italic", fontWeight: 500,
            background: "linear-gradient(135deg, #3d2d8f 0%, #3BB5A8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            maxWidth: 540, marginBottom: 40,
          }}>
            Bridging Traditional Finance with Digital Assets.<br/>
            Compliant and Agentic by Design.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate("contact"); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: F, fontSize: 14, fontWeight: 600,
                color: "#fff", background: TEAL,
                padding: "13px 32px", borderRadius: 999,
                textDecoration: "none", transition: "all 180ms",
              }}
              onMouseOver={e => { e.currentTarget.style.background = TEAL_HOVER; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = TEAL; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Read more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Stats row — separate section */}
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div className="stats-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32,
          padding: "40px 0", borderTop: "1px solid #E7E7E7", borderBottom: "1px solid #E7E7E7",
        }}>
          {HERO_STATS.map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: F, fontWeight: 700, fontSize: 36,
                color: TEAL, letterSpacing: "-0.5px", marginBottom: 8, lineHeight: 1,
              }}>{s.value}</div>
              <p style={{
                fontFamily: F, fontSize: 13, color: FG_SEC, lineHeight: 1.55, fontWeight: 400,
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

/* ── Solutions Overview ── */
const SOLUTIONS = [
  { id: "stableX", name: "StableX", desc: "Cross-border FX payments powered by stablecoins. 24/7 settlement across major and exotic currencies.", accent: TEAL },
  { id: "payX", name: "PayX", desc: "Multi-rail payment solution, on/off ramp, cross-border FX, and POBO/COBO collections and payouts.", accent: "#4B82F1" },
  { id: "wealthX", name: "WealthX", desc: "Institutional-grade treasury and yield management for optimising fiat and digital asset portfolios.", accent: "#8B6FCC" },
  { id: "walletX", name: "WalletX", desc: "Proprietary MPC multi-cloud custody with threshold-signature architecture and disaster resilience.", accent: "#B69DF8" },
  { id: "agentX", name: "AgentX", desc: "Pre-built Agentic AI Skills for compliant, seamless, and expandable financial services.", accent: "#23B12F" },
  { id: "visionX", name: "VisionX", desc: "Web2.5 compliance intelligence engine unifying KYC/AML, KYT, and Travel Rule in a single layer.", accent: "#FA7C37" },
];

function SolutionsOverview() {
  const ref = useFadeIn();
  return (
    <section id="solutions-section" style={{ padding: "100px 0 120px", background: "#fff" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <span className="section-label">OUR SOLUTIONS</span>
        <h2 style={{
          fontFamily: F, fontWeight: 700, fontSize: 40, ...GRAD_HEADING,
          letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 16, maxWidth: 600,
        }}>
          Breaking Barriers, Connecting the World
        </h2>
        <p style={{
          fontFamily: F, fontSize: 16, color: FG_SEC, lineHeight: 1.75,
          maxWidth: 720, marginBottom: 56, fontWeight: 400,
        }}>
          Welcome to a world without boundaries, where global transactions are effortless and financial operations are seamless. Our proprietary platform and APIs are designed to empower our partners to thrive in today's interconnected economy.
        </p>

        <div className="solutions-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        }}>
          {SOLUTIONS.map(sol => (
            <div key={sol.id} style={{
              padding: "32px 28px", borderRadius: 12,
              background: "#fff", border: "1px solid #E7E7E7",
              transition: "all 250ms cubic-bezier(0.2,0,0,1)",
              cursor: "default",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${sol.accent}50`; e.currentTarget.style.boxShadow = `0 8px 24px ${sol.accent}15`; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E7E7E7"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: sol.accent, marginBottom: 20,
                boxShadow: `0 0 12px ${sol.accent}40`,
              }}></div>
              <h3 style={{
                fontFamily: F, fontWeight: 600, fontSize: 20,
                color: FG_DARK, marginBottom: 8, letterSpacing: "-0.3px",
              }}>{sol.name}</h3>
              <p style={{
                fontFamily: F, fontSize: 14, color: FG_SEC,
                lineHeight: 1.65, fontWeight: 400,
              }}>{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HeroSection = HeroSection;
window.SolutionsOverview = SolutionsOverview;
window.useFadeIn = useFadeIn;
window.SOLUTIONS = SOLUTIONS;
