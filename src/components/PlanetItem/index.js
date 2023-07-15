import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem

  return (
    <div className="item">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="item-heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
