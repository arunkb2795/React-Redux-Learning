import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../Redux/Actions/userActions";
const Main = () => {
  const name = useSelector((state) => state.userReducer.name);
  const dispatch = useDispatch();
  return (
    <div>
      Hello Main : -{name}
      <button onClick={() => dispatch(setName("Luke"))}>ChangeName</button>
    </div>
  );
};
export default Main;
