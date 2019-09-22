// import React from 'react';
import { withFormik } from 'formik';
import { addDays } from "date-fns";


import axios from 'axios';
import OrderFrom from './orderComponent/OrderForm';

export default withFormik({
      mapPropsToValues: () => ({
            photo:'',
            style:'',
            canvasSize: '',
            canvasPosition: 'vertical',
            comments: '',
            extraPet: 1,

            billingAddress_firstName: '',
            billingAddress_lastName: '',
            billingAddress_email: '',
            billingAddress_phone: '',
            billingAddress_address: '',
            billingAddress_address2: '',
            billingAddress_country: 'Israel',
            billingAddress_zip: '',

            isAnotherShippingAddress: false,

            shippingAddress_firstName: '',
            shippingAddress_lastName: '',
            shippingAddress_email: '',
            shippingAddress_phone: '',
            shippingAddress_address: '',
            shippingAddress_address2: '',
            shippingAddress_country: 'Israel',
            shippingAddress_zip: '',

            isGift: false,
            gitName: '',
            сongratulation: '',
            addCard: false,
            addPaper: false,
            isAgree: false,
            payment_type: 'paypal',
            payment_number: "dsddvwe234",

            dispatch_date: addDays(new Date().setHours(0,0,0,0), 14),

            total: 0

      }),
      validate: (values) => {
          let errors = {};

            const msg_requier = "Required"

        if(values.photo === ""){
            errors.photo = msg_requier;
        }
        if(values.style === "") {
            errors.style = msg_requier;
        }
        if(values.canvasSize === "") {
            errors.canvasSize = msg_requier;
        }
        if(values.canvasPosition === "") {
            errors.canvasPosition = msg_requier;
        }
        if(values.billingAddress_firstName === "") {
            errors.billingAddress_firstName = msg_requier;
        }
        if(values.billingAddress_lastName === "") {
            errors.billingAddress_lastName = msg_requier;
        }
        if(values.billingAddress_email === "") {
            errors.billingAddress_email = msg_requier;
        }
        if(values.billingAddress_phone === "") {
            errors.billingAddress_phone = msg_requier;
        }
        if(values.billingAddress_address === "") {
            errors.billingAddress_address = msg_requier;
        }
        if(values.billingAddress_country === "") {
            errors.billingAddress_country = msg_requier;
        }
        if(values.billingAddress_zip === "") {
            errors.billingAddress_zip = msg_requier;
        }

        if(values.isAnotherShippingAddress && values.shippingAddress_firstName === "") {
            errors.shippingAddress_firstName = msg_requier;
        }
        if(values.isAnotherShippingAddress && values.shippingAddress_lastName === "") {
            errors.shippingAddress_lastName = msg_requier;
        }
        if(values.isAnotherShippingAddress && values.shippingAddress_email === "") {
            errors.shippingAddress_email = msg_requier;
        }
        if(values.isAnotherShippingAddress && values.shippingAddress_phone === "") {
            errors.shippingAddress_phone = msg_requier;
        }
        if(values.isAnotherShippingAddress && values.shippingAddress_address === "") {
            errors.shippingAddress_address = msg_requier;
        }
        if(values.shippingAddress_zip && values.shippingAddress_zip === "") {
            errors.shippingAddress_zip = msg_requier;
        }
          return errors;
      },

   

      handleSubmit: (values, {props, setSubmitting, resetForm, setStatus, setErrors}) => {
            console.log("2");
            function sendOrderMail() { axios.post("/api/sendmail/order", values); }
            function addOrderToDb() { axios.post("/api/order", values); }
            axios.all([sendOrderMail(), addOrderToDb()])
                .then(res => {
                if(res.status === 200) {
                        setSubmitting(false);
                        resetForm();
                        setStatus({success: true});
                    }
                })
                .catch(({ response }) => {
                    const { errors } = response.data;
                    setErrors(errors);
                });

      },
        
          displayName: 'OrderFrom',
})(OrderFrom);