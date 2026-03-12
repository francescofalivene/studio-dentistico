import { useParams } from "react-router-dom";
import videoConservativa from "../assets/Vclasse.mp4";
import rimozioneMacchie from "../assets/rimozionemacchie.png";
import chirurgiaLaser from "../assets/chirurgialaser.png";
import frenulectomia from "../assets/frenulectomia.png";
import videoEstetica from "../assets/esteticalaser.mp4";

function CasoLaserPage() {

  const { caso } = useParams();
  let titolo = caso;

  if (caso === "conservativa") {
    titolo = "Conservativa";
  }

  if (caso === "rimozione-macchie") {
    titolo = "Rimozione Macchie Gengivali";
  }

  return (

<section className="section">

  <div className="trattamento-container">

    <div className="trattamento-content">

      <h1>{titolo}</h1>
      <div className="divider"></div>

      {caso === "conservativa" && (
        <>
          <p className="trattamento-descrizione">
            Il laser è una tecnologia avanzata che consente di trattare la carie in modo preciso e minimamente invasivo.
          </p>

          <p className="trattamento-descrizione">
            A differenza delle tecniche tradizionali, il laser riduce vibrazioni, rumore e fastidi durante il trattamento, rendendo la terapia molto più confortevole per il paziente.
          </p>

          <p className="trattamento-descrizione">
            Il trattamento è eseguito senza dolore e senza la necessità di anestesia, offrendo un’esperienza più delicata e serena rispetto alle tecniche tradizionali.
          </p>
        </>
      )}

      {caso === "rimozione-macchie" && (
        <>
          <p className="trattamento-descrizione">
            La rimozione delle macchie gengivali con laser è un trattamento estetico che permette di eliminare le pigmentazioni scure presenti sulle gengive.
          </p>

          <p className="trattamento-descrizione">
            Il laser agisce in modo preciso sui tessuti gengivali pigmentati, migliorando l’aspetto del sorriso in maniera delicata e minimamente invasiva.
          </p>

          <p className="trattamento-descrizione">
            Il trattamento è rapido e confortevole per il paziente e consente di ottenere gengive dall’aspetto più uniforme, sano e naturale.
          </p>
        </>
      )}
      {caso === "chirurgia-laser" && (
  <>
    <p className="trattamento-descrizione">
      La chirurgia laser rappresenta una delle tecnologie più avanzate dell’odontoiatria moderna, permettendo di eseguire interventi sui tessuti orali in modo estremamente preciso e minimamente invasivo.
    </p>

    <p className="trattamento-descrizione">
      Il laser consente di trattare i tessuti molli con grande accuratezza, riducendo sanguinamento, gonfiore e fastidi post-operatori rispetto alle tecniche chirurgiche tradizionali.
    </p>

    <p className="trattamento-descrizione">
      Grazie a questa tecnologia, molti interventi risultano più rapidi, più confortevoli per il paziente e con tempi di guarigione generalmente più veloci.
    </p>
  </>
)}
{caso === "frenulectomia" && (
  <>
    <p className="trattamento-descrizione">
      La frenulectomia laser è un intervento che consente di correggere un frenulo labiale o linguale troppo corto o troppo spesso, che può causare problemi funzionali o estetici.
    </p>

    <p className="trattamento-descrizione">
      Grazie all’utilizzo del laser è possibile eseguire l’intervento in modo estremamente preciso e delicato, riducendo sanguinamento e fastidi rispetto alle tecniche chirurgiche tradizionali.
    </p>

    <p className="trattamento-descrizione">
      Il trattamento è rapido, confortevole per il paziente e favorisce una guarigione più veloce dei tessuti.
    </p>
  </>
)}
{caso === "estetica-laser" && (
  <>
    <p className="trattamento-descrizione">
      L’estetica laser permette di trattare diverse imperfezioni della mucosa orale e della pelle in modo preciso e delicato, migliorando l’aspetto estetico dei tessuti.
    </p>

    <p className="trattamento-descrizione">
      Grazie alla precisione del laser è possibile intervenire su macchie, piccole lesioni o alterazioni dei tessuti con un approccio minimamente invasivo e altamente controllato.
    </p>

    <p className="trattamento-descrizione">
      Il trattamento consente di ottenere un miglioramento visibile dell’aspetto dei tessuti trattati, con maggiore comfort per il paziente e tempi di recupero generalmente più rapidi.
    </p>
  </>
)}

    </div>

    <div className="trattamento-image">

      {caso === "conservativa" && (
        <video controls className="trattamento-video">
          <source src={videoConservativa} type="video/mp4" />
        </video>
      )}

      {caso === "rimozione-macchie" && (
        <img
          src={rimozioneMacchie}
          alt="Rimozione macchie gengivali"
        />
      )}

      {caso === "chirurgia-laser" && (
        <img
          src={chirurgiaLaser}
          alt="Chirurgia laser"
        />
      )}

      {caso === "frenulectomia" && (
        <img
          src={frenulectomia}
          alt="Frenulectomia"
        />
      )}

      {caso === "estetica-laser" && (
        <video controls className="trattamento-video">
          <source src={videoEstetica} type="video/mp4" />
        </video>
      )}

    </div>

  </div>

</section>

  );
}

export default CasoLaserPage;