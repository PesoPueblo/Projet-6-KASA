import { useState } from "react"
import '../../style/card.css'
export default function Card() {
  //state
const [logements] = useState([
  {id: "c67ab8a7",
  title: "Appartement cosy",
  cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  },
  {
    id: "b9123946",
		title: "Magnifique appartement proche Canal Saint Martin",
		cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
		
  },
  {
    id: "46d188c5",
		title: "Studio de charme - Buttes Chaumont",
		cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
		
  }
])

  //comportement 

  //render
  return(
    <div className="kasa-gallery">
      {logements.map((logement)=>{
        return (
          <div className="kasa-card" key={logement.id}>
          <img src={logement.cover} alt={logement.title} className="card-img"/>
          <h3 className="card-title">{logement.title}</h3>
          </div>
          )})}
    </div>
    )
  
}