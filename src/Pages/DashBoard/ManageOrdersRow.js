import React from "react";
import { toast } from "react-toastify";

const ManageOrdersRow = ({ order, index, refetch, setDeletingOrder }) => {
  const handleUpdate = () => {
    fetch(`http://localhost:5000/order/${order._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.email}</td>
      <td>{order.toolName}</td>
      <td>{order.paid ? "Paid" : "Unpaid"}</td>

      <td>{order.status}</td>
      <td>
        {order.paid && (
          <button
            onClick={handleUpdate}
            className="btn btn-sm btn-success"
            value="Shipped"
          >
            Shipped
          </button>
        )}
      </td>
      <td>
        {!order.paid && (
          <label
            onClick={() => setDeletingOrder(order)}
            for="admin-order-delete"
            class="btn btn-sm btn-error"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default ManageOrdersRow;
