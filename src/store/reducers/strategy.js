import * as Actions from '../../store/actions/actionTypes';

const initialState = {
    strategy: [],
    error: false
  }

const program = (state = initialState, action) => {
  switch(action.type) {
    case Actions.SET_STRATEGY: 
      return {
        ...state,
        strategy : action.strategy,
        error: false
      }
    case Actions.FETCH_STRATEGY_FAILED: 
      return {
        ...state,
        error: true
      }
    default:
      return state;
    
  }

}

export default program;