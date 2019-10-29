// import React from 'react';
import { withFormik } from 'formik';
import { addDays } from "date-fns";
import axios from 'axios';
import OrderFrom from './orderComponent/OrderForm';

export default withFormik({
      mapPropsToValues: () => ({
            // photo:'',
            photo: process.env.NODE_ENV !== "production" ? [{"secure_url":"https://res.cloudinary.com/dxxwojaqv/image/upload/v1569943291/dogrkvyyxuyczyl89lgm.png","public_id":"dogrkvyyxuyczyl89lgm"}] : "",
            style:'Colorfull',
            canvasSize: '24x30',
            canvasPosition: 'horizontal',
            comments: '',
            extraPet: 1,

            billingAddress_firstName: 'Philipp',
            billingAddress_lastName: 'Philipp',
            billingAddress_email: 'prus@beinisrael.com',
            billingAddress_phone: '+972546128689',
            billingAddress_address: 'Zamenhof 7',
            billingAddress_address2: '9',
            billingAddress_country: 'Israel',
            billingAddress_zip: '5947320',

            isSameShippingAddress: "true",
            status: "not paid",
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
            shipping_type: 'pickup',
            payment_number: "",
            order_total: 0,

            dispatch_date: addDays(new Date().setHours(0,0,0,0), 14),
      }),
      validate: (values) => {
          let errors = {};

        const msg_requier = "Required";

        if(!values.photo){
            errors.photo = msg_requier;
        }
        if(!values.style) {
            errors.style = msg_requier;
        }
        if(!values.canvasSize) {
            errors.canvasSize = msg_requier;
        }
        if(!values.canvasPosition) {
            errors.canvasPosition = msg_requier;
        }
        if(!values.billingAddress_firstName) {
            errors.billingAddress_firstName = msg_requier;
        }
        if(!values.billingAddress_lastName) {
            errors.billingAddress_lastName = msg_requier;
        }
        if(!values.billingAddress_email) {
            errors.billingAddress_email = msg_requier;
        }
        if(!values.billingAddress_phone) {
            errors.billingAddress_phone = msg_requier;
        }
        if(!values.billingAddress_address) {
            errors.billingAddress_address = msg_requier;
        }
        if(!values.billingAddress_country) {
            errors.billingAddress_country = msg_requier;
        }
        if(!values.billingAddress_zip) {
            errors.billingAddress_zip = msg_requier;
        }

        if(values.isSameShippingAddress !== "true" && !values.shippingAddress_firstName) {
            errors.shippingAddress_firstName = msg_requier;
        }
        if(values.isSameShippingAddress !== "true" && !values.shippingAddress_lastName) {
            errors.shippingAddress_lastName = msg_requier;
        }
        if(values.isSameShippingAddress !== "true" && !values.shippingAddress_email) {
            errors.shippingAddress_email = msg_requier;
        }
        if(values.isSameShippingAddress !== "true" && !values.shippingAddress_phone) {
            errors.shippingAddress_phone = msg_requier;
        }
        if(values.isSameShippingAddress !== "true" && !values.shippingAddress_address) {
            errors.shippingAddress_address = msg_requier;
        }
        if(values.isSameShippingAddress !== "true" && !values.shippingAddress_zip) {
            errors.shippingAddress_zip = msg_requier;
        }

        if(!values.shipping_type) {
            errors.shipping_type = msg_requier;
        }

          return errors;
      },

   

      handleSubmit: async (values, {props, setSubmitting, resetForm, setStatus, setErrors}) =>  {
            setStatus("loading");
           
            axios.put("/api/order", values)
              .then(function (response) {
                if(response.status === 200) {
                    axios.post("/api/sendmail/order", values)
                        .then(function (response){
                            if(response.status === 200) {
                                setSubmitting(false);
                                resetForm();
                                setStatus("ide");
                            }
                        }).catch(({ response }) => {
                            const { errors } = response.data;
                           console.log(errors);

                        });
                }
              }).catch(({ response }) => {
                  console.log(response);
            });
         
      },
        
          displayName: 'OrderFrom',
})(OrderFrom);