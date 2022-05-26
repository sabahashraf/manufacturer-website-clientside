import React from "react";
import { toast } from "react-toastify";

const DeleteToolModal = ({ deletingTool, refetch, setDeletingTool }) => {
  const { name, _id } = deletingTool;
  const handleDelete = () => {
    fetch(`http://localhost:5000/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} is deleted`);
          setDeletingTool(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-tool-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete {name}?
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button onClick={handleDelete} className="btn btn-error">
              Delete
            </button>
            <label for="delete-tool-modal" class="btn btn-accent">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteToolModal;
