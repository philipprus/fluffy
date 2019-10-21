import React from 'react';
import { withFormik, Field, Form, ErrorMessage } from 'formik';
import {CheckboxField} from './orderComponent/CheckboxField';
import axios from 'axios';
import ReactLoading from 'react-loading';

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
                        <p>If you need advice before your order or want to discuss any unique project you want to collaborate, please fill free to contact me:</p>
                  </div>
                  <div className="col-12">
                        {isSubmitting ? <ReactLoading type={"spin"} color={"#000000"} /> : ""}
                        {status.status ? "success": ""}
                        {status.result}
                        <Form>
                              <div className="row">
                                    <div className="col-md-12 mb-3">
                                          <label htmlFor="name">Number status</label>
                                          <div className="input-group">
                                                <Field name="id" type="text" className={ 'form-control' + (errors.id && touched.id ? ' is-invalid' : '')} required />
                                                <ErrorMessage name="id" component="div" className="invalid-feedback" />
                                          </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                          <button type="submit" className="btn btn-primary mr-2 text-center form-control" disabled={isSubmitting}>{isSubmitting ? <ReactLoading type={"bubbles"} color={"#ffffff"} /> : "Send"}</button>
                                    </div>
                              </div>
                        </Form>
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
                        setStatus({status:true, result: res });
                  }
            })
            .catch(({ response }) => {
            const { errors } = response.data;
            setErrors(errors);
            });

          },
        
          displayName: 'CheckOrderStatus',
})(CheckOrderStatus);