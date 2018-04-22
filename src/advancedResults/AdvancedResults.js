import React from 'react'
import Poster from '../components/Poster'

class AdvancedResults extends React.Component {
  componentWillMount() {
    this.getResults()
  }

  getResults() {
    const { name, abilitytext, types, legal } = this.props.location.query
    console.log(legal)
    fetch(
      'https://api.pokemontcg.io/v1/cards?name=' +
        name +
        '&abilitytext=' +
        abilitytext +
        '&types=' +
        types +
        '&' +
        legal
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res.cards)
        this.props.setSearchResultsAdvanced(res.cards)
      })
  }

  mapSearchName(SearchResultsName) {
    if (SearchResultsName !== undefined)
      return (
        <div>
          {SearchResultsName.map((info, index) => {
            return <Poster key={index} info={info} id={info.id} />
          })}
        </div>
      )
  }

  render() {
    // console.log(this.props)
    const { SearchResultsAdvanced } = this.props
    return <div> {this.mapSearchName(SearchResultsAdvanced)} </div>
  }
}

export default AdvancedResults
