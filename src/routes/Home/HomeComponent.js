import React from 'react'
import Cardlayout from '../../Cardlayout.jpg'
import '../Cards/Boxes.css'
import CarouselPoster from '../../components/CarouselPoster'

class HomeComponent extends React.Component {
  componentWillMount() {
    this.getSet()
  }

  getSet() {
    fetch('https://api.pokemontcg.io/v1/sets?standardLegal=true')
      .then(res => {
        return res.json()
      })
      .then(res => {
        //console.log(res.sets)
        this.props.getSets(res.sets)
      })
  }

  setsMap() {
    const sets = this.props.sets
    return (
      <div>
        {sets.reverse().map((info, index) => {
          return <CarouselPoster key={index} info={info} id={info.id} />
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          {' '}
          <div className="logo" />
        </header>
        <article className="sets">
          <div className="body">{this.setsMap()}</div>
        </article>
        <aside className="aside aside-1">
          <img src={Cardlayout} className="poke-info" alt="Pokecard-info" />
        </aside>
        <footer className="footer">
          {' '}
          <a
            rel="noopener noreferrer"
            href="https://www.pokemon.com/us/pokemon-tcg/"
            target="_blank"
          >
            {' '}
            Official Pokemon TCG Website{' '}
          </a>
          <br />
        </footer>
      </div>
    )
  }
}

export default HomeComponent
