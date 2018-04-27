import * as action from './actions'

//search
export const setSearchText = text => {
  return {
    type: action.SEARCH_TEXT,
    payload: { SearchText: text }
  }
}

export const setSearchResultsName = name => {
  return {
    type: action.SEARCH_RESULTS_NAME,
    payload: { SearchResultsName: name }
  }
}

export const setSearchResultsAdvanced = advanced => {
  return {
    type: action.SEARCH_RESULTS_ADVANCED,
    payload: { SearchResultsAdvanced: advanced }
  }
}

export const setAdvancedName = name => {
  return {
    type: action.ADVANCED_NAME,
    payload: { advancedName: name }
  }
}

export const setAdvancedText = text => {
  return {
    type: action.ADVANCED_TEXT,
    payload: { advancedText: text }
  }
}

export const setAdvancedType = type => {
  return {
    type: action.ADVANCED_TYPE,
    payload: { advancedType: type }
  }
}

export const setLegalType = legal => {
  return {
    type: action.LEGAL_TYPE,
    payload: { legalType: legal }
  }
}

export const setCardChoice = cardChoice => {
  return {
    type: action.CARD_CHOICE,
    payload: { card: cardChoice }
  }
}

export const getSets = set => {
  return {
    type: action.GET_SETS,
    payload: { sets: set }
  }
}

const ACTION_HANDLERS = {
  [action.SET_STATE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  //Search
  [action.SEARCH_TEXT]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.SEARCH_RESULTS_NAME]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.SEARCH_RESULTS_ADVANCED]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.ADVANCED_NAME]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.ADVANCED_TEXT]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.ADVANCED_TYPE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.LEGAL_TYPE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.CARD_CHOICE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.GET_SETS]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
  SearchText: '',
  SearchResultsName: [],
  SearchResultsAdvanced: [],
  advancedName: '',
  advancedText: '',
  advancedType: [],
  legalType: '',
  card: [],
  sets: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
