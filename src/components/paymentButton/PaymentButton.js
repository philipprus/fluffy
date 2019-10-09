import React from 'react';
import ReactDOM from 'react-dom';

let PayPalButton = process.env !== 'production' ? 'button' : window.paypal.Buttons.driver('react', { React, ReactDOM });
// let PayPalButton = 'button';


const PaymentButton = (props) => {


  const client = {
        sandbox:    'Ad-yr0cyOsvmF4Nus0xa29Kc-oltGZnN1WBKLr7YoUIwktBhvJB88K_OjPPYY0ro6a6aILXyP3SDUJck',
        production: 'AWI7kmB4eYwNozXgpxBmZH0lSOA4h1JQhn0c85j-1vvqZgR2cDmH52JpYEmKLZvMY1vanPkKm5abC8j2'
      }

   const createOrder = (data, actions) => {
      return actions.order.create({
          purchase_units: [{
              amount: {
                currency_code:  process.env.NODE_ENV !== 'production' ? "USD" : "ILS" ,
                value: props.total,
              }
          }]
      });
  }
  const onApprove = (data, actions) => {
      return actions.order.capture().then(function(details) {
          props.handlerSubmit(details);
          // props.handlerSubmit(details);
      });
  }

 
 const onCancel = (data) => {
  console.log('The payment was cancelled!', data)
}

    return (
        <PayPalButton
                    env={ process.env.NODE_ENV !== 'production' ? 'sandbox' : 'production'}
                    client={client}
                    locale={'en_US'}
                    style={{color: 'black',layout: 'horizontal', 
                    fundingicons: 'false',}}
                    onSuccess={ (data, actions) => console.log(data)}
                    createOrder={ (data, actions) => createOrder(data, actions) }
                    onApprove={ (data, actions) => onApprove(data, actions)  }
                    onCancel={onCancel}
                    />
    )
  }

export default PaymentButton;