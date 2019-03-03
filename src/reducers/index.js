import { combineReducers } from 'redux';
import testReducer from './testReducer';
import countReducer from './countReducer';

export default combineReducers({
	test: testReducer,
	count: countReducer
});