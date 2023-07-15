import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="container">
      <h1 className="heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          <div>
            <PlanetItem planetItem={planetsList[0]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[1]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[2]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[3]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[4]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[5]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[6]} />
          </div>
          <div>
            <PlanetItem planetItem={planetsList[7]} />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
