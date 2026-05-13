/* MetaComp Global — Shared v3 — Nav + Footer (PDF-aligned) */

const PURPLE_900 = "#0C0820";
const PURPLE_700 = "#211050";
const TEAL = "#3FB9B5";
const TEAL_HOVER = "#379E9A";
const FG_DARK = "#1F2024";
const FG_SEC = "#808080";
const BORDER = "#E7E7E7";
const F = "Poppins, sans-serif";
const GRAD_HEADING = { background: "linear-gradient(135deg, #1a1145 0%, #3d2d8f 30%, #4a8db7 60%, #3BB5A8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };

function NavBar({ currentPage, onNavigate, scrolled }) {
  const navLinks = [
    { id: "solutions", label: "Solutions" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
      backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
      borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.06)" : BORDER}`,
      transition: "all 300ms cubic-bezier(0.2,0,0,1)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 48px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate("home"); }}
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="assets/logo-fc.png" alt="MetaComp" style={{ height: 28, width: "auto" }} />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map(link => {
            const isActive = currentPage === link.id || (link.id === "solutions" && currentPage === "home");
            return (
              <a key={link.id} href="#"
                onClick={e => { e.preventDefault(); onNavigate(link.id); }}
                style={{
                  fontFamily: F, fontSize: 14, fontWeight: 500,
                  color: isActive ? FG_DARK : FG_SEC,
                  textDecoration: "none", transition: "color 180ms",
                }}
                onMouseOver={e => e.currentTarget.style.color = FG_DARK}
                onMouseOut={e => { if (!isActive) e.currentTarget.style.color = FG_SEC; }}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#"
            onClick={e => { e.preventDefault(); onNavigate("contact"); }}
            style={{
              fontFamily: F, fontSize: 13, fontWeight: 600,
              color: "#fff", background: TEAL,
              padding: "10px 28px", borderRadius: 999,
              textDecoration: "none", transition: "all 180ms",
            }}
            onMouseOver={e => { e.currentTarget.style.background = TEAL_HOVER; }}
            onMouseOut={e => { e.currentTarget.style.background = TEAL; }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer({ onNavigate }) {
  const disclaimer = "MetaComp FZE confirms that its website, platform, and any payment will not be launched or made available until all required licences and approvals have been obtained from the regulator. Any information displayed prior to licensing is for general information only and does not constitute an offer or solicitation of regulated services. The Company remains fully committed to complying with all applicable laws and regulatory requirements.";

  const lnk = { color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: 14, fontWeight: 400, transition: "color 180ms", display: "block" };
  const hov = e => e.currentTarget.style.color = "rgba(255,255,255,0.8)";
  const out = e => e.currentTarget.style.color = "rgba(255,255,255,0.45)";
  const colHead = { color: "rgba(255,255,255,0.2)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18, fontFamily: F };

  return (
    <footer style={{ background: PURPLE_900, fontFamily: F }}>
      {/* Disclaimer */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <p style={{ fontSize: 11, lineHeight: 1.8, color: "rgba(255,255,255,0.2)", maxWidth: 900 }}>{disclaimer}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Brand */}
          <div>
            <img src="assets/logo-white.png" alt="MetaComp" style={{ height: 24, width: "auto", opacity: 0.9 }} />
            <p style={{ fontSize: 13, marginTop: 16, maxWidth: 260, lineHeight: 1.65, color: "rgba(255,255,255,0.3)" }}>
              Pioneer in Web2.5 Finance.<br/>Compliant and Agentic by Design.
            </p>

          </div>


          {/* Company */}
          <div>
            <h4 style={colHead}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{id:"about",label:"About Us"},{id:"home",label:"Home"},{id:"contact",label:"Contact"}].map(l => (
                <a key={l.id} href="#" onClick={e=>{e.preventDefault();onNavigate(l.id);}} style={lnk} onMouseOver={hov} onMouseOut={out}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={colHead}>Legal</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Terms of Use","Privacy Policy","Cookies Policy","Risk Warning"].map(l => (
                <a key={l} href="#" style={lnk} onMouseOver={hov} onMouseOut={out}>{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 48, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            MetaComp &copy; 2026. All Rights Reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="https://linkedin.com/company/metacomp" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.25)", transition: "color 180ms" }} onMouseOver={e=>e.currentTarget.style.color="rgba(255,255,255,0.7)"} onMouseOut={e=>e.currentTarget.style.color="rgba(255,255,255,0.25)"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://x.com/MetaCompHQ" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.25)", transition: "color 180ms" }} onMouseOver={e=>e.currentTarget.style.color="rgba(255,255,255,0.7)"} onMouseOut={e=>e.currentTarget.style.color="rgba(255,255,255,0.25)"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.NavBar = NavBar;
window.Footer = Footer;
window.PURPLE_900 = PURPLE_900;
window.PURPLE_700 = PURPLE_700;
window.TEAL = TEAL;
window.TEAL_HOVER = TEAL_HOVER;
window.FG_DARK = FG_DARK;
window.FG_SEC = FG_SEC;
window.BORDER = BORDER;
window.F = F;
