import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

import salaAttesa from "../assets/sala-attesa.jpeg";
import salaBluHero from "../assets/sala-operativa-blu-hero.jpeg";
import salaVerdeHero from "../assets/sala-operativa-verde-hero.jpeg";
import salaBlu from "../assets/sala-operativa-blu.jpeg";
import salaVerde from "../assets/sala-operativa-verde.jpeg";
import heroMobile from "../assets/mobile.jpeg";

import { trattamenti } from "../data/trattamenti";

function Home() {

const heroImages = [salaAttesa, salaBluHero, salaVerdeHero];
const heroMobileImages = [heroMobile, salaBlu, salaVerde];
const totalSlides = window.innerWidth < 768 ? heroMobileImages.length : heroImages.length;
const [currentSlide, setCurrentSlide] = useState(0);
const [studioSlide, setStudioSlide] = useState(0);
const scrollToSlide = (index) => {
  const slider = document.getElementById("studioSlider")
  if (!slider) return

  const width = slider.clientWidth

  slider.scrollTo({
    left: width * index,
    behavior: "smooth"
  })

  setStudioSlide(index)
}

useEffect(() => {
const interval = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % totalSlides);
}, 10000);

return () => clearInterval(interval);

}, []);
useEffect(() => {

  const slider = document.getElementById("studioSlider")
  if (!slider) return

  const handleScroll = () => {

    const index = Math.round(
      slider.scrollLeft / slider.clientWidth
    )

    setStudioSlide(index)

  }

  slider.addEventListener("scroll", handleScroll)

  return () => {
    slider.removeEventListener("scroll", handleScroll)
  }

}, [])

