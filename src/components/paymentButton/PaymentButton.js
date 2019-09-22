import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

const PaymentButton = (props) => {
    return (
      <PayPalButton
        // amount="0.01"
        amount={props.total}
        currency="ILS"
        options={{clientId: "sb"}}
        catchError={(err)=> {alert(err);}}
        onCancel={(data)=> {alert(data);}}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
    );
  }

  export default PaymentButton;