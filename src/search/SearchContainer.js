import { connect } from 'react-redux'
import SearchComponent from './SearchComponent'

import { setSearchResultsName } from '../reducers/cards'

const mapStatetoProps = state => {
  return {
    SearchResultsName: state.cards.SearchResultsName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchResultsName: searchResultsName => {
      dispatch(setSearchResultsName(searchResultsName))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SearchComponent)
