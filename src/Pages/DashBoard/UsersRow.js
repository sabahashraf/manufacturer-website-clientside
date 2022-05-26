import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UsersRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const navigate = useNavigate();
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin ${email}`);
        }
      });
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-sm btn-secondary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-sm btn-error">Remove User</button>
      </td>
    </tr>
  );
};

export default UsersRow;
