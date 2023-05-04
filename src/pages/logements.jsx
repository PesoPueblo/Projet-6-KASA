import "../style/logement.css"
import { Slideshow } from "../components/logements/Slideshow"
import { Owner } from "../components/logements/owner"
import data from "../datas/logements.json"
import { Tags } from "../components/logements/tags"
import { Collapse } from "../components/collapse"
import Rate from "../components/logements/rate"
import { useLocation } from "react-router-dom"
import Error from "./Error"
function Logements() {
  //recupération du chemin actuel
  const location= useLocation().pathname
  //recupère l'id  rental dans le storage
  const rental = sessionStorage.getItem("rental")
  //création du chemin voulu 
  const path= `/logement/${rental}`
  // condition d'echec 
  if (location !== path) {return( <Error/>)  }
  //affichage voulu si bon chemin
  else {
    //filtrer le tableau data avec l'id recupéré 
    const infosLogement = data.filter((logement) => logement.id === rental);
    //render 
    return infosLogement.map((infos) => {    
      return (
        <div className="logement-body" key={rental}>
          <Slideshow slides={infos.pictures} />
         <div className="important-infos">
            <div className="rental-name">
              <h1 className="logement-title">{infos.title}</h1>
             <p className="logement-location">{infos.location}</p>
          <div className="tags-place">
            <Tags keyWords={infos.tags} />
          </div>
           </div>
        <div className="infos-plus">
           <Owner host={infos.host} />
          <Rate rate={infos.rating} />
        </div>
        </div>
        <div className="infos-collapse">
          <Collapse titre="Description" content={infos.description}/>
          <Collapse titre="Équipements" content={infos.equipments}/>
        </div>
      </div>
    )
  })
}
}
export default Logements
