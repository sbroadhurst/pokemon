import React from 'react'
import './Boxes.css'

class Card extends React.Component {
  componentWillMount() {
    this.getCard()
  }

  getCard() {
    const { id } = this.props.match.params
    fetch('https://api.pokemontcg.io/v1/cards?id=' + id)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res.cards)
        this.props.setCardChoice(res.cards[0])
      })
  }

  render() {
    const { card } = this.props
    console.log(card)
    if (!card.attacks) {
      return <div />
    }
    return (
      <div className="wrapper">
        <article className="main">
          <div className="body">
            <p>
              {card.name} - HP: {card.hp}
            </p>
            <div>
              Type:{' '}
              {card.types.map((info, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: 'inline-block', paddingRight: 5 }}
                  >
                    <p> {info}</p>
                  </div>
                )
              })}
              <p style={{ display: 'inline-block', marginLeft: 15 }}>
                Subtype: {card.subtype}
              </p>
            </div>
            {card.attacks.map((info, index) => {
              return (
                <div key={index}>
                  <p>
                    Energy Cost: {info.convertedEnergyCost} Name: {info.name}{' '}
                    Damage: {info.damage} <br />
                    {info.text} <br />{' '}
                  </p>
                </div>
              )
            })}
            <br />
          </div>
        </article>
        <aside className="aside aside-1">
          <img
            src={card.imageUrlHiRes}
            className="card-image"
            alt="The pokemon card selected"
          />
        </aside>
      </div>
    )
  }
}

export default Card
