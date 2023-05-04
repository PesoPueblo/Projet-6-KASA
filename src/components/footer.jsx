import logo from '../asset/LOGOwhite.png'
import '../style/footer.css'

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={logo} alt="logo kasa" className='kasa-logo'/>
            <p>&#169; 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer