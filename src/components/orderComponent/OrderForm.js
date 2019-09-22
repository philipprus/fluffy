import React from 'react';
import { Field, ErrorMessage } from 'formik';
import {RadioButtonGroup} from './RadioGroup';
import {RadioImage} from './RadioImage';
import StickyBox from "react-sticky-box";
import Upload from '../orderComponent/Upload';
import ShippingAddress from './ShipingComponent';
import {CheckboxField} from './CheckboxField';
import {canvasSizeList} from '../common/priceTable';
import GiftInformation from './GiftInformation';
import { summeryOrder, isDateInThisWeek, isDateInAfterWeek } from '../../utils/payment'
import "../../css/OrderForm.css";
import DatePicker from "./DatePicker";
import moment from 'moment';
import PaymentButton from '../paymentButton/PaymentButton';

const StyckyBoxComponent = (props) => {
    const {errors, values} = props;
     

    return (<StickyBox offsetTop={20} offsetBottom={20} {...props}>
        <div className=" order-md-2 mt-4 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your choose</span>
        </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <ul className="list-unstyled checklist-container">
                        <li className="checklist-item">
                            <div className="mb-2">
                                <h6 className={`my-0 checklist-agree ${ values.photo &&
          values.style &&
          values.canvasSize &&
          values.canvasPosition &&
          values.extraPet ? "checked": ""}`}>Order information</h6>
                            </div>
                        </li>
                        <li className="checklist-item">
                            <div className="mb-2">
                                <h6 className={`my-0 checklist-agree ${values.billingAddress_firstName && 
                values.billingAddress_lastName && 
                    values.billingAddress_email && 
                    values.billingAddress_phone && 
                    values.billingAddress_address && 
                    values.billingAddress_country && 
                    values.billingAddress_zip ? "checked": ""}`}>Billing information</h6>
                            </div>
                        </li>
                        {
                            values.isAnotherShippingAddress ? 
                            <li className="checklist-item">
                            <div className="mb-2">
                                <h6 className={`my-0 checklist-agree ${values.shippingAddress_firstName && 
                values.shippingAddress_lastName && 
                    values.shippingAddress_address && 
                    values.shippingAddress_country && 
                    values.shippingAddress_zip ? "checked": ""}`}>Shipping information</h6>
                            </div>
                        </li> : ""
                          }
                        {
                            values.isGift ?  <li className="checklist-item">
                            <div className="mb-2">
                                <h6 className={`my-0 checklist-agree checked`}>Gift information</h6>
                    {values.addCard ? <>Add Card: +5$<br/></> : ""}
                    {values.addPaper ? <>Add Paper: +5$<br/></> : ""}
                            </div>
                        </li> : ""
                        }
                       
                   
                        <li className="checklist-item">
                            <div className="mb-2">
                                <h6 className={`my-0 checklist-agree ${values.dispatch_date ? "checked": ""}`}>Dispatch date:  {moment(values.dispatch_date).format("DD/MM/YYYY")}</h6>
                                {isDateInThisWeek(values.dispatch_date) ? "+ 100% (extra fast)" : isDateInAfterWeek(values.dispatch_date) ? "+ 50% (fast)" : "Free"}
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (ILS)</span>
                    <strong>{summeryOrder(values)}</strong>

                </li>
            </ul>
            <div className="mb-2 mt-2">
                <Field component={CheckboxField} id="isAgree" label="Agree?" name="isAgree" />
            </div>
            <div className="form-group">
                {/* <PaymentButton/> */}
               <PaymentButton total={summeryOrder(values)} />
                <button type="submit"  disabled={errors} className="btn btn-primary mr-2 form-control">Pay</button>
            </div>
        </div>
    </StickyBox>);
}

