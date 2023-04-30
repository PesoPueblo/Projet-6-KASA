import logo from '../asset/LOGO.png'
import '../style/header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (

        <div className='kasa-header'>
        <img src={logo} alt="logo Kasa" className='kasa-logohead'></img>
        <nav className='kasa-nav'>
            <Link to="/" >Accueil</Link>
            <Link to="/APropos" >A Propos</Link>
        </nav>
        </div>
    )
}
export default Header