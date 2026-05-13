/* MetaComp Global — Main App v3 */

function App() {
  const [currentPage, setCurrentPage] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = (page) => {
    if (page === "solutions") {
      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => {
          const el = document.getElementById("solutions-section");
          if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById("solutions-section");
        if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
      }
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      <NavBar currentPage={currentPage} onNavigate={navigateTo} scrolled={scrolled} />

      <main style={{ flex: 1 }}>
        {currentPage === "home" && (
          <>
            <HeroSection onNavigate={navigateTo} />
            <PlatformSection />
            <PaymentsFeature />
            <StablecoinFeature />
            <FutureFinanceFeature />
            <WhoWeServe />
            <ContactStrip onNavigate={navigateTo} />
          </>
        )}

        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
