import { combineReducers } from 'redux';
import people from './people';


export const rootReducer = combineReducers({
  // changeFriend,
  // changeFavourite,
  people,
});

export default rootReducer;