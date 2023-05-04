import { useState } from "react"
import bas from '../asset/bas.png'
import haut from '../asset/haut.png'
export function Dropdown({ titre, content }) {
  const [open, setOpen] = useState(false)
  //comportements
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
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}
