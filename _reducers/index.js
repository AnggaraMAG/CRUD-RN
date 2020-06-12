import {combineReducers} from 'redux';

import BlogReducer from './BlogReducers';

const rootReducer = combineReducers({
  datalist: BlogReducer,
});

export default rootReducer;
