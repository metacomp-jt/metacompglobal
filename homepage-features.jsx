/* MetaComp Global — Homepage Features v3 — PDF-style two-column sections */

/* ── Feature Section: Powering Payments ── */
function PaymentsFeature() {
  const ref = useFadeIn();
  const features = [
    { title: "Cross-Border Money Transfers", desc: "Simplify global payments with reliable, secure, and cost-efficient cross-border money transfer solutions. Whether managing B2B transactions or catering to B2C clients, we take the complexity out of international payments." },
    { title: "POBO and COBO Solutions", desc: "Payment and Collection on Behalf services help reduce operational complexity, enhance visibility, and provide a seamless experience for your business and its stakeholders." },
    { title: "FX and OTC Solutions", desc: "Simplify global transactions with robust FX and OTC solutions. Whether managing multi-currency operations or navigating digital asset integration, we provide secure and tailored services." },
  ];

  return (
    <section style={{ padding: "120px 0", background: "#fff" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div className="feature-row" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          {/* Left: heading + description + image */}
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{
              fontFamily: F, fontWeight: 700, fontSize: 40, ...GRAD_HEADING,
              letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 20,
            }}>
              Powering Payments, Seamlessly
            </h2>
            <p style={{
              fontFamily: F, fontSize: 16, color: FG_SEC, lineHeight: 1.75,
              marginBottom: 32, fontWeight: 400,
            }}>
              Built for speed, cost-efficiency, and regulatory compliance. StableX delivers 24/7 FX infrastructure across a wide range of currencies — including exotic and less commonly traded pairs for global payment flows.
            </p>
            <img src="assets/stable-rails.png" alt="Fiat and stablecoin rails"
              style={{ width: "100%", maxWidth: 400, height: "auto", borderRadius: 8 }} />
          </div>

          {/* Right: feature cards */}
          <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column", gap: 24 }}>
            {features.map((f, i) => (
              <div key={i} style={{
                padding: "28px 24px", borderRadius: 12,
                background: "#F7F7F7", border: "1px solid #EEEEEE",
              }}>
                <h3 style={{
                  fontFamily: F, fontWeight: 600, fontSize: 18, color: FG_DARK,
                  marginBottom: 10, letterSpacing: "-0.2px",
                }}>{f.title}</h3>
                <p style={{
                  fontFamily: F, fontSize: 14, color: FG_SEC, lineHeight: 1.65, fontWeight: 400,
                }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Section: Stablecoin Issuers ── */
function StablecoinFeature() {
  const ref = useFadeIn();
  const pillars = [
    { title: "Global Banking Connectivity", desc: "Leverage our network of global banking partners across APAC, Europe, and the Americas for efficient cross-border transactions and 24/7 seamless operations." },

    { title: "Global Market Makers Network", desc: "Access a robust network of global market makers who engage with MetaComp daily, delivering superior liquidity and stability for stablecoin operations." },
  ];

  return (
    <section style={{ padding: "120px 0", background: "#F7F7F7" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div className="feature-row" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          {/* Left: pillars */}
          <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column", gap: 20 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                padding: "28px 24px", borderRadius: 12,
                background: "#fff", border: "1px solid #E7E7E7",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%", background: TEAL,
                    boxShadow: `0 0 8px ${TEAL}40`,
                  }}></div>
                  <h3 style={{
                    fontFamily: F, fontWeight: 600, fontSize: 17, color: FG_DARK,
                    letterSpacing: "-0.2px",
                  }}>{p.title}</h3>
                </div>
                <p style={{
                  fontFamily: F, fontSize: 14, color: FG_SEC, lineHeight: 1.65, fontWeight: 400,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: heading + description */}
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{
              fontFamily: F, fontWeight: 700, fontSize: 40, ...GRAD_HEADING,
              letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 20,
            }}>
              All-in-One Solution for Stablecoin Issuers
            </h2>
            <p style={{
              fontFamily: F, fontSize: 16, color: FG_SEC, lineHeight: 1.75, fontWeight: 400,
            }}>
              In today's rapidly evolving digital economy, success starts with a strong and dependable foundation. Our fully integrated infrastructure empowers stablecoin issuers by simplifying every stage of the lifecycle — from seamless launches to efficient management and scalable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Section: Future of Finance ── */
function FutureFinanceFeature() {
  const ref = useFadeIn();
  const features = [
    { title: "Seamless Integration of TradFi and Digital Assets", desc: "Our platform bridges the worlds of traditional and digital finance, offering innovative wealth solutions designed to enhance liquidity management and optimise portfolio performance." },
    { title: "Comprehensive End-to-End Solutions", desc: "From payments and custody to trading, compliance, and liquidity management — tailored to meet the diverse needs of modern financial institutions exploring collective investment schemes and real-world asset tokenisation." },
  ];

  return (
    <section style={{ padding: "120px 0", background: "#fff" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div className="feature-row" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          {/* Left: heading + description */}
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{
              fontFamily: F, fontWeight: 700, fontSize: 40, ...GRAD_HEADING,
              letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 20,
            }}>
              Welcome to the Future of Finance
            </h2>
            <p style={{
              fontFamily: F, fontSize: 16, color: FG_SEC, lineHeight: 1.75, fontWeight: 400,
            }}>
              At the convergence of traditional finance and digital assets lies a new era of opportunity. We provide robust and secure infrastructure designed to seamlessly integrate these two ecosystems, enabling institutions to navigate the global financial landscape with confidence and precision.
            </p>

          </div>

          {/* Right: feature cards */}
          <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} style={{
                padding: "28px 24px", borderRadius: 12,
                background: "#F7F7F7", border: "1px solid #EEEEEE",
              }}>
                <h3 style={{
                  fontFamily: F, fontWeight: 600, fontSize: 17, color: FG_DARK,
                  marginBottom: 10, letterSpacing: "-0.2px",
                }}>{f.title}</h3>
                <p style={{
                  fontFamily: F, fontSize: 14, color: FG_SEC, lineHeight: 1.65, fontWeight: 400,
                }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Section: Wallet Security ── */
function WalletFeature() {
  const ref = useFadeIn();
  return (
    <section style={{ padding: "120px 0", background: "#F7F7F7" }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div className="feature-row" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          {/* Left: image / country reach */}
          <div style={{ flex: "1 1 50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="assets/country-reach.png" alt="Global country reach"
              style={{ width: "100%", maxWidth: 480, height: "auto" }} />
          </div>

          {/* Right: heading + description */}
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{
              fontFamily: F, fontWeight: 700, fontSize: 40, ...GRAD_HEADING,
              letterSpacing: "-0.8px", lineHeight: 1.12, marginBottom: 20,
            }}>
              WalletX &amp; WalletSafe
            </h2>
            <p style={{
              fontFamily: F, fontSize: 16, color: FG_SEC, lineHeight: 1.75, marginBottom: 24, fontWeight: 400,
            }}>
              In the rapidly evolving digital asset landscape, security is paramount. WalletX provides advanced security using Multi-Cloud, Multi-Party Computation (MPC) technology, ensuring robust protection without compromising accessibility.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "WalletX: Fortified with Next-Gen Protection", desc: "MPC technology combined with multi-shard and multi-cloud architecture for unparalleled security and seamless accessibility." },
                { title: "WalletSafe: Smarter Transaction Screening", desc: "Screen counterparties before you transact with advanced on-chain AML/CFT capabilities to ensure compliance and mitigate risk." },
              ].map((f, i) => (
                <div key={i} style={{
                  padding: "20px", borderRadius: 8,
                  background: "#fff", border: "1px solid #E7E7E7",
                }}>
                  <h4 style={{ fontFamily: F, fontWeight: 600, fontSize: 15, color: FG_DARK, marginBottom: 6 }}>{f.title}</h4>
                  <p style={{ fontFamily: F, fontSize: 13, color: FG_SEC, lineHeight: 1.6, fontWeight: 400 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PaymentsFeature = PaymentsFeature;
window.StablecoinFeature = StablecoinFeature;
window.FutureFinanceFeature = FutureFinanceFeature;
window.WalletFeature = WalletFeature;
