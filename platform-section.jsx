/* MetaComp Global — Platform Section — Combined "Compliant & Agentic by Design" */

const ENGINES = [
  {
    name: "StableX Engine",
    accent: "#3FB9B5",
    desc: "Core settlement and stablecoin infrastructure powering payments, transfers, and on/off ramp across fiat and digital rails.",
    bullets: [
      "Smart FX routing engine that selects the optimal rail, SWIFT or stablecoin, based on best rate and fastest speed",
      "Reduces cross-border settlement from 2–7 days to T+0 across fiat, stablecoins, and exotic currencies",
      "Built for scale and speed",
    ],
  },
  {
    name: "VisionX Engine",
    accent: "#FA7C37",
    desc: "Intelligence and reporting layer providing analytics, market data, and insights across the platform.",
    bullets: [
      "Web2.5 compliance intelligence engine combining multiple KYT tools and databases into one unified view",
      "Bridges Web2 KYC/AML/TM with Web3 KYT and Travel Rule in a single execution layer",
      "Real-time, consolidated view of identity and transaction risk across blockchain and off-chain financial systems",
    ],
  },
];

const PLATFORM_PRODUCTS = [
  {
    name: "PayX",
    accent: "#4B82F1",
    desc: "Multi-rail payment solution, on/off ramp, cross-border FX, and POBO/COBO collections and payouts across fiat and stablecoins.",
    features: [
      "MPC Wallets for secure digital asset custody",
      "Collections and payments in fiat and stablecoins",
      "Conversions between fiat and tokenised assets",
      "Compliant cross-border transactions",
    ],
  },
  {
    name: "WealthX",
    accent: "#8B6FCC",
    desc: "Institutional-grade Treasury and Yield Management solution for optimising fiat and digital assets.",
    features: null,
  },
  {
    name: "AgentX",
    accent: "#23B12F",
    desc: "Compliant, seamless, expandable — equips your AI agent with pre-built Agentic AI Skills for financial services.",
    tags: ["Know-Your-Agent (KYA)", "Agentic KYC/Onboarding", "Web2.5 Agentic AML", "Hybrid Payments", "Securities/RWA Hybrid Wealth"],
    features: null,
  },
  {
    name: "WalletX",
    accent: "#B8ABE0",
    desc: "Proprietary MPC multi-cloud custody infrastructure with threshold-signature architecture and disaster resilience.",
    features: null,
  },
];

function PlatformSection() {
  const ref = useFadeIn();

  const bulletDot = (color) => ({
    width: 5, height: 5, borderRadius: "50%",
    background: color, flexShrink: 0, marginTop: 8,
  });

  const cardBase = {
    padding: "36px 32px", borderRadius: 16,
    background: "#fff", border: "1px solid #E8E8EE",
    transition: "all 300ms cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <section style={{ padding: "120px 0", background: "#F7F7F7" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        {/* Section header */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <h2 style={{
            fontFamily: F, fontWeight: 700, fontSize: 44,
            ...GRAD_HEADING, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 8,
          }}>
            Compliant &amp; Agentic by Design
          </h2>
          <p style={{
            fontFamily: F, fontSize: 18,
            color: FG_SEC, fontWeight: 400,
          }}>
            One Network, Two Engines — Powering Payments and Wealth
          </p>
        </div>

        {/* Infographic image */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <img src="assets/compliant-agentic-infographic.png" alt="Compliant and Agentic by Design — Platform Architecture"
            style={{ width: "100%", maxWidth: 960, height: "auto" }} />
        </div>

        {/* Tier 1: StableX Network */}
        <div style={{
          ...cardBase, padding: "40px 36px",
          marginBottom: 16, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, #3FB9B5, #4DD4CF)",
          }}></div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%", background: "#3FB9B5",
              boxShadow: "0 0 12px rgba(63,185,181,0.4)",
            }}></div>
            <span style={{
              fontFamily: F, fontSize: 11, fontWeight: 600,
              color: FG_SEC, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>The Network</span>
          </div>
          <h3 style={{
            fontFamily: F, fontWeight: 700, fontSize: 28,
            color: FG_DARK, marginBottom: 8, letterSpacing: "-0.5px",
          }}>
            StableX Network
          </h3>
          <p style={{
            fontFamily: F, fontSize: 15,
            color: FG_SEC, lineHeight: 1.6, maxWidth: 560,
          }}>
            Multi-stablecoin issuance and settlement network — the foundational layer connecting all services.
          </p>
        </div>

        {/* Tier 2: Two Engines with bullet points */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          {ENGINES.map((eng) => (
            <div key={eng.name} style={{ ...cardBase }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${eng.accent}40`; e.currentTarget.style.boxShadow = `0 8px 32px ${eng.accent}12`; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E7E7E7"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%", background: eng.accent,
                  boxShadow: `0 0 12px ${eng.accent}40`,
                }}></div>
                <span style={{
                  fontFamily: F, fontSize: 11, fontWeight: 600,
                  color: FG_SEC, letterSpacing: "0.1em", textTransform: "uppercase",
                }}>Engine</span>
              </div>
              <h3 style={{
                fontFamily: F, fontWeight: 600, fontSize: 22,
                color: FG_DARK, marginBottom: 10, letterSpacing: "-0.3px",
              }}>
                {eng.name}
              </h3>
              <p style={{
                fontFamily: F, fontSize: 14,
                color: FG_SEC, lineHeight: 1.6, marginBottom: 20,
              }}>
                {eng.desc}
              </p>
              {/* Bullet points */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {eng.bullets.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={bulletDot(eng.accent)}></div>
                    <p style={{
                      fontFamily: F, fontSize: 13,
                      color: FG_SEC, lineHeight: 1.55, margin: 0,
                    }}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tier 3: Products — 2-column grid for richer content */}
        <div className="platform-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
        }}>
          {PLATFORM_PRODUCTS.map((prod) => (
            <div key={prod.name} style={{ ...cardBase, padding: "28px 28px" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${prod.accent}40`; e.currentTarget.style.boxShadow = `0 8px 32px ${prod.accent}12`; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E7E7E7"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: prod.accent, marginBottom: 16,
                boxShadow: `0 0 12px ${prod.accent}40`,
              }}></div>
              <h3 style={{
                fontFamily: F, fontWeight: 600, fontSize: 18,
                color: FG_DARK, marginBottom: 8, letterSpacing: "-0.3px",
              }}>
                {prod.name}
              </h3>
              <p style={{
                fontFamily: F, fontSize: 13,
                color: FG_SEC, lineHeight: 1.65,
              }}>
                {prod.desc}
              </p>

              {/* Sub-features for PayX */}
              {prod.features && (
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
                  marginTop: 16,
                }}>
                  {prod.features.map((f, i) => (
                    <div key={i} style={{
                      padding: "10px 14px", borderRadius: 10,
                      background: "#F7F7F7",
                    }}>
                      <p style={{
                        fontFamily: F, fontSize: 11.5,
                        color: FG_SEC, lineHeight: 1.5, margin: 0, fontWeight: 500,
                      }}>
                        {f}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skill tags for AgentX */}
              {prod.tags && (
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14,
                }}>
                  {prod.tags.map((t, i) => (
                    <span key={i} style={{
                      fontFamily: F, fontSize: 11, fontWeight: 500,
                      color: FG_SEC, background: "#EEEEEE",
                      padding: "4px 12px", borderRadius: 100, letterSpacing: "0.01em",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PlatformSection = PlatformSection;
