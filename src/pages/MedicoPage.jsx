import { useParams } from "react-router-dom";
import gennaroImg from "../assets/gennaro-falivene.jpg";
import fabrizioImg from "../assets/fabrizio-cassero.jpg";

function MedicoPage() {
  const { id } = useParams();

  const medici = {
    "gennaro-falivene": {
      nome: "Dott. Gennaro Falivene",
      ruolo: "Medico Chirurgo – Specialista in Odontostomatologia",
      immagine: gennaroImg,
      iscrizioneMedici: "25648",
      iscrizioneOdontoiatri: "1002",
      descrizione: (
        <>
          <p>
            Laureato con lode in Medicina e Chirurgia e specializzato con lode in Odontostomatologia,
            svolge attività libero-professionale a Napoli dal 1991.
          </p>

          <p>
            Nel corso della sua carriera ha maturato una consolidata esperienza
            in chirurgia orale, implantologia osteointegrata, patologia orale
            e nelle applicazioni del laser in odontostomatologia.
          </p>

          <h4>Formazione e Perfezionamento</h4>
          <ul>
            <li>Laurea con lode in Medicina e Chirurgia</li>
            <li>Specializzazione con lode in Odontostomatologia</li>
            <li>Perfezionamento in Patologia Orale – Università Federico II</li>
            <li>Perfezionamento in Chirurgia Orale Ambulatoriale – Università Federico II</li>
            <li>Perfezionamento in Implantologia Osteointegrata – Università Federico II</li>
            <li>Master di II livello in Laser in Odontostomatologia – Università La Sapienza</li>
          </ul>

          <h4>Attività Accademica e Scientifica</h4>
          <ul>
            <li>Cultore della materia in Istologia ed Embriologia</li>
            <li>Docente al Master di II livello in Laser in Odontostomatologia</li>
            <li>Professore a contratto presso Università italiane</li>
            <li>Autore di pubblicazioni scientifiche</li>
            <li>Membro del Board S.I.L.O.</li>
            <li>Socio attivo A.N.T.H.E.C. (Academy of Neoregenerative Therapies and Hemo-Components)</li>
            <li>Socio attivo A.I.O.L.A. (Accademia Internazionale Odontoiatria Laser Assistita)</li>
            <li>Consulente Tecnico presso il Tribunale di Napoli</li>
          </ul>

          <p>
            L’attività clinica è orientata al rigore scientifico,
            all’aggiornamento continuo e alla centralità del paziente.
          </p>
        </>
      )
    },

    "fabrizio-cassero": {
      nome: "Dott. Fabrizio Cassero",
      ruolo: "Medico Chirurgo – Specialista in Odontostomatologia",
      immagine: fabrizioImg,
      iscrizioneMedici: "32404",
      iscrizioneOdontoiatri: "993",
      descrizione: (
        <>
          <p>
            Laureato in Medicina e Chirurgia presso l’Università degli Studi di Napoli “Federico II”
            e specializzato in Odontostomatologia, ha completato un percorso accademico di alto livello.
          </p>

          <h4>Formazione e Perfezionamento</h4>
          <ul>
            <li>Laurea in Medicina e Chirurgia – Università Federico II</li>
            <li>Specializzazione in Odontostomatologia – Università Federico II</li>
            <li>Perfezionamento I livello in Patologie della Mucosa Orale – Università Federico II</li>
            <li>Perfezionamento II livello in Patologie della Mucosa Orale – Università Federico II</li>
            <li>Perfezionamento in Chirurgia Odontoiatrica – Università Federico II</li>
            <li>Master di II livello in Implantologia Orale – Seconda Università degli Studi di Napoli</li>
          </ul>

          <h4>Attività Professionale</h4>
          <ul>
            <li>Medico Chirurgo Odontoiatra</li>
            <li>Giornalista pubblicista – Ordine n. 62053</li>
          </ul>

          <p>
            L’attività clinica è orientata alla precisione diagnostica,
            all’approfondimento scientifico e alla cura personalizzata del paziente.
          </p>
        </>
      )
    }
  };

  const medico = medici[id];

  if (!medico) {
    return (
      <section className="section">
        <div className="section-title">
          <h2>Medico non trovato</h2>
          <div className="divider"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="medico-container">

        <div className="medico-image">
          <img 
            src={medico.immagine} 
            alt={medico.nome} 
            className="medico-foto"
          />
  {id === "gennaro-falivene" && (
<p style={{
textAlign: "center",
marginTop: "15px",
fontStyle: "italic",
opacity: "0.85"
}}>
Tra i maggiori esperti di laser medicali e opinion leader per importanti aziende del settore.
</p>
)}
        </div>

        <div className="medico-content">
          <h1>{medico.nome}</h1>
          <div className="divider"></div>
          <h3>{medico.ruolo}</h3>

          <p style={{ marginTop: "12px", fontSize: "14px", opacity: "0.75" }}>
            Iscrizione Ordine dei Medici di Napoli n. {medico.iscrizioneMedici}<br />
            Iscrizione Albo Odontoiatri n. {medico.iscrizioneOdontoiatri}
          </p>

          <div className="medico-descrizione">
            {medico.descrizione}
          </div>
        </div>

      </div>
    </section>
  );
}

export default MedicoPage;
