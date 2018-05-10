import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'

import { getSets } from '../../reducers/cards'

const mapStatetoProps = state => {
  return {
    sets: state.cards.sets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSets: set => {
      dispatch(getSets(set))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(HomeComponent)
