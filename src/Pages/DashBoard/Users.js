import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
            {/* <th>Favorite Color</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UsersRow
              key={user._id}
              index={index + 1}
              user={user}
              refetch={refetch}
            ></UsersRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
