import React from 'react';
import { withFormik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { urlBase } from '../utils/const';


const GiftCardForm = (props) => {

      const [open, setOpen] = React.useState(false);

      const {
            errors,
            touched,
            isSubmitting,
            status,
            handleSubmit
      } = props;
      return (
            <div className="row">
                  <div className="col-12">
      <div className="mb-3">Have a gift card? {open ? <span onClick={()=>setOpen(false)}>Close</span> : <span onClick={()=>setOpen(true)}>Enter</span>}</div>
                  </div>
                  {open ? <div className="col-12">
                              <div className="row">
                                    <div className="col-md-12 mb-3">
                                          <div className="input-group">
                                                <Field placeholder="Gift Card Number" name="giftCardNumber" type="text" className={ 'form-control' + (errors && errors.giftCardNumber && touched && touched.giftCardNumber ? ' is-invalid' : '')}  />
                                                <ErrorMessage name="id" component="div" className="invalid-feedback" />
                                                <div className="input-group-append">
                                                      <button type="button" onClick={()=> handleSubmit()} className="btn btn-primary mr-2 text-center form-control" disabled={isSubmitting}>{isSubmitting ? <ReactLoading type={"bubbles"} color={"#ffffff"} /> : "OK"}</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        {status ? <div className="check-order-status">{status.status}</div> : ""}
                  </div> : ""}
            </div>
      );
}


export default withFormik({
      mapPropsToValues: () => ({
            giftCardNumber:'',
      }),
      validate: (values) => {
            let errors = {};
            if(!values.giftCardNumber) {
                  errors.giftCardNumber = 'Required';
            }
            return errors;
      },
      handleSubmit: (values, { props, setSubmitting, setErrors, setStatus, resetForm }) => {
      
            axios
            .get(urlBase + "api/giftCard/status/"+values.giftCardNumber)
            .then(res => {
                  if(res.status === 200) {
                        setSubmitting(false);
                        setStatus(res.data);
                        props.setDiscount(res.data.amount, values.giftCardNumber)
                  } else {
                        setSubmitting(true);
                        setStatus(undefined);
                        props.setDiscount(0, values.giftCardNumber);
                  }
            })
            .catch(({ response }) => {
                  console.log(response);
            const { errors } = response.data;
            setErrors(errors);
            });

          },
        
          displayName: 'GiftCardForm',
})(GiftCardForm);