import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
    count: 0
}

export default function(state = initialState, action){
	switch(action.type){
		case INCREMENT:
		 return{
		 	...state,		 	
		 	count: action.value + 1
         };
         
         case DECREMENT:
		 return{
		 	...state,		 	
		 	count: action.value -1
		 };

		 
		default:
			return state;
	}
}