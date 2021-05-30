import { ITEM, LOADING, ERROR } from '../types/itemTypes';

const INITIAL_STATE = {
  item: {},
  loading: false,
  error: '',
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: '',
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default: return state;
  }
};

export default itemReducer;
