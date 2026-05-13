/* MetaComp Global — Homepage Bottom v3 — Who We Serve + Contact CTA + Pages */

/* ── Who We Serve ── */
const SEGMENTS = [
  { title: "Payment Service Providers", desc: "Seeking seamless, secure, and scalable solutions for cross-border payments and multi-currency operations." },
  { title: "Stablecoin Issuers", desc: "Looking for trusted infrastructure to launch, manage, and scale digital assets with regulatory compliance." },
  { title: "Institutions", desc: "Navigating the complexities of global finance with innovative tools for treasury, wealth, and digital assets." },
];

function WhoWeServe() {
  const ref = useFadeIn();
  return (
    <section style={{ padding: "120px 0", background: "#fff" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: F, fontWeight: 700, fontSize: 40, ...GRAD_HEADING,
            letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 16,
          }}>
            Discover the Power of a Partnership<br/>
            Built for Your Success
          </h2>
        </div>

        <div className="serve-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
        }}>
          {SEGMENTS.map((seg, i) => (
            <div key={i} style={{
              padding: "36px 32px", borderRadius: 12,
              background: "#F7F7F7", border: "1px solid #EEEEEE",
              textAlign: "center",
              transition: "all 250ms cubic-bezier(0.2,0,0,1)",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${TEAL}40`; e.currentTarget.style.boxShadow = `0 8px 24px rgba(63,185,181,0.1)`; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#EEEEEE"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <h3 style={{
                fontFamily: F, fontWeight: 600, fontSize: 20, color: FG_DARK,
                marginBottom: 12, letterSpacing: "-0.3px",
              }}>{seg.title}</h3>
              <p style={{
                fontFamily: F, fontSize: 14, color: FG_SEC, lineHeight: 1.65, fontWeight: 400,
              }}>{seg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact CTA Strip ── */
function ContactStrip({ onNavigate }) {
  const ref = useFadeIn();
  return (
    <section style={{ padding: "120px 0", background: PURPLE_900, position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(63,185,181,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }}></div>

      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2 style={{
          fontFamily: F, fontWeight: 700, fontSize: 44, color: "#fff",
          marginBottom: 16, letterSpacing: "-1px",
        }}>
          Get In Touch With Us
        </h2>
        <p style={{
          fontFamily: F, fontSize: 16, color: "rgba(255,255,255,0.4)",
          marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: "0 auto 40px",
        }}>
          Have questions or need assistance? Whether you're looking for detailed information about our services or want to discuss partnership opportunities, our team is ready to assist.
        </p>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate("contact"); }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: F, fontSize: 15, fontWeight: 600,
            color: "#fff", background: TEAL, padding: "14px 36px",
            borderRadius: 999, textDecoration: "none",
            transition: "all 180ms",
          }}
          onMouseOver={e => { e.currentTarget.style.background = TEAL_HOVER; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseOut={e => { e.currentTarget.style.background = TEAL; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Contact Us
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </section>
  );
}

/* ── Page: About ── */
function AboutPage() {
  const contentRef = useFadeIn();
  const imageRef = useFadeIn();

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "#fff", padding: "140px 0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <h1 style={{
            fontFamily: F, fontWeight: 700, fontSize: 56, lineHeight: 1.08,
            maxWidth: 700, letterSpacing: "-1.5px", ...GRAD_HEADING,
          }}>
            About MetaComp
          </h1>
        </div>
      </section>

      {/* Logo + intro + gears image */}
      <section style={{ padding: "64px 0 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <img src="assets/logo-fc.png" alt="MetaComp" style={{ height: 32, width: "auto", marginBottom: 40 }} />

          <div ref={contentRef} className="fade-up about-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
          }}>
            <div>
              <p style={{ fontFamily: F, fontSize: 18, color: FG_DARK, lineHeight: 1.8, marginBottom: 24, fontWeight: 400 }}>
                MetaComp is a pioneer in unified Web2.5 digital financial solutions, bridging fiat and stablecoin capabilities across payments, treasury, and wealth management on an institutional, group-level platform.
              </p>
              <p style={{ fontFamily: F, fontSize: 15, color: FG_SEC, lineHeight: 1.85, marginBottom: 20 }}>
                MetaComp Group's subsidiaries include entities licensed by the Monetary Authority of Singapore (MAS) as a Major Payment Institution, authorised to provide Digital Payment Token (DPT) and Cross-border Money Transfer (CBMT) services.
              </p>
              <p style={{ fontFamily: F, fontSize: 15, color: FG_SEC, lineHeight: 1.85, marginBottom: 20 }}>
                In 2025, the group platform processed over US$10 billion in payment and OTC volume across 13+ stablecoins, operating at a monthly run rate exceeding US$1 billion. Through the StableX Network, institutions move, convert, and manage capital across fiat and stablecoin rails within a compliant, unified Web2.5 financial architecture.
              </p>
              <p style={{ fontFamily: F, fontSize: 15, color: FG_SEC, lineHeight: 1.85, marginBottom: 20 }}>
                Treasury and investment services are provided through Alpha Ladder Finance Pte. Ltd., a MAS-licensed affiliate holding Capital Markets Services (CMS) and Recognised Market Operator (RMO) licences, with wealth AUM surpassing US$500 million.
              </p>
              <p style={{ fontFamily: F, fontSize: 15, color: FG_SEC, lineHeight: 1.85, marginBottom: 36 }}>
                MetaComp has raised US$35 million in Pre-A funding rounds to date and achieved full-year net profitability in 2025, reflecting strong institutional demand for regulated Web2.5 financial solutions.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ fontFamily: F, fontSize: 14, color: FG_SEC, fontWeight: 500 }}>Follow MetaComp</span>
                <a href="https://linkedin.com/company/metacomp" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: F, fontSize: 14, fontWeight: 600, color: TEAL, textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  @MetaComp
                </a>
                <a href="https://x.com/MetaCompHQ" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: F, fontSize: 14, fontWeight: 600, color: TEAL, textDecoration: "none" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @MetaCompHQ
                </a>
              </div>
            </div>
            <div ref={imageRef} className="fade-up" style={{ display: "flex", justifyContent: "center" }}>
              <img src="assets/solution-gears.png" alt="MetaComp Platform" style={{ width: "100%", maxWidth: 420, height: "auto" }} />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

/* ── Page: Contact ── */
function ContactPage() {
  return (
    <div>
      <section style={{ background: "#fff", padding: "140px 0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <span className="section-label">CONTACT</span>
          <h1 style={{
            fontFamily: F, fontWeight: 700, fontSize: 56, lineHeight: 1.08,
            letterSpacing: "-1.5px", ...GRAD_HEADING,
          }}>
            Get In Touch With Us
          </h1>
        </div>
      </section>

      <section style={{ padding: "60px 0 160px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontFamily: F, fontSize: 16, color: FG_SEC, lineHeight: 1.75, marginBottom: 40, fontWeight: 400 }}>
              Have questions or need assistance? Whether you're looking for detailed information about our services, have specific inquiries, or want to discuss partnership opportunities, our team is ready to assist.
            </p>

            <div style={{
              display: "flex", alignItems: "center", gap: 20,
              padding: "28px 32px", borderRadius: 12,
              background: "#F7F7F7", border: "1px solid #E7E7E7", marginBottom: 20,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 8,
                background: "rgba(63,185,181,0.08)", display: "grid", placeItems: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 4L12 13 2 4"></path>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: "#B3B3B3", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Email</div>
                <a href="mailto:info@metacomp.global" style={{ fontFamily: F, fontSize: 18, fontWeight: 600, color: TEAL, textDecoration: "none" }}>info@metacomp.global</a>
              </div>
            </div>

            <div style={{
              display: "flex", alignItems: "center", gap: 20,
              padding: "28px 32px", borderRadius: 12,
              background: "#F7F7F7", border: "1px solid #E7E7E7",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 8,
                background: "rgba(63,185,181,0.08)", display: "grid", placeItems: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: "#B3B3B3", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Office</div>
                <span style={{ fontFamily: F, fontSize: 15, fontWeight: 500, color: FG_DARK }}>168 Robinson Road #19-15, Capital Tower, Singapore 068912</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.WhoWeServe = WhoWeServe;
window.ContactStrip = ContactStrip;
window.AboutPage = AboutPage;
window.ContactPage = ContactPage;
