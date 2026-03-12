import { Link } from "react-router-dom";
import { trattamenti } from "../data/trattamenti";

function TrattamentiPage() {
  return (
    <section className="section">

      <div className="section-title">
        <h2>Tutti i Trattamenti</h2>
        <div className="divider"></div>
      </div>

      <div className="card-grid">

        {Object.entries(trattamenti).map(([slug, trattamento]) => (

          <Link
            key={slug}
            to={"/trattamenti/" + slug}
            className="card card-clickable"
          >

            <img
              src={trattamento.img}
              alt={trattamento.titolo}
              style={{ width: "130px", marginBottom: "25px" }}
            />

            <h3>{trattamento.titolo}</h3>

            <p>{trattamento.descrizione}</p>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default TrattamentiPage;