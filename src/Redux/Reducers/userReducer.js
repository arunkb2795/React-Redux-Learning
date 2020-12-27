const second_initialState = {
  name: "Arun",
  age: 25,
};
const userReducer = (state = second_initialState, action) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "AGE":
      state = {
        ...state,
        age: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default userReducer;
