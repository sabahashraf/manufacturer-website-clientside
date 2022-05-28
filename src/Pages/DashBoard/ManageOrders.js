import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AdminOrderDeleteModal from "./AdminOrderDeleteModal";
import ManageOrdersRow from "./ManageOrdersRow";

const ManageOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary my-12 text-center">
        Manage Customer Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer Email</th>
              <th>Ordered Tool</th>
              <th>Payment Status</th>

              <th>Shipment Status</th>
              <th>Update Shipment Status</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrdersRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              ></ManageOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <AdminOrderDeleteModal
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
          refetch={refetch}
        ></AdminOrderDeleteModal>
      )}
    </div>
  );
};

export default ManageOrders;
