import React from 'react';
import { withFormik, Field, Form, ErrorMessage } from 'formik';
import {CheckboxField} from './orderComponent/CheckboxField';
import axios from 'axios';
import ReactLoading from 'react-loading';

const Contact = (props) => {
      const {
            errors,
            touched,
            isSubmitting,
            status
      } = props;
      return (
      <div className="container mt-5">     
            <div className="row">
                  <div className="col-6">
                        <h4 className="mb-3">Contact form</h4>
                        <p>If you need advice before your order or want to discuss any unique project you want to collaborate, please fill free to contact me:</p>
                  </div>
                  <div className="col-6">
                        {isSubmitting ? <ReactLoading type={"spin"} color={"#000000"} /> : ""}
                        {status ? "success": ""}
                        <Form>
                              <div className="row">
                                    <div className="col-md-12 mb-3">
                                          <label for="name">Name</label>
                                          <div className="input-group">
                                                <Field name="name" type="text" className={ 'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} required />
                                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                          </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                          <label for="phone">Phone</label>
                                          <div className="input-group">
                                                <Field name="phone" type="text" className={ 'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} required />
                                                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                          </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                          <label for="email">E-mail</label>
                                          <div className="input-group">
                                                <Field name="email" type="text" className={ 'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} required />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                          </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                          <label for="comments">Comments</label>
                                          <div className="input-group">
                                                <Field name="comments" component="textarea" className={ 'form-control' + (errors.comments && touched.comments ? ' is-invalid' : '')} required />
                                                <ErrorMessage name="comments" component="div" className="invalid-feedback" />
                                          </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                          <Field component={CheckboxField} id="sendCopy" label="*send copy of my request to e-mail" name="sendCopy" />
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
            name:'',
            phone:'',
            email: '',
            comments: '',
      }),
      validate: (values) => {
            let errors = {};
            if(!values.email) {
                  errors.email = 'Required';
            }
            if(!values.phone) {
                errors.phone = 'Required!';
            }
            if(!values.name) {
                errors.name = 'Required!';
            }
            if(!values.comments) {
                  errors.comments = 'Required!';
              }
            return errors;
      },
      handleSubmit: (values, { props, setSubmitting, setErrors, setStatus, resetForm }) => {
      
            axios
            .post("/api/sendmail/contact", values)
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
        
          displayName: 'ContactForm',
})(Contact);