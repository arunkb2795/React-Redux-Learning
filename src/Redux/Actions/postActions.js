import axios from "../../api/axios";

export function postCreationStart() {
  return {
    type: "POST_CREATION_START",
  };
}
export function postCreationSuccess(id, postData) {
  return {
    type: "POST_CREATION_SUCCESS",
    postId: id,
    postData: postData,
  };
}
export function postCreationFailure(error) {
  return {
    type: "POST_CREATION_FAILURE",
    payload: error,
  };
}

export function postFetchStart() {
  return {
    type: "POST_FETCH_START",
  };
}
export function postFetchSuccess(postData) {
  return {
    type: "POST_FETCH_SUCCESS",
    payload: postData,
  };
}
export function postFetchFailure(error) {
  return {
    type: "POST_FETCH_FAILURE",
    payload: error,
  };
}

export const postCreation = (name, note) => {
  console.log(name, note);
  return (dispatch) => {
    dispatch(postCreationStart());
    const formatData = {
      name: name,
      note: note,
    };
    console.log(formatData);

    axios
      .post("/posts.json", formatData)
      .then((response) => {
        console.log(response.data);
        dispatch(postCreationSuccess(response.data, formatData));
        dispatch(getAllPosts());
      })
      .catch((error) => {
        console.log(error);
        dispatch(postCreationFailure(error));
      });
  };
};

export const getAllPosts = () => {
  return (dispatch) => {
    dispatch(postFetchStart());
    axios
      .get("/posts.json")
      .then((response) => {
        const fetchedPosts = [];
        for (let key in response.data) {
          fetchedPosts.push({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(postFetchSuccess(fetchedPosts));
      })
      .catch((error) => {
        console.log(error);
        dispatch(postFetchFailure(error));
      });
  };
};
