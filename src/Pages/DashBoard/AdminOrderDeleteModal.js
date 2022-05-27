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
      <input type="checkbox" id="admin-order-delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete
            <span className="text-error"> {toolName}</span> ?
          </h3>

          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-sm btn-error">
              Delete
            </button>
            <label for="admin-order-delete" class="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDeleteModal;
