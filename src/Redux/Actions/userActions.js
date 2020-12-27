import axios from "axios";
export function fetchUserStart() {
  return {
    type: "FETCH_USER_START",
  };
}
export function fetchUserSuccess(users) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users,
  };
}
export function fetchUserFailure(error) {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserStart());
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data;
          dispatch(fetchUserSuccess(users));
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(fetchUserFailure(errorMessage));
        });
    }, 5000);
  };
};
