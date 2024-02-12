
import { useLoaderData } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const Payment = () => { 
  const singleUser=useLoaderData()
    const stripePromise=loadStripe(import.meta.env.VITE_REACT_PAYMENT_KEY)

    return (
        <Elements stripe={stripePromise}>
        <Checkout singleUser={singleUser} />
      </Elements>
    );
};

export default Payment;