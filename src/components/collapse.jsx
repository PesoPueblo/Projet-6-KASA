import { useState } from "react"
import bas from '../asset/bas.png'
import haut from '../asset/haut.png'
export function Collapse({ titre, content }) {
  const [open, setOpen] = useState(false)
  //comportements
  function tabContent (){
    if (typeof content === 'string'|| content instanceof String){
      return ( 
        <p>{content}</p>
      )
    }
    else {const equips= []
      for (let index = 0; index < content.length; index++) {
        equips.push(
            <li key={`${content[index]}`}>{content[index]}</li>
        )
          
      }return equips}
  }
  //fonction pour derouler l'élément
  const unwrap = () => {
    setOpen(!open)
  }
  //render
  return (
    <div className="kasa-about">
      <div className="collapsible-tilte" onClick={unwrap}>
        <p>{titre}</p> {open ?  <img src= {haut} alt="fleche haut" />:<img src= {bas} alt="fleche bas" />}
      </div>
      {open && (
        <div className="content">
          {tabContent()}
        </div>
      )}
    </div>
  )
}
