import "../style/logement.css"
import { Slider } from "../components/logements/carroussel"
import { Owner } from "../components/logements/owner"
import data from "../datas/logements.json"
import { Tags } from "../components/logements/tags"
import { Dropdown } from "../components/dropdown"
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
  if (location != path) {
    return( <Error/>)
    
  }
  //affichage voulu si bon chemin
  else {
    //filtrer le tableau data avec l'id recupéré 
    const infosLogement = data.filter((logement) => logement.id === rental);
    //render 
    return infosLogement.map((infos) => {    
      return (
        <div className="logement-body" >
          <Slider slides={infos.pictures} />
         <div className="important-infos">
            <div className="rental-name">
              <h1 className="logement-title">{infos.title}</h1>
             <p className="logement-location">{infos.location}</p>
           </div>
           <Owner host={infos.host} />
        </div>
        <div className="infos-plus">
          <div className="tags-place">
            <Tags keyWords={infos.tags} />
          </div>
          <div className="stars">
            <Rate rate={infos.rating}/>
          </div>
        </div>
        <div className="infos-dropdown">
          <Dropdown titre="Description" content={infos.description}/>
          <Dropdown titre="Équipements" content={infos.equipments}/>
        </div>
      </div>
    )
  })
}
}
export default Logements
