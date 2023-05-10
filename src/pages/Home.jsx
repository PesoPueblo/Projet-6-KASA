import "../style/home.css"
import Banner from "../components/banner"
import Card from "../components/home/Card"
import img from "../asset/IMG.jpg"
function Home() {
  return (
    <div className="kasa-homeBody">
      <Banner title="Chez vous, partout et ailleurs" url={img}/>
      <Card />
    </div>
  )
}
export default Home
