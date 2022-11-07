import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, items: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        items: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, items: action.payload.data };
    case FETCH_POST:
      return { ...state, item: action.payload.item };
    case LIKE:
      return { ...state, items: state.items.map((item) => (item._id === action.payload._id ? action.payload : item)) };
    case COMMENT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id ==+action.payload._id) {
            return action.payload;
          }
          return item;
        }),
      };
    case CREATE:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE:
      return { ...state, items: state.items.map((item) => (item._id === action.payload._id ? action.payload : item)) };
    case DELETE:
      return { ...state, items: state.items.filter((item) => item._id !== action.payload) };
    default:
      return state;
  }
};