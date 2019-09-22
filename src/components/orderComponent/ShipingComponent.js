
import React from 'react';
import { Field, ErrorMessage } from 'formik';


const ShippingAddress = (props) => {

      const {errors, touched} = props;
   
      return (
          <>
              <div className="mb-4" />
              <h4 className="mb-3">Shipping information</h4>
              <div className="row">
                  <div className="col-md-6 mb-3">
                      <label for="shippingAddress_firstName">First name</label>
                      <div className="input-group">
                          <Field name="shippingAddress_firstName" type="text" className={ 'form-control' + (errors.shippingAddress_firstName && touched.shippingAddress_firstName ? ' is-invalid' : '')} required />
                          <ErrorMessage name="shippingAddress_firstName" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                  <div className="col-md-6 mb-3">
                      <label for="shippingAddress_secondName">Second name</label>
                      <div className="input-group">
                          <Field name="shippingAddress_secondName" type="text" className={ 'form-control' + (errors.shippingAddress_secondName && touched.shippingAddress_secondName ? ' is-invalid' : '')} />
                          <ErrorMessage name="shippingAddress_secondName" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                  <div className="col-12 mb-3">
                      <label for="shippingAddress_address">Address</label>
                      <div className="input-group">
                          <Field name="shippingAddress_address" type="text" className={ 'form-control' + (errors.shippingAddress_address && touched.shippingAddress_address ? ' is-invalid' : '')} />
                          <ErrorMessage name="shippingAddress_address" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                
                  <div className="col-12 mb-3">
                      <label for="shippingAddress_address2">Address 2</label>
                      <div className="input-group">
                          <Field name="shippingAddress_address2" type="text" className={ 'form-control' + (errors.shippingAddress_address2 && touched.shippingAddress_address2 ? ' is-invalid' : '')} />
                          <ErrorMessage name="shippingAddress_address2" component="div" className="invalid-feedback" />
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6  mb-3">
                      <label for="shippingAddress_country">Country</label>
                      <Field name='shippingAddress_country' placeholder="Choose canvas size"  className={ 'form-control' + (errors.shippingAddress_country && touched.shippingAddress_country ? ' is-invalid' : '')} component="select" required >
                                <option value="">Choose county</option>
                                <option value="israel">Israel</option>

                            </Field>
                      <ErrorMessage name="shippingAddress_country" component="div" className="invalid-feedback" />
                      <div className="invalid-feedback">
                          Please select a valid country.
                      </div>
                  </div>
                  <div className="col-md-6 mb-3">
                      <label for="shippingAddress_zip">Zip</label>
                      <div className="input-group">
                          <Field name="shippingAddress_zip" type="text" className={ 'form-control' + (errors.shippingAddress_zip && touched.shippingAddress_zip ? ' is-invalid' : '')} />
                          <ErrorMessage name="shippingAddress_zip" component="div" className="invalid-feedback" />
                      </div>
                  </div>
              </div>
              </>
          )
      }

export default ShippingAddress;