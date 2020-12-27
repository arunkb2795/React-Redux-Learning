const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_START":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "FETCH_USER_SUCCESS":
      state = {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
      break;
    case "FETCH_USER_FAILURE":
      state = {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default userReducer;
