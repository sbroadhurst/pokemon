import React from 'react'
import Poster from '../../components/Poster'

class AdvancedResults extends React.Component {
  constructor() {
    super()
    this.state = { busy: false }
  }

  componentWillMount() {
    this.getResults()
  }

  getResults() {
    this.setState({ busy: true })
    const { search } = this.props.location
    const url = 'https://api.pokemontcg.io/v1/cards?' + search
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setSearchResultsAdvanced(res.cards)
        this.setState({ busy: false })
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
    if (this.state.busy === false)
      return <div> {this.mapSearchName(SearchResultsAdvanced)} </div>
    else return <div />
  }
}

export default AdvancedResults
