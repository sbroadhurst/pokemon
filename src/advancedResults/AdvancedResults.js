import React from 'react'
import Poster from '../components/Poster'

class AdvancedResults extends React.Component {
  constructor() {
    super()
    console.log('construct')
  }

  componentWillMount() {
    this.getResults()
    console.log('called')
  }

  getResults() {
    //console.log(this.props)
    const { search } = this.props.location
    const url = 'https://api.pokemontcg.io/v1/cards?' + search
    console.log(url)
    fetch(url)
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
    console.log(this.props)
    const { SearchResultsAdvanced } = this.props
    return <div> {this.mapSearchName(SearchResultsAdvanced)} </div>
  }
}

export default AdvancedResults
