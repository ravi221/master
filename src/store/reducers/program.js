import * as Actions from '../../store/actions/actionTypes';

const initialState = {
    programs: [],
    error: false
  }

const program = (state = initialState, action) => {
  switch(action.type) {
    case Actions.SET_PROGRAM: 
      return {
        ...state,
        programs : action.program,
        error: false
      }
    case Actions.FETCH_PROGRAM_FAILED: 
      return {
        ...state,
        error: true
      }
    default:
      return state;
    
  }

}

export default program;