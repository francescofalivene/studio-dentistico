import { useParams, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import conservativaImg from "../assets/conservativa.png";
import parodontologia1 from "../assets/parodontologia1.png";
import parodontologia2 from "../assets/parodontologia2.png";
import terapiaLaserImg from "../assets/terapialaser.png"
import impiantologia from "../assets/impiantologia.jpeg"
import esteticaDentale from "../assets/esteticadentale.jpeg";
import estetica1 from "../assets/estetica1.jpeg";
import estetica2 from "../assets/estetica2.jpeg";
import protesiImg from "../assets/protesi.jpeg";
import estetica3 from "../assets/estetica3.jpeg";
import estetica4 from "../assets/estetica4.jpeg";
import ortodonziaImg from "../assets/orto.jpeg";
import chirurgia3 from "../assets/chirurgia3.jpeg";
import endodonzia1 from "../assets/endo1.jpg";
import endodonzia2 from "../assets/endo2.jpg";

function TrattamentoPage() {
const { id } = useParams();
const sliderRef = useRef(null);
const [activeSlide, setActiveSlide] = useState(0);
useEffect(() => {

  if (
  id !== "parodontologia" &&
  id !== "medicina-estetica" &&
  id !== "estetica" &&
  id !== "endodonzia"
) return;

  const slider = sliderRef.current;
  if (!slider) return;

  const handleScroll = () => {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    setActiveSlide(index);
  };

  slider.addEventListener("scroll", handleScroll);

  return () => slider.removeEventListener("scroll", handleScroll);

}, [id]);

const trattamenti = {
conservativa: {
titolo: "Conservativa",
sottotitolo: "Cura e ricostruzione dei denti danneggiati",
descrizione: "La conservativa si occupa del trattamento delle carie e della ricostruzione dei denti danneggiati mediante materiali estetici di ultima generazione. L'obiettivo è preservare la struttura dentale naturale garantendo funzionalità ed estetica.Presso il nostro studio utilizziamo materiali compositi di ultima generazione e tecniche minimamente invasive, per ricostruire i denti danneggiati preservando il più possibile il tessuto dentale naturale."
},

endodonzia: {
  titolo: "Endodonzia",
  sottotitolo: "Terapie canalari per salvare denti compromessi",
  descrizione: `
    L’endodonzia consente di trattare infezioni e infiammazioni della polpa dentale.
    Attraverso terapie canalari precise e sicure con l'utilizzo di tecnologie (microscopio,laser etc...), è possibile preservare
    il dente naturale evitando l’estrazione.
  `
},

estetica: {
  titolo: "Estetica Dentale",
  sottotitolo: "Armonia e valorizzazione del sorriso",
  descrizione: `
    L’estetica dentale migliora forma, colore e proporzioni dei denti.
    Ogni trattamento è personalizzato per ottenere un sorriso
    naturale, equilibrato e armonico.
    Presso il nostro studio eseguiamo
    trattamenti di sbiancamento dentale e sarà possibile richiedere faccette in ceramica Feld-spadica molto sottili senza dover toccare i denti con il trapano.
  `
},

chirurgia: {
  titolo: "Chirurgia Orale",
  sottotitolo: "Interventi odontoiatrici in sicurezza",
  descrizione: `
    La chirurgia orale comprende estrazioni complesse,
    interventi sui tessuti molli e procedure chirurgiche
    eseguite con protocolli moderni e sicuri.
  `
},

implantologia: {
  titolo: "Implantologia",
  sottotitolo: "Riabilitazione fissa sicura e duratura",
  descrizione: `
    L’implantologia permette la sostituzione dei denti mancanti
    con soluzioni fisse stabili e naturali.
    Tecniche avanzate assicurano precisione e integrazione ottimale.
    Nel nostro studio si effettuano interventi di impiantologia
    guidata senza tagli.
  `
},

parodontologia: {
  titolo: "Parodontologia",
  sottotitolo: "Cura delle patologie gengivali",
  descrizione: `
    La parodontologia si occupa della salute delle gengive
    e dei tessuti di supporto del dente.
    Trattiamo gengiviti e parodontiti con protocolli mirati
    alla stabilità e al mantenimento nel tempo. 
    Nel nostro studio eseguiamo trattamenti parodontali
personalizzati con l'utilizzo del laser e del microscopio operatorio per prevenire la perdita dei denti e
mantenere la salute delle gengive nel lungo periodo.
  `
},

ortodonzia: {
  titolo: "Ortodonzia",
  sottotitolo: "Allineamento dentale per adulti e bambini",
  descrizione: `
    L’ortodonzia corregge disallineamenti dentali e malocclusioni migliorando la funzione masticatoria e l’estetica del sorriso.

Presso il nostro studio realizziamo trattamenti ortodontici personalizzati per adulti e bambini, utilizzando soluzioni moderne come allineatori trasparenti e tecniche ortodontiche avanzate.

Ogni piano di trattamento viene studiato con attenzione per garantire risultati stabili nel tempo, migliorando l’armonia del sorriso e il benessere del paziente.
  `
},

"medicina-estetica": {
  titolo: "Medicina Estetica Rigenerativa",
  sottotitolo: "Benessere e rigenerazione dei tessuti",
  descrizione: `
    La medicina estetica rigenerativa mira al miglioramento
    della qualità dei tessuti attraverso protocolli innovativi,
    favorendo armonia e naturalezza del risultato.
  `
},

protesi: {
  titolo: "Protesi Dentale",
  sottotitolo: "Riabilitazione funzionale ed estetica del sorriso",
  descrizione: `
    La protesi dentale consente di ripristinare estetica e funzionalità
    del sorriso nei pazienti con denti mancanti o denti gravemente compromessi.

    Presso il nostro studio realizziamo riabilitazioni protesiche personalizzate
    mediante protesi fisse e mobili, progettate per garantire stabilità,
    comfort e un risultato estetico naturale e duraturo.
  `
},

laser: {
  titolo: "Laser Terapia",
  sottotitolo: "Tecnologia avanzata minimamente invasiva",
  descrizione: `
    L’utilizzo del laser in odontoiatria consente trattamenti
    più precisi, meno invasivi e con tempi di recupero ridotti.
    Una tecnologia moderna al servizio del paziente.
  `
}

};

const trattamento = trattamenti[id];

if (!trattamento) {
return (
<section className="section">
<div className="section-title">
<h2>Trattamento non trovato</h2>
<div className="divider"></div>
</div>
</section>
);
}

return (
<>
<Helmet>
<title>{trattamento.titolo} | Dentista Napoli | Studio Cassero Falivene</title>

<meta
name="description"
content="Trattamento odontoiatrico presso lo Studio Associato Cassero Falivene a Napoli. Odontoiatria e medicina dentale con tecnologie avanzate."
/>

<meta name="robots" content="index, follow" />
</Helmet>

<section className="section">
<div className="trattamento-container">

    <div className="trattamento-content">
      <h1>{trattamento.titolo}</h1>
      <div className="divider"></div>
      <h3>{trattamento.sottotitolo}</h3>

      <p className="trattamento-descrizione">
        {trattamento.descrizione}
      </p>

      <div className="trattamento-cta">
        <h4>Desideri maggiori informazioni?</h4>
        <p>Contattaci per una consulenza personalizzata.</p>
        <a href="tel:+390814206346" className="btn-call">
          Chiama ora
        </a>
      </div>

    </div>

<div className="trattamento-image">

  {id === "conservativa" && (
    <img src={conservativaImg} alt="Odontoiatria conservativa" />
  )}
  {id === "laser" && (
  <img src={terapiaLaserImg} alt="Terapia Laser" />
)}
{id === "implantologia" && (
  <img src={impiantologia} alt="Implantologia dentale" />
)}
{id === "ortodonzia" && (
  <img src={ortodonziaImg} alt="Ortodonzia dentale" />
)}
{id === "chirurgia" && (
  <img src={chirurgia3} alt="Chirurgia orale" />
)}
{id === "protesi" && (
  <img src={protesiImg} alt="Protesi dentale" />
)}
{id === "estetica" && (
  <div className="trattamento-slider">

    <div className="slider-track" ref={sliderRef}>
      <img src={esteticaDentale} alt="Estetica dentale" />
      <img src={estetica3} alt="Estetica dentale" />
      <img src={estetica4} alt="Estetica dentale" />
    </div>

    <div className="slider-dots">
      <span className={activeSlide === 0 ? "dot active" : "dot"}></span>
      <span className={activeSlide === 1 ? "dot active" : "dot"}></span>
      <span className={activeSlide === 2 ? "dot active" : "dot"}></span>
    </div>

  </div>
)}

  {id === "parodontologia" && (
    <div className="trattamento-slider">

      <div className="slider-track" ref={sliderRef}>
        <img src={parodontologia1} alt="Parodontologia" />
        <img src={parodontologia2} alt="Parodontologia" />
      </div>

 <div className="slider-dots">
  <span className={activeSlide === 0 ? "dot active" : "dot"}></span>
  <span className={activeSlide === 1 ? "dot active" : "dot"}></span>
</div>

    </div>
  )}
  {id === "endodonzia" && (
  <div className="trattamento-slider">

    <div className="slider-track" ref={sliderRef}>
      <img src={endodonzia1} alt="Endodonzia" />
      <img src={endodonzia2} alt="Endodonzia" />
    </div>

    <div className="slider-dots">
      <span className={activeSlide === 0 ? "dot active" : "dot"}></span>
      <span className={activeSlide === 1 ? "dot active" : "dot"}></span>
    </div>

  </div>
)}
  {id === "medicina-estetica" && (
  <div className="trattamento-slider">

    <div className="slider-track" ref={sliderRef}>
      <img src={estetica1} alt="Medicina estetica rigenerativa" />
      <img src={estetica2} alt="Medicina estetica rigenerativa" />
    </div>

    <div className="slider-dots">
      <span className={activeSlide === 0 ? "dot active" : "dot"}></span>
      <span className={activeSlide === 1 ? "dot active" : "dot"}></span>
    </div>

  </div>
)}

{id !== "conservativa" &&
 id !== "parodontologia" &&
 id !== "laser" &&
 id !== "implantologia" &&
 id !== "estetica" &&
 id !== "medicina-estetica" &&
 id !== "protesi" && 
 id !== "chirurgia" &&
  id !== "endodonzia" &&
  id !== "ortodonzia" && (
  <div className="image-placeholder">
    Immagine Trattamento
  </div>
)}

</div>

  </div>
</section>

{id === "laser" && (

<section className="section">

<div className="section-title">
<h2>Casi Clinici Laser</h2>
<div className="divider"></div>
</div>

<div className="card-grid">

<Link to="/trattamenti/laser/conservativa" className="card">
<h3>Conservativa</h3>
</Link>

<Link to="/trattamenti/laser/rimozione-macchie" className="card">
<h3>Rimozione macchie gengivali</h3>
</Link>

<Link to="/trattamenti/laser/chirurgia-laser" className="card">
<h3>Chirurgia Laser</h3>
</Link>

<Link to="/trattamenti/laser/frenulectomia" className="card">
<h3>Frenulectomia</h3>
</Link>

<Link to="/trattamenti/laser/estetica-laser" className="card">
<h3>Estetica Laser</h3>
</Link>

</div>

</section>

)}
</>
);
}

export default TrattamentoPage;