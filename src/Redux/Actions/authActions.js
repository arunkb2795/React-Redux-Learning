import axios from "axios";
export function authStart() {
  return {
    type: "AUTH_START",
  };
}
export function authSuccess(authData) {
  return {
    type: "AUTH_SUCCESS",
    payload: authData,
  };
}
export function authFailure(error) {
  return {
    type: "AUTH_FAILURE",
    payload: error,
  };
}

export function authLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: "AUTH_LOGOUT",
  };
}

export const logoutCheck = (expiresIn) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expiresIn * 1000);
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch(authLogout());
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        //dispatch(authSuccess(authData));
        dispatch(
          logoutCheck((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};

export const auth = (email, password, history, signUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEc7pjEtmDLHIXxdB2xDlnILm-EvmSXgU";
    if (signUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEc7pjEtmDLHIXxdB2xDlnILm-EvmSXgU";
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        dispatch(authSuccess(response.data));
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(logoutCheck(response.data.expiresIn));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFailure(error.response.data.error.message));
      });
  };
};
