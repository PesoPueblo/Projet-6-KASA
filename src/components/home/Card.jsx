import data from "../../datas/logements.json"
import { Link } from "react-router-dom"
export default function Card() {
  return (
    <div className="kasa-gallery">
      {data.map((logement) => {
        //recupération de l'id pour 
        function idKeeper() {
          sessionStorage.setItem("rental", logement.id)
        }
        //render des cards
        return (
          <div key={logement.id}>
            <Link
              to={`logement/${logement.id}`}
              className="kasa-card"
              onClick={idKeeper}
            >
              <img
                src={logement.cover}
                alt={logement.title}
                className="card-img"
              />
              <h3 className="card-title">{logement.title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
