import axios from '../../axios';
import * as Actions from './actionTypes';


export const setStrategy = (strategy) => {
    return {
        type: Actions.SET_STRATEGY,
        strategy: strategy
    };
};

export const fetchStrategyFailed = () => {
    return {
        type: Actions.FETCH_STRATEGY_FAILED
    }
}

export const initStrategy = () => {
    return dispatch => {
        axios.get('/strategy.json')
            .then( response => {
                console.log(response)
                const resData = [];
                resData.push(response.data)
                dispatch(setStrategy(resData));
            })
            .catch( error => {
                dispatch(fetchStrategyFailed())
            })
   }
}