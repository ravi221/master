import axios from '../../axios';
import * as Actions from './actionTypes';


export const setPrograms = (program) => {
    return {
        type: Actions.SET_PROGRAM,
        program: program
    };
};

export const fetchProgramFailed = () => {
    return {
        type: Actions.FETCH_PROGRAM_FAILED
    }
}

export const initPrograms = () => {
    return dispatch => {
        axios.get('/program.json')
            .then( response => {
                console.log(response)
                const resData = [];
                resData.push(response.data)
                dispatch(setPrograms(resData));
            })
            .catch( error => {
                dispatch(fetchProgramFailed())
            })
   }
}