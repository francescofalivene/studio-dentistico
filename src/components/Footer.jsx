import logo from "../assets/logo.png";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contatti" className="footer">

      <section className="section">
        <div className="section-title">
          <h2>Contatti</h2>
          <div className="divider"></div>
        </div>

        <div className="footer-container">

          {/* BLOCCO SINISTRA PREMIUM */}
          <div className="footer-info">

            <div className="footer-brand">
              <img 
                src={logo} 
                alt="Studio Associato Cassero Falivene" 
                className="footer-logo"
              />
              <div>
                <h3>Studio Associato Cassero Falivene</h3>
                <p>Odontoiatria e Medicina Dentale</p>
              </div>
            </div>

            <p>
  Tel: <a href="tel:+390814206346">081 420 6346</a>
</p>
            <p>Piazza Giovanni Bovio 33, Napoli</p>
            <p>P.IVA 03362930657</p>
            <div className="footer-hours">
  <p><strong>Orari di apertura</strong></p>
  <p>Lunedì – Mercoledì – Venerdì</p>
  <p>10:30 – 12:30</p>
  <p>14:30 – 20:00</p>
</div>

            {/* SOCIAL E WHATSAPP CON ICONE */}
            <div className="footer-social">
              <a
                href="https://wa.me/393792943109"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="https://www.instagram.com/laserterapia_casserofalivene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/share/1DRknWK8sR/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
            </div>

          </div>

          {/* MAPPA */}
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps?q=Piazza+Giovanni+Bovio+33,+Napoli&output=embed"
              loading="lazy"
              title="Mappa Studio"
            ></iframe>
          </div>

        </div>
      </section>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Studio Associato Cassero Falivene |{" "}
        <Link 
          to="/privacy-policy" 
          className="privacy-link"
          translate="no"
        >
          Privacy
        </Link>
      </div>

    </footer>
  );
}

export default Footer;