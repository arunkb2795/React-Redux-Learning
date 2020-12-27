import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Redux/Actions/userActions";
const Main = () => {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      Users List
      {loading ? (
        <h4>Loading....</h4>
      ) : (
        <table>
          <tr style={{ textAlign: "left" }}>
            <th>Name</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>

          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};
export default Main;
