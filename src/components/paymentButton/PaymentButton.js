import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { consoleLog } from '../../utils/utils';

let PayPalButton =  window.paypal.Buttons.driver('react', { React, ReactDOM });

const CLIENT = {
  sandbox:    'Ad-yr0cyOsvmF4Nus0xa29Kc-oltGZnN1WBKLr7YoUIwktBhvJB88K_OjPPYY0ro6a6aILXyP3SDUJck',
  production: process.env.REACT_PAYPAL_CLIENT_ID
}

const checkGiftCard = async (coupon, discount) => {
  try {
    const response = await axios.get(`/api/giftCard/checked/${coupon}/${discount}`);
    return response;
  } catch (error) {
    throw new Error(`Не удается проверить гифткарт ${coupon}`);
  }
} 

const createNewOrder = async (typeApi, values) => {
    try {
        const response = await axios.post("/api/"+ typeApi, values);
        return response;  
    } catch (error) {
        throw new Error(`Не удается создать новый заказ по адресу ${typeApi}`);
    }
}

const sendMailNewOrder = async (values) => {
    try {
        const response = axios.post("/api/sendmail/order", values);
        return response;
    } catch (error) {
        throw new Error(`Не удается послать письмо о новом заказе ${values['_id']}`);
    }
}

const PaymentButton = (props) => {

    const {total, typeApi, values} = props;
    const {coupon, discount} = values;

    const createOrder = async (data, actions) => {

        if(coupon && discount) {
            const isCheckGiftCard = await checkGiftCard(coupon, discount)
            if(!isCheckGiftCard) {
                consoleLog("Giftcard not valid");
                consoleLog(coupon);
                consoleLog(discount);
                return "";
            } 
        }
        const getNewOrder = await createNewOrder(typeApi, values);

        if(getNewOrder.status !== 200) { return }
        consoleLog(getNewOrder);
        props.setFieldValue('_id', getNewOrder.data[0]["_id"]);
        props.setFieldValue('created', getNewOrder.data[0]["created"]);

        consoleLog(process.env.NODE_ENV);
        if(total === 0 ) {
            consoleLog("total 0");
            props.setFieldValue('status', "new");
            props.setFieldValue('payment_type', 'giftcard');
            props.handlerSubmit({id: values.coupon });
            return getNewOrder;
        }
        consoleLog("send mail");
        const isSendMailNewOrder = await sendMailNewOrder(getNewOrder.data[0]);

        return isSendMailNewOrder.status === 200 &&
            actions.order.create({
                purchase_units: [{
                amount: {
                    currency_code:  process.env.NODE_ENV !== 'production' ? "USD" : "ILS" ,
                    value: total,
                }
                }]
            });

    }

    const onApprove = async (data, actions) => {
        const getApprove = await actions.order.capture().then(function(details) {
            props.setFieldValue('status', "new");
            props.handlerSubmit(details);
        });

        return getApprove;
    }

 
    const onCancel = (data) => {
        console.log('The payment was cancelled!', data)
    }

    if(total === 0 && values.style && values.canvasSize) return (
        <button onClick={createOrder} type="button" className="paypal-button-disabled" >Free </button>
    )

    return (
        <PayPalButton
                    env={ process.env.NODE_ENV !== 'production' ? 'sandbox' : 'production'}
                    client={CLIENT}
                    locale={'en_US'}
                    style={{color: 'black',layout: 'horizontal', 
                    fundingicons: 'false',}}
                    onSuccess={ (data, actions) => console.log(data)}
                    createOrder={ async (data, actions) => await createOrder(data, actions) }
                    onApprove={ async (data, actions) => await onApprove(data, actions)  }
                    onCancel={onCancel}
                    />
    )
  }

export default PaymentButton;