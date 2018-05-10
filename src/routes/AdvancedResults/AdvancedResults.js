import React from 'react'
import Poster from '../../components/Poster'

class AdvancedResults extends React.Component {
  componentWillMount() {
    this.getResults()
  }

  getResults() {
    const { search } = this.props.location
    const url = 'https://api.pokemontcg.io/v1/cards?' + search
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
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
    const { SearchResultsAdvanced } = this.props
    return <div> {this.mapSearchName(SearchResultsAdvanced)} </div>
  }
}

export default AdvancedResults
