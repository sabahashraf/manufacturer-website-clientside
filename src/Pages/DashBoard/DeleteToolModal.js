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
      <input type="checkbox" id="delete-tool-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {name} ?
          </h3>

          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
            <label
              htmlFor="delete-tool-modal"
              className="btn  btn-sm btn-accent"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteToolModal;
