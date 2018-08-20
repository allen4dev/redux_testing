import { combineReducers } from 'redux';

function usersReducer(state = [], action) {
  return state;
}

const reducer = combineReducers({
  users: usersReducer,
});

export default reducer;
