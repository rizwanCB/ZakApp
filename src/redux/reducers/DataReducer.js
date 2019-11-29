import {FETCH_IN_PROGRESS, USERS, ALBUMS} from '../types.js';
const INITIAL_STATE = {
  loading: false,
  users: [],
  albums: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS: {
      return {...state, users: action.payLoad};
    }
    case ALBUMS: {
      return {...state, albums: action.payLoad};
    }
    case FETCH_IN_PROGRESS: {
      const bool = action.payLoad === 'true' ? true : false;
      return {...state, loading: bool};
    }

    default:
      return state;
  }
};
