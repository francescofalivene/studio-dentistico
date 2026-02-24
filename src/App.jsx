import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">Studio Associato</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#medici">Medici</a>
          <a href="#trattamenti">Trattamenti</a>
          <a href="#contatti" className="cta-nav">Chiama</a>
        </nav>
      </header>

      <section className="hero fade-in" id="home">
        <h1>Studio Associato Cassero Falivene</h1>
        <div className="divider"></div>
        <p>Odontoiatria e Medicina Dentale</p>
        <p>Napoli · Piazza Giovanni Bovio 33</p>
        <a href="tel:0814206346" className="cta-main">Chiama Ora</a>
      </section>

      <section className="about fade-in">
        <h2>Lo Studio</h2>
        <div className="divider"></div>
        <p>
          Studio odontoiatrico a Napoli guidato dal Dott. Gennaro Falivene e dal
          Dott. Fabrizio Cassero. Approccio moderno, attenzione al paziente e
          tecnologie avanzate.
        </p>
      </section>

      <section className="medici fade-in" id="medici">
        <h2>I Medici</h2>
        <div className="divider"></div>

        <div className="card-grid">
          <div className="card">
            <h3>Dott. Gennaro Falivene</h3>
          </div>

          <div className="card">
            <h3>Dott. Fabrizio Cassero</h3>
          </div>
        </div>

        <button className="outline-btn">Scopri di più</button>
      </section>

      <section className="trattamenti fade-in" id="trattamenti">
        <h2>Trattamenti</h2>
        <div className="divider"></div>

        <div className="card-grid">
          <div className="card">Odontoiatria Generale</div>
          <div className="card">Ortodonzia</div>
          <div className="card">Laserterapia</div>
          <div className="card">Estetica Medica</div>
        </div>

        <button className="outline-btn">Vedi tutti i trattamenti</button>
      </section>

      <section className="contatti fade-in" id="contatti">
        <h2>Contatti</h2>
        <div className="divider"></div>

        <p><strong>Indirizzo:</strong> Piazza Giovanni Bovio 33, Napoli</p>
        <p><strong>Telefono:</strong> 081 420 6346</p>

        <a href="tel:0814206346" className="cta-main">Chiama Ora</a>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Piazza+Giovanni+Bovio+33+Napoli&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        © 2026 Studio Associato Cassero Falivene
      </footer>
    </>
  );
}

export default App;