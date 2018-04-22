import { connect } from 'react-redux'
import Card from './Card'

import { setCardChoice } from '../reducers/cards'

const mapStatetoProps = state => {
  return {
    card: state.cards.card
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCardChoice: cardChoice => {
      dispatch(setCardChoice(cardChoice))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card)
