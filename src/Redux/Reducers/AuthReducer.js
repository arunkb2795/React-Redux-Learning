const initialState = {
  loading: false,
  authData: {},
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "AUTH_SUCCESS":
      state = {
        ...state,
        loading: false,
        authData: action.payload,
        error: null,
      };
      break;
    case "AUTH_FAILURE":
      state = {
        ...state,
        loading: false,
        authData: {},
        error: action.payload,
      };
      break;
    case "AUTH_LOGOUT":
      state = {
        ...state,
        authData: {},
      };
      break;
    default:
      return state;
  }
  return state;
};

export default authReducer;
