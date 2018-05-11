import React from 'react'
import { Link } from 'react-router-dom'

class Poster extends React.Component {
  render() {
    let card = this.props.info
    return (
      <div className="card-list" style={{ display: 'inline' }}>
        <Link to={{ pathname: '/info/' + card.id }}>
          <img
            style={{ width: '159.25px', height: '222.3px', margin: '5px' }}
            className="card"
            alt={card.name}
            title={card.name}
            src={card.imageUrl || card.logoUrl}
          />
        </Link>
      </div>
    )
  }
}

export default Poster