return (
<>
<Helmet>
<title>
Dentista a Napoli | Studio Associato Cassero Falivene
</title>

    <meta
      name="description"
      content="Studio Dentistico a Napoli specializzato in implantologia, ortodonzia, chirurgia orale, laser terapia e medicina estetica rigenerativa. Prenota una consulenza."
    />

    <meta
      name="keywords"
      content="dentista Napoli, studio dentistico Napoli, implantologia Napoli, ortodonzia Napoli, chirurgia orale Napoli"
    />

    <meta property="og:title" content="Studio Dentistico a Napoli | Cassero Falivene" />
    <meta property="og:description" content="Odontoiatria e medicina dentale a Napoli con tecnologie moderne e approccio personalizzato." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="it_IT" />
<meta name="robots" content="index, follow" />

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Studio Associato Cassero Falivene",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Piazza Giovanni Bovio 33",
    "addressLocality": "Napoli",
    "postalCode": "80133",
    "addressCountry": "IT"
  },
  "telephone": "+39 081 420 6346",
  "areaServed": "Napoli",
  "medicalSpecialty": "Dentistry"
}
`}
</script>  </Helmet>

  {/* HERO PREMIUM CON FOTO DELLO STUDIO */}
<section
  key={currentSlide}
  className="hero"
  style={{
    backgroundImage:
      window.innerWidth < 768
        ? "url(" + heroMobileImages[currentSlide % heroMobileImages.length] + ")"
        : "url(" + heroImages[currentSlide] + ")"
  }}
>
    <h1>Odontoiatria e Medicina Orale a Napoli</h1>
    <div className="divider"></div>
    <p>
      Cura, competenza e attenzione per la salute e l’estetica del tuo sorriso.
    </p>
    <a
      href="tel:+390814206346"
      className="btn-call"
      style={{ marginTop: "30px", display: "inline-block" }}
    >
      Prenota una consulenza
    </a>
  </section>

  {/* PERCHÉ SCEGLIERE LO STUDIO */}
  <section className="section" data-aos="fade-up">
    <div className="section-title">
      <h2>Perché scegliere lo studio</h2>
      <div className="divider"></div>
    </div>

    <div className="card-grid">
      <div className="card">
        <h3>Esperienza Clinica</h3>
        <p>Professionisti con esperienza consolidata in ambito odontoiatrico.</p>
      </div>

      <div className="card">
        <h3>Approccio Personalizzato</h3>
        <p>Piani di trattamento studiati sulle reali esigenze del paziente.</p>
      </div>

      <div className="card">
        <h3>Tecnologie Moderne</h3>
        <p>Strumentazioni aggiornate per diagnosi e terapie precise.</p>
      </div>

      <div className="card">
        <h3>Centralità del Paziente</h3>
        <p>Ascolto, attenzione e cura in ogni fase del percorso clinico.</p>
      </div>
    </div>
  </section>

  {/* PRIMA VISITA */}
<section className="section" data-aos="fade-up">

  <div className="section-title">
    <h2>La Prima Visita</h2>
    <div className="divider"></div>
  </div>

  <div className="prima-visita-grid">

    <div className="card">

      <p>
La prima visita rappresenta il momento più importante dell’appuntamento con il dentista.
</p>

<p>
Una prima visita accurata parte dall’ispezione delle mucose della bocca e dei denti, anche con l’ausilio di strumenti diagnostici avanzati come:
</p>

<ul style={{marginTop:"10px", lineHeight:"1.8", textAlign:"left"}}>
<li>Sistemi di ingrandimento</li>
<li>Radiografie endorali</li>
<li>Ortopantomografia</li>
<li>TAC dentale eseguibile direttamente nello studio</li>
<li>Sistemi rilevatori di carie come il laser per transilluminazione</li>
</ul>

<p style={{marginTop:"15px"}}>
Questi strumenti consentono una diagnosi precoce delle patologie della bocca e dei denti e permettono un intervento preciso, tempestivo e personalizzato.
</p>

    </div>

  </div>

</section>

  {/* LO STUDIO */}
  <section className="section" data-aos="fade-up">
  <div className="section-title">
    <h2>Lo Studio</h2>
    <div className="divider"></div>
  </div>

  <p style={{ maxWidth: "800px", margin: "0 auto 50px", opacity: "0.85" }}>
    Lo studio è dotato di tecnologie diagnostiche e terapeutiche di ultima generazione,
    finalizzate a garantire precisione, sicurezza e mininvasività nei trattamenti.
  </p>

  <div className="studio-grid">

    <div>
      <ul style={{ lineHeight: "2", fontSize: "16px", listStylePosition: "inside" }}>
        <li><strong>Ortopantomografo e TAC dentale</strong></li>
        <li><strong>Radiografia digitale</strong> a bassa esposizione</li>
        <li><strong>Laser Diagnocam</strong> per diagnosi precoce non invasiva</li>
        <li><strong>Impronta ottica digitale</strong></li>
        <li><strong>Chirurgia Piezoelettrica</strong> e <strong>Magnetodinamica</strong></li>
        <li><strong>Laser</strong> per la cura della carie, delle patologie del cavo orale e per trattamenti estetici</li>
        <li><strong>Medicina rigenerativa ed estetica</strong> con PRF</li>
        <li><strong>Fresatore CAD/CAM</strong> per la realizzazione di corone protesiche, intarsi e faccette</li>
        <li><strong>Microscopio operatorio</strong> per trattamenti di alta precisione e micro-odontoiatria</li>
      </ul>
    </div>

  <div>

  <div className="studio-slider" id="studioSlider">

    <img
      src={salaBlu}
      alt="Sala operativa odontoiatrica"
    />

    <img
      src={salaVerde}
      alt="Sala operativa odontoiatrica"
    />

  </div>

  <div className="slider-dots">

    <span
      className={studioSlide === 0 ? "dot active" : "dot"}
      onClick={() => scrollToSlide(0)}
    ></span>

    <span
      className={studioSlide === 1 ? "dot active" : "dot"}
      onClick={() => scrollToSlide(1)}
    ></span>

  </div>

</div>


  </div>
</section>

  {/* MEDICI */}
  <section id="medici" className="section" data-aos="fade-up">
    <div className="section-title">
      <h2>I Medici</h2>
      <div className="divider"></div>
    </div>

    <p style={{ marginBottom: "40px", opacity: "0.8" }}>
      Un’équipe di professionisti al servizio della salute orale.
    </p>

    <div className="card-grid">
      <Link to="/medici/gennaro-falivene" className="card card-clickable">
        <h3>Dott. Gennaro Falivene</h3>
      </Link>

      <Link to="/medici/fabrizio-cassero" className="card card-clickable">
        <h3>Dott. Fabrizio Cassero</h3>
      </Link>
    </div>
  </section>

  {/* TRATTAMENTI */}
 <section id="trattamenti" className="section" data-aos="fade-up">

<div className="section-title">
<h2>Trattamenti</h2>
<div className="divider"></div>
</div>

<div className="card-grid">

{Object.entries(trattamenti).map(([slug, trattamento]) => (

<Link key={slug} to={"/trattamenti/" + slug} className="card card-clickable">

<img
  src={trattamento.img}
  alt={trattamento.titolo}
  style={{ width: "150px", marginBottom: "25px" }}
/>

<h3>{trattamento.titolo}</h3>

<p>{trattamento.descrizione}</p>

</Link>

))}
<Link to="/trattamenti" className="card card-clickable trattamenti-mobile-card">
  <h3>Scopri tutti i trattamenti</h3>
  <p>Esplora tutte le terapie disponibili nel nostro studio</p>
</Link>


</div>

</section>

  {/* FAQ */}
  <section className="section faq-section" data-aos="fade-up">
    <div className="section-title">
      <h2>Domande Frequenti</h2>
      <div className="divider"></div>
    </div>

    <div className="card-grid">
      <div className="card">
        <h3>È necessaria la prenotazione?</h3>
        <p>Sì, riceviamo su appuntamento per garantire la massima attenzione.</p>
      </div>

      <div className="card">
        <h3>Quanto dura la prima visita?</h3>
        <p>La prima visita ha una durata media di circa 30–40 minuti.</p>
      </div>

      <div className="card">
        <h3>Effettuate trattamenti estetici?</h3>
        <p>Sì, offriamo soluzioni per migliorare estetica e armonia del sorriso.</p>
      </div>

      <div className="card">
        <h3>Accettate urgenze?</h3>
        <p>Gestiamo urgenze compatibilmente con la disponibilità giornaliera.</p>
      </div>
    </div>
  </section>

  {/* CTA FINALE */}
  <section className="section" data-aos="fade-up">
    <div className="cta-luxury">
      <h2>Prenota una consulenza specialistica</h2>
      <p>
        Il nostro studio è a tua disposizione per valutare il percorso più
        adatto alle tue esigenze.
      </p>
      <a href="tel:+390814206346" className="btn-call">
        Contatta lo studio
      </a>
    </div>
  </section>
</>

);
}

export default Home;