import { TEST, INCREMENT, DECREMENT } from "./types";

export const  testThunk = () => dispatch => {    
    dispatch({
        type: TEST,
        payload: { test: "TEST : HELLO REDUX THUNK"}
    });
}

export const  incrementCounter = (count) => dispatch => {        
    dispatch({
        type: INCREMENT,
        value: count
    });
}

export const  decrementCounter = (count) => dispatch => {        
    dispatch({
        type: DECREMENT,
        value: count
    });
}