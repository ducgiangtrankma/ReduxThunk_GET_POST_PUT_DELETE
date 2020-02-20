import fetchReducer from './FetchReducer';
import {combineReducers} from 'redux';
const reducer = combineReducers({
  fetch: fetchReducer,
});
export default reducer;
