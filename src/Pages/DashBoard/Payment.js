import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L0cMjANMmGDEIxLO3Uow95Tv13D8sSqFIGv8CGUiejPkaYXGrSaHix9tKnhmo4wZYSA5N090WEGje9WOtIgMEyS00JpCWk0x6"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(url, {
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
      <h2 className="text-2xl text-success my-12">Please pay for{id}</h2>
      <div className="flex flex-col gap-4 mx-auto">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-xl bold">Hi {order.name},</h2>
            <p>
              Please pay ${order.toolPrice} for {order.toolName}
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
