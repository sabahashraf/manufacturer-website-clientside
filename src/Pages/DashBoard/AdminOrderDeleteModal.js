import React from "react";
import { toast } from "react-toastify";

const AdminOrderDeleteModal = ({
  deletingOrder,
  setDeletingOrder,
  refetch,
}) => {
  const { toolName, _id } = deletingOrder;
  const handleDelete = () => {
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Access-Control-Allow-Origin": true,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${toolName} deleted successfully`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="admin-order-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete
            <span className="text-error"> {toolName}</span> ?
          </h3>

          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
            <label htmlFor="admin-order-delete" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDeleteModal;
