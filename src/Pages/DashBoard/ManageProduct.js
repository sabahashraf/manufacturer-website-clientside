import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteToolModal from "./DeleteToolModal";
import ToolRow from "./ToolRow";

const ManageProduct = () => {
  const { deletingTool, setDeletingTool } = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/tool").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-center ">Manage product</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <ToolRow
                key={tool._id}
                tool={tool}
                refetch={refetch}
                index={index + 1}
                setDeletingTool={setDeletingTool}
              ></ToolRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingTool && (
        <DeleteToolModal
          setDeletingTool={setDeletingTool}
          deletingTool={deletingTool}
          refetch={refetch}
        ></DeleteToolModal>
      )}
    </div>
  );
};

export default ManageProduct;
