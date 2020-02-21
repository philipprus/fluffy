import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { consoleLog } from '../../utils/utils';
import { PayPalButton } from 'react-paypal-button-v2';
// let PayPalButton =  window.paypal.Buttons.driver('react', { React, ReactDOM });


const checkGiftCard = async (coupon, discount) => {
  try {
    const response = await axios.get(`/api/giftCard/checked/${coupon}/${discount}`);
    return response;
  } catch (error) {
    throw new Error(`Не удается проверить гифткарт ${coupon}`);
  }
};

const createNewOrder = async (typeApi, values) => {
  try {
    const response = await axios.post('/api/' + typeApi, values);
    return response;
  } catch (error) {
    throw new Error(`Не удается создать новый заказ по адресу ${typeApi}`);
  }
};

const sendMailNewOrder = async values => {
  try {
    const response = axios.post('/api/sendmail/order', values);
    return response;
  } catch (error) {
    throw new Error(`Не удается послать письмо о новом заказе ${values['_id']}`);
  }
};

const PaymentButton = props => {
  const { total, typeApi, values } = props;
  const { coupon, discount } = values;
  const [showLoading, setShowLoading] = React.useState(true);

  const createOrder = async (data, actions) => {
    if (coupon && discount) {
      const isCheckGiftCard = await checkGiftCard(coupon, discount);
      if (!isCheckGiftCard) {
        consoleLog('Giftcard not valid');
        consoleLog(coupon);
        consoleLog(discount);
        return '';
      }
    }
    const getNewOrder = await createNewOrder(typeApi, values);

    if (getNewOrder.status !== 200) {
      return;
    }

    consoleLog(getNewOrder);
    if(typeApi === "giftCard"){
        props.setFieldValue('coupon', getNewOrder.data[0]['coupon']);
    }
    props.setFieldValue('_id', getNewOrder.data[0]['_id']);
    props.setFieldValue('created', getNewOrder.data[0]['created']);

    consoleLog(process.env.NODE_ENV);
    if (total === 0) {
      consoleLog('total 0');
      props.setFieldValue('status', 'new');
      props.setFieldValue('payment_type', 'giftcard');
      props.handlerSubmit({ id: values.coupon });
      return getNewOrder;
    }
    consoleLog('send mail');
    const isSendMailNewOrder = await sendMailNewOrder(getNewOrder.data[0]);

    return (
      isSendMailNewOrder.status === 200 &&
      actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: process.env.NODE_ENV !== 'production' ? 'USD' : 'ILS',
              value: total,
            },
          },
        ],
      })
    );
  };

//   const onApprove = async (data, actions) => {
//     const getApprove = await actions.order.capture().then(function(details) {
//       props.setFieldValue('status', 'new');
//       props.handlerSubmit(details);
//     });

//     return getApprove;
//   };

  const onSuccess = async (details, data) => {
    props.setFieldValue('status', 'new');
    props.handlerSubmit(details);
  } 

  const onCancel = data => {
    console.log('The payment was cancelled!', data);
  };

  if (total === 0 && values.style && values.canvasSize)
    return (
      <button onClick={createOrder} type="button" className="paypal-button-disabled">
        Free{' '}
      </button>
    );

  return (
    <>
      {showLoading ? <span>Loading Button...</span> : null}
      <PayPalButton
        amount={values.total}
        options={{
          clientId: process.env.NODE_ENV === 'production' ? "AfeSft36N7VWXm7yv1TKP-8ijLA_x9nomTp5ni_I3snCgtLq2eZBRrbQUiYVJkDs8sbZrl1VtURd7ZSx" : 'sb',
          currency: process.env.NODE_ENV === 'production' ? "ILS" : 'USD',
          commit: true,
          locale: 'en_US',
        }}
        onButtonReady={() => setShowLoading(false)}
        style={{ color: 'black', layout: 'horizontal', fundingicons: 'false' }}
        onSuccess={onSuccess}
        createOrder={async (data, actions) => await createOrder(data, actions)}
        // onApprove={async (data, actions) => await onApprove(data, actions)}
        onCancel={onCancel}
      />
    </>
  );
};

export default PaymentButton;
