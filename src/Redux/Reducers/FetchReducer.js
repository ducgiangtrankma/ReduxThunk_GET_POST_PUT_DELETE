import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCEESS,
  FETCH_DATA_FAIL,
  ADD_DATA_SUCCEESS,
  ADD_DATA_FAIL,
  DELETE_DATA_SUCCEESS,
  EDIT_DATA_SUCCEESS,
} from '../Actions/actionType';

const initialState = {
  loading: false,
  data: [],
  error: null,
};
export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCEESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_DATA_SUCCEESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ADD_DATA_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_DATA_SUCCEESS:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload),
      };
    case EDIT_DATA_SUCCEESS:
      return {
        ...state,
        data: state.data.map(e =>
          e.id === action.payload.id
            ? {
                ...e,
                name: action.payload.category.name,
                color: action.payload.category.color,
              }
            : e,
        ),
      };
    default:
      return state;
  }
}
