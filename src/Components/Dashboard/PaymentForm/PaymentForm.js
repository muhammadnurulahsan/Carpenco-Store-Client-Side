import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";





const PaymentForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice, customer, customerEmail, _id } = order;
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice) {
      fetch(`https://carpenco-store.herokuapp.com/create-payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ totalPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setPaymentSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customer,
            email: customerEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setPaymentSuccess("Your Payment is Successfully Completed");
      console.log(paymentSuccess);
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`https://carpenco-store.herokuapp.com/orders/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            const status = {
              orderStatus: "Completed",
              paymentStatus: "Paid",
            };
            fetch(`https://carpenco-store.herokuapp.com/status/${_id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(status),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  swal("Successfully! Order has been Completed", {
                    icon: "success",
                  });
                  navigate("/dashboard/my-orders");
                }
              });
          }
        });
    }
  };

  return (
    <div className="">
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
          type="submit"
          className="btn btn-outline btn-success btn-sm mt-6"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      <div className="w-full h-full grid place-content-center relative">
        <div className="text-center pt-5">
          {cardError && <p className="text-red-500 pt-5">{cardError}</p>}
          {paymentSuccess && (
            <div>
              <p className="mb-4 text-green-500">{paymentSuccess}</p>
              <p>
                Your transaction Id:{" "}
                <span className="text-bold">{transactionId}</span>
              </p>
            </div>
          )}
          <div className="mt-6 flex space-x-4 justify-center items-center">
            <Link className="btn btn-outline btn-sm" to="/">
              Go To Home
            </Link>
            <Link
              className="btn btn-sm btn-outline btn-primary"
              to="/dashboard/my-orders"
            >
              My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
