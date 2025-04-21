import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import  {FormContainer,PaymentFormContainer, PaymentButton  } from './payment-form.styles.jsx';
import {Button_TYPE} from "../button/button";


import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setisProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        console.log("Clicked")
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }
         
        setisProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payments-intent', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res => res.json());

        const {paymentIntent: {client_secret}} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName: 'guest',
                    }
                }
            });
        console.log(response);
        setisProcessingPayment(false);

        if(paymentResult.error){
            alert("Error ", paymentResult.error)
        }else{
            if(paymentResult.paymentIntent.status==='succeeded'){
                alert("Payment Successfull")
            }
        }


    }

    return(
        <PaymentFormContainer onSubmit={paymentHandler}>
        <FormContainer>
        <h2>Credit Card Payment</h2>
            <CardElement/>
            <PaymentButton  isLoading={isProcessingPayment} type="submit" buttonType={Button_TYPE.inverted}>Pay now</PaymentButton>
        </FormContainer>
        </PaymentFormContainer>

    )
}

export default PaymentForm;