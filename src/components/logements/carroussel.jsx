import { useState } from "react"
import "../../style/logement.css"

export function Slider({ slides }) {
  //state
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideUrl = slides[currentIndex]

  //comportement
  //fonction pour atteindre l'image précédente
  function previousImage() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  //fonction pour atteindre l'image suivante
  function nextImage() {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  //render
  return (
    <div className="sliderContainer">
      <div className="arrowLeft" onClick={previousImage}>
        ❰
      </div>
      <div
        key={`${slideUrl}-${currentIndex}`}
        style={{ backgroundImage: `url(${slideUrl})` }}
        className="slide"
      ></div>
      <div className="counter">
        {currentIndex + 1}/{slides.length}{" "}
      </div>
      <div className="arrowRight" onClick={nextImage}>
        ❱
      </div>
    </div>
  )
}