const OrderFrom = (props) => {
    const { errors, touched, values, setFieldValue, handleSubmit } = props;
 
    
    const handlerUpload = (path) => {
        setFieldValue('photo', path);
      }

      const handlerDelete = () => {
       setFieldValue('photo', '');
     }
 
 
      return (
    <form  onSubmit={handleSubmit}>
      <div className="container mt-5">
          <div className="row mb-5">
              <div className="col-md-7 col-sm-6">
              <h4 className="mb-3 mt-3">Order information</h4>
                  <div className="row">
                      <div className="col-md-12 mb-3">
                          <label htmlFor="photo">Upload photo</label>
                      <Upload onChange={handlerUpload} name="photo" id="photo" error={errors.photo} onDelete={handlerDelete} />
                      Tip photo dog
                      </div>
                      <div className="col-md-12 mb-3">
                          <RadioButtonGroup id="style" label="Stylies" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                              <Field component={RadioImage} width="100px" name="style" id="meme" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
                              <Field component={RadioImage} width="100px" name="style" id="mastihin" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
                              <Field component={RadioImage} width="100px" name="style" id="vosrozhdenie" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
                          </RadioButtonGroup>
                      </div>

                      <div className="col-md-6 mb-3">
                          <label htmlFor="canvasSize">Canvas size</label>
                            <Field component="select" name="canvasSize"   placeholder="Choose canvas size"  className={ 'form-control' + (errors.canvasSize && touched.canvasSize ? ' is-invalid' : '')}>
                                {/* <option value="">Choose canvas size</option>    */}
                                {canvasSizeList.map( (canvas,index) => <option value={canvas.value} key={index}>{canvas.label}</option> )}                             
                                {/* <option value="20x40">20 x 40 cm</option> */}
                                {/* <option value="30x40">30 x 40 cm</option> */}
                            </Field>
                          <ErrorMessage name="canvasSize" component="div" className="invalid-feedback" />
                      </div>
                      <div className="col-md-6 mb-3">
                          <label htmlFor="canvasPosition">Canvas position</label>
                          <Field name={'canvasPosition'} placeholder="Choose canvas position" className={ 'form-control' + (errors.canvasPosition && touched.canvasPosition ? ' is-invalid' : '')}  component="select" >
                                <option value="">Choose canvas position</option>
                                <option value="horizontal">Horizontal</option>
                                <option value="vertical">Vertical</option>

                          </Field>
                          <ErrorMessage name="canvasPosition" component="div" className="invalid-feedback" />
                      </div>
                      <div className="col-md-12 mb-3">
                          <label htmlFor="comments">Comments</label>
                          <Field name="comments" component="textarea" className={ 'form-control' + (errors.comments && touched.comments ? ' is-invalid' : '')} />
                          <ErrorMessage name="comments" component="div" className="invalid-feedback" />
                      </div>
                      <div className="col-md-12 mb-3">
                          <label htmlFor="extraPet">Amount Characters</label>
                          <Field name="extraPet" type="number" min={1} value={values.extraPet} className={ 'form-control' + (errors.extraPet && touched.extraPet ? ' is-invalid' : '')} />
                          <ErrorMessage name="extraPet" component="div" className="invalid-feedback" />
                      </div>

  
                  </div>
                  <h4 className="mb-3 mt-3">Billing information</h4>
                  <div className="row">
                      <div className="col-md-6 mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_firstName" placeholder="First name" type="text" className={ 'form-control' + (errors.billingAddress_firstName && touched.billingAddress_firstName ? ' is-invalid' : '')} required />
                              <ErrorMessage name="billingAddress_firstName" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                      <div className="col-md-6 mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_lastName" placeholder="Last name" type="text" className={ 'form-control' + (errors.billingAddress_lastName && touched.billingAddress_lastName ? ' is-invalid' : '')} />
                              <ErrorMessage name="billingAddress_lastName" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                      <div className="col-md-6 mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_email" placeholder="Email" type="text" className={ 'form-control' + (errors.billingAddress_email && touched.billingAddress_email ? ' is-invalid' : '')} />
                              <ErrorMessage name="billingAddress_email" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                      <div className="col-md-6  mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_phone" type="text" placeholder="Phone" className={ 'form-control' + (errors.billingAddress_phone && touched.billingAddress_phone ? ' is-invalid' : '')} />
                              <ErrorMessage name="billingAddress_phone" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                      <div className="col-12 mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_address" placeholder="Address" type="text" className={ 'form-control' + (errors.billingAddress_address && touched.billingAddress_address ? ' is-invalid' : '')} />
                              <ErrorMessage name="billingAddress_address" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                    
                      <div className="col-12 mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_address2" placeholder="Address 2" type="text" className={ 'form-control' + (errors.billingAddress_address2 && touched.billingAddress_address2 ? ' is-invalid' : '')} />
                              <ErrorMessage name="billingAddress_address2" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6 mb-3">
                            <Field name='billingAddress_country' placeholder="Choose canvas size"  className={ 'form-control' + (errors.billingAddress_zip && touched.billingAddress_zip ? ' is-invalid' : '')} component="select" required >
                                <option value="">Country</option>
                                <option value="Israel">Israel</option>
                            </Field>
                          <ErrorMessage name="country" component="div" className="invalid-feedback" />
                          <div className="invalid-feedback">
                              Please select a valid country.
                          </div>
                      </div>
                      <div className="col-md-6 mb-3">
                          <div className="input-group">
                              <Field name="billingAddress_zip" placeholder="Zip" type="text" className={ 'form-control' + (errors.billingAddress_zip && touched.billingAddress_zip ? ' is-invalid' : '')} />
                              <ErrorMessage name="billingAddress_zip" component="div" className="invalid-feedback" />
                          </div>
                      </div>
                  </div>
                  <hr className="mb-4" />
                  <Field component={CheckboxField} id="isAnotherShippingAddress" label="Shipping address is not the same as my billing address" name="isAnotherShippingAddress" />
                  {values.isAnotherShippingAddress ? <ShippingAddress {...props} /> : <></>}
                  
                  <Field component={CheckboxField} id="isGift" label="is Gift?" name="isGift" />
                  {values.isGift ? <GiftInformation {...props} /> : <></>}
                  <h4 className="mb-3 mt-3">Dispatch date</h4>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                           This dispatch date, if you order today. 
                           Your can change date. After 
                           <Field component={DatePicker} type="date" className={ 'form-control' + (errors.dispatch_date && touched.dispatch_date ? ' is-invalid' : '')} name="dispatch_date" id="dispatch_date" />
                        </div>
                    </div>

              </div>
              <div className="col-md-4 col-sm-5">
                  <StyckyBoxComponent {...props}  />
              </div>
          </div>
      </div>
  </form>
      )};


export default OrderFrom;