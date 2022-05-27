import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const CheckoutForm = ({ order }) => {
  const { toolPrice, name, address, phone, email, _id } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [processing, setprocessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ toolPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [toolPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setprocessing(true);
    //Confirm Card Payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
            address: address,
            phone: phone,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);

      setprocessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Thank you! your payment is completed!");
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:5000/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setprocessing(false);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-success"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p>
          <small className="text-red-500">{cardError}</small>
        </p>
      )}
      {success && (
        <div className="text-green-500">
          <p>
            <small>{success}</small>
          </p>
          <p>
            <small>
              Your transaction Id:
              <span className="text-orange-500 font-bold">
                {transactionId}{" "}
              </span>
            </small>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
