import { connect } from 'react-redux'
import Header from './Header'

import { setSearchText } from '../reducers/cards'

const mapStatetoProps = state => {
  return {
    SearchText: state.cards.SearchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchText: searchText => {
      dispatch(setSearchText(searchText))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header)
