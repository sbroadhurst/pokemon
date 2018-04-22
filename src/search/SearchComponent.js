import React from 'react'
import Poster from '../components/Poster'

let oldSearch

class SearchComponent extends React.Component {
  componentWillMount() {
    this.getSearchResultsName()
  }

  componentDidUpdate() {
    let query = this.props.match.params.text
    if (query !== oldSearch) {
      console.log('will update')
      this.getSearchResultsName()

      oldSearch = this.props.match.params.text
    }
  }

  getSearchResultsName() {
    let query = this.props.match.params.text
    fetch('https://api.pokemontcg.io/v1/cards?name=' + query)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setSearchResultsName(res.cards)
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
    const { SearchResultsName } = this.props
    return <div> {this.mapSearchName(SearchResultsName)} </div>
  }
}

export default SearchComponent
