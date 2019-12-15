import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let PayPalButton =  window.paypal.Buttons.driver('react', { React, ReactDOM });
// let PayPalButton = process.env !== 'production' ? 'button' : window.paypal.Buttons.driver('react', { React, ReactDOM });
// let PayPalButton = 'button';


const PaymentButton = (props) => {
  // const [idOrder, setOrder] = React.useState(null);

  const {total, typeApi, values} = props;

  const client = {
        sandbox:    'Ad-yr0cyOsvmF4Nus0xa29Kc-oltGZnN1WBKLr7YoUIwktBhvJB88K_OjPPYY0ro6a6aILXyP3SDUJck',
        production: 'AWI7kmB4eYwNozXgpxBmZH0lSOA4h1JQhn0c85j-1vvqZgR2cDmH52JpYEmKLZvMY1vanPkKm5abC8j2'
      }

   const createOrder = async (data, actions) => {
    if(values.coupon && values.discount) {
      const checkGiftCard = await axios.get(`/api/giftCard/checked/${values.coupon}/${values.discount}`)
      if(!checkGiftCard) {
        console.log("error giftcard");
        return "";
      } else {
        console.log("true giftcard");
      }
    }
    const res = await axios.post("/api/"+ typeApi, values).then(
      res => {
        console.log(res);
        if(res.status === 200) {
          props.setFieldValue('_id', res.data[0]["_id"]);
          if(total === 0 ) {
            props.setFieldValue('status', "new");
            props.setFieldValue('payment_type', 'giftcard');
            props.handlerSubmit({id: values.coupon });
            return "";
          }
          return axios.post("/api/sendmail/order", values)
          .then(function (response){
              if(response.status === 200) {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      currency_code:  process.env.NODE_ENV !== 'production' ? "USD" : "ILS" ,
                      value: total,
                    }
                  }]
                });
              }
          }).catch(({ response }) => {
              const { errors } = response.data;
              console.log(errors);
          });
         
        }
      })
      .catch(e => console.log(e))

  return res;
    
  }
  const onApprove = (data, actions) => {
    console.log("onApprove");
      return actions.order.capture().then(function(details) {
          props.setFieldValue('status', "new");
          props.handlerSubmit(details);
      });
  }

 
 const onCancel = (data) => {
  console.log('The payment was cancelled!', data)
}

    if(total === 0 && values.style && values.canvasSize) return (
      <button onClick={createOrder} className="paypal-button-disabled" >Free </button>
    )

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