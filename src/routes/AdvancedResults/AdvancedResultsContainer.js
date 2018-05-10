import { connect } from 'react-redux'
import AdvancedResults from './AdvancedResults'

import { setSearchResultsAdvanced } from '../../reducers/cards'

const mapStatetoProps = state => {
  return {
    SearchResultsAdvanced: state.cards.SearchResultsAdvanced
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchResultsAdvanced: searchResultsAdvanced => {
      dispatch(setSearchResultsAdvanced(searchResultsAdvanced))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AdvancedResults)
