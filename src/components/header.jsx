import logo from "../asset/LOGO.png"
import "../style/header.css"
import { Link, useLocation } from "react-router-dom"

function Header() {
  //verification de l'url en cours
  const location = useLocation().pathname
  //creation d'un lien accueil avec un classname en fonction de l'url en cours
  function accueil() {
    if (location === "/") {
      return (
        <Link to="/" className="currentpath">
          Accueil
        </Link>
      )
    } else {
      return <Link to="/" className="link">Accueil</Link>
    }
  }
  //creation d'un lien apropos avec un classname en fonction de l'url en cours
  function apropos() {
    if (location === "/APropos") {
      return (
        <Link to="/APropos" className="currentpath">
          A Propos
        </Link>
      )
    } else {
      return <Link to="/APropos" className="link">A Propos</Link>
    }
  }
  return (
    <div className="kasa-header">
      <img src={logo} alt="logo Kasa" className="kasa-logohead"></img>
      <nav className="kasa-nav">
        {accueil()}
        {apropos()}
      </nav>
    </div>
  )
}
//mettre à dispostion la fonction pour les autres page
export default Header
