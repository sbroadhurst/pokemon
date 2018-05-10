import React from 'react'

class CarouselPoster extends React.Component {
  render() {
    let card = this.props.info
    const url =
      'https://bulbapedia.bulbagarden.net/wiki/' + card.name + '_(TCG)'
    return (
      <div className="card-list" style={{ display: 'inline' }}>
        <a rel="noopener noreferrer" href={url} target="_blank">
          <img
            style={{ width: '130px', height: '140px', margin: '5px' }}
            className="card"
            alt={card.name}
            title={card.name}
            src={card.imageUrl || card.logoUrl}
          />
        </a>
      </div>
    )
  }
}

export default CarouselPoster
