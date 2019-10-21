import React from 'react';
import { withFormik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { testimonials } from '../utils/const';


const CheckOrderStatus = (props) => {
      const {
            errors,
            touched,
            isSubmitting,
            status
      } = props;
      return (
      <div className="container mt-5">     
            <div className="row">
                  <div className="col-12">
                        <h4 className="mb-3">Check Status Order</h4>
                  </div>
                  <div className="col-12">
                        {/* {status.result} */}
                        <Form>
                              <div className="row">
                                    <div className="col-md-12 mb-3">
                                          <div className="input-group">
                                                <Field placeholder="Number order" name="id" type="text" className={ 'form-control' + (errors.id && touched.id ? ' is-invalid' : '')}  />
                                                <ErrorMessage name="id" component="div" className="invalid-feedback" />
                                          </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                          <button type="submit" className="btn btn-primary mr-2 text-center form-control" disabled={isSubmitting}>{isSubmitting ? <ReactLoading type={"bubbles"} color={"#ffffff"} /> : "Send"}</button>
                                    </div>
                              </div>
                        </Form>
                        {isSubmitting ? <ReactLoading type={"spin"} color={"#000000"} /> : ""}
                        {status ? <h3 className="check-order-status text-center">{testimonials[status]}</h3> : ""}
                  </div>
            </div>
      </div>
      );
}


export default withFormik({
      mapPropsToValues: () => ({
            id:'',
      }),
      validate: (values) => {
            let errors = {};
            if(!values.id) {
                  errors.id = 'Required';
            }
            return errors;
      },
      handleSubmit: (values, { props, setSubmitting, setErrors, setStatus, resetForm }) => {
      
            axios
            .get("/api/order/status/"+values.id)
            .then(res => {
                  if(res.status === 200) {
                        setSubmitting(false);
                        resetForm();
                        setStatus(res.data);
                  }
            })
            .catch(({ response }) => {
            const { errors } = response.data;
            setErrors(errors);
            });

          },
        
          displayName: 'CheckOrderStatus',
})(CheckOrderStatus);