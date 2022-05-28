import React, { useState } from "react";
import { toast } from "react-toastify";

const ToolRow = ({ tool, index, setDeletingTool }) => {
  const { name, img, availableQty, price } = tool;

  return (
    <tr>
      <th>{index}</th>
      <td>{name}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{availableQty}</td>
      <td>${price}</td>
      <td>
        <label
          onClick={() => setDeletingTool(tool)}
          htmlFor="delete-tool-modal"
          className="btn btn-sm btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ToolRow;
