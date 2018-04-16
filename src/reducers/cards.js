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
  }
}

let defaultState = {
  SearchText: '',
  SearchResultsName: [],
  SearchResultsAdvanced: [],
  advancedName: '',
  advancedText: '',
  advancedType: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
