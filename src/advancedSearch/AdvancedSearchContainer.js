import { connect } from 'react-redux'
import AdvancedSearchComponent from './AdvancedSearchComponent'

import {
  setAdvancedName,
  setAdvancedText,
  setAdvancedType
} from '../reducers/cards'

const mapStatetoProps = state => {
  return {
    advancedName: state.cards.advancedName,
    advancedText: state.cards.advancedText,
    advancedType: state.cards.advancedType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAdvancedName: payload => {
      dispatch(setAdvancedName(payload))
    },
    setAdvancedText: payload => {
      dispatch(setAdvancedText(payload))
    },
    setAdvancedType: payload => {
      dispatch(setAdvancedType(payload))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(
  AdvancedSearchComponent
)
