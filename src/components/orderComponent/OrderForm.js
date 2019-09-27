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
import ModalBestPet from './ModalBestPet';
import PaymentButton from '../paymentButton/PaymentButton';


const StyckyBoxComponent = (props) => {
    const {errors, values} = props;
     

    return (<StickyBox offsetTop={20} offsetBottom={20} {...props}>
        <div className=" order-md-2 mt-4 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Choise</span>
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
                                    {values.style ? <>Style: {values.style}<br/></> : ""}
                                    {values.canvasPosition ? <>Canvas position: {values.canvasPosition}<br/></> : ""}
                                    {values.canvasSize ? <>Canvas size: {values.canvasSize}<br/></> : ""}
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
                {!(props.isValid && values.isAgree) ? <PayPalDisabled/> : <PaymentButton onSubmit={props.onSubmit} total={summeryOrder(values)} />}
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
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
          <div className="row mb-5">
              <div className="col-md-7 col-sm-6">
              <h4 className="mb-3 mt-3">Order information</h4>
                  <div className="row ">
                      <div className="col-md-12 mb-3">
                          <label htmlFor="photo">Upload photo</label>
                        </div>
                        <div className="col-md-12 text-center">
                          <Upload onChange={handlerUpload} name="photo" id="photo" error={errors.photo} onDelete={handlerDelete} />
                            <ModalBestPet/>
                      </div>
                      <div className="col-md-12 mb-3">
                          <RadioButtonGroup id="style" label="Choose style" value={values.radioGroup} error={errors.radioGroup} touched={touched.radioGroup}>
                              <Field component={RadioImage} width="100px" name="style" id="Colorfull" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
                              <Field component={RadioImage} width="100px" name="style" id="Anime" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
                              <Field component={RadioImage} width="100px" name="style" id="Meme" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
                              <Field component={RadioImage} width="100px" name="style" id="Storyline" label="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" />
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
                              <Field name="billingAddress_firstName" placeholder="First name" type="text" className={ 'form-control' + (errors.billingAddress_firstName && touched.billingAddress_firstName ? ' is-invalid' : '')}  />
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
                            <Field name='billingAddress_country' placeholder="Choose canvas size"  className={ 'form-control' + (errors.billingAddress_zip && touched.billingAddress_zip ? ' is-invalid' : '')} component="select"  >
                                <option value="">Country</option>
                                <option value="Israel">Israel</option>
                            </Field>
                          <ErrorMessage name="country" component="div" className="invalid-feedback" />
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
                    <button type="submit"  className="btn btn-primary mr-2 form-control">Pay</button>

              </div>
              <div className="col-md-4 col-sm-5">
                  <StyckyBoxComponent {...props} onSubmit={handleSubmit}  />
              </div>
          </div>
      </div>
  </form>
      )};


      
const PayPalDisabled = () => <div className="paypal-button-disabled" >
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6JiN4MkY7JiN4MkY7d3d3LnczLm9yZyYjeDJGOzIwMDAmI3gyRjtzdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNyIgZD0iTSAyMC43MDIgOS40NDYgQyAyMC45ODIgNy4zNDcgMjAuNzAyIDUuOTQ3IDE5LjU3OCA0LjU0OCBDIDE4LjM2MSAzLjE0OCAxNi4yMDggMi41NDggMTMuNDkzIDIuNTQ4IEwgNS41MzYgMi41NDggQyA0Ljk3NCAyLjU0OCA0LjUwNiAyLjk0OCA0LjQxMiAzLjU0OCBMIDEuMTM2IDI1Ljc0IEMgMS4wNDIgMjYuMjM5IDEuMzIzIDI2LjYzOSAxLjc5MSAyNi42MzkgTCA2Ljc1MyAyNi42MzkgTCA2LjM3OCAyOC45MzggQyA2LjI4NSAyOS4yMzggNi42NTkgMjkuNjM4IDYuOTQgMjkuNjM4IEwgMTEuMTUzIDI5LjYzOCBDIDExLjYyMSAyOS42MzggMTEuOTk1IDI5LjIzOCAxMi4wODkgMjguNzM5IEwgMTIuMTgyIDI4LjUzOSBMIDEyLjkzMSAyMy4zNDEgTCAxMy4wMjUgMjMuMDQxIEMgMTMuMTE5IDIyLjQ0MSAxMy40OTMgMjIuMTQxIDEzLjk2MSAyMi4xNDEgTCAxNC42MTYgMjIuMTQxIEMgMTguNjQyIDIyLjE0MSAyMS43MzEgMjAuMzQyIDIyLjY2OCAxNS40NDMgQyAyMy4wNDIgMTMuMzQ0IDIyLjg1NSAxMS41NDUgMjEuODI1IDEwLjM0NSBDIDIxLjQ1MSAxMC4wNDYgMjEuMDc2IDkuNjQ2IDIwLjcwMiA5LjQ0NiBMIDIwLjcwMiA5LjQ0NiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNyIgZD0iTSAyMC43MDIgOS40NDYgQyAyMC45ODIgNy4zNDcgMjAuNzAyIDUuOTQ3IDE5LjU3OCA0LjU0OCBDIDE4LjM2MSAzLjE0OCAxNi4yMDggMi41NDggMTMuNDkzIDIuNTQ4IEwgNS41MzYgMi41NDggQyA0Ljk3NCAyLjU0OCA0LjUwNiAyLjk0OCA0LjQxMiAzLjU0OCBMIDEuMTM2IDI1Ljc0IEMgMS4wNDIgMjYuMjM5IDEuMzIzIDI2LjYzOSAxLjc5MSAyNi42MzkgTCA2Ljc1MyAyNi42MzkgTCA3Ljk3IDE4LjM0MiBMIDcuODc2IDE4LjY0MiBDIDguMDYzIDE4LjA0MyA4LjQzOCAxNy42NDMgOS4wOTMgMTcuNjQzIEwgMTEuNDMzIDE3LjY0MyBDIDE2LjAyMSAxNy42NDMgMTkuNTc4IDE1LjY0MyAyMC42MDggOS45NDYgQyAyMC42MDggOS43NDYgMjAuNjA4IDkuNTQ2IDIwLjcwMiA5LjQ0NiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0gOS4yOCA5LjQ0NiBDIDkuMjggOS4xNDYgOS40NjggOC44NDYgOS44NDIgOC42NDYgQyA5LjkzNiA4LjY0NiAxMC4xMjMgOC41NDYgMTAuMjE2IDguNTQ2IEwgMTYuNDg5IDguNTQ2IEMgMTcuMjM4IDguNTQ2IDE3Ljg5MyA4LjY0NiAxOC41NDggOC43NDYgQyAxOC43MzYgOC43NDYgMTguODI5IDguNzQ2IDE5LjExIDguODQ2IEMgMTkuMjA0IDguOTQ2IDE5LjM5MSA4Ljk0NiAxOS41NzggOS4wNDYgQyAxOS42NzIgOS4wNDYgMTkuNjcyIDkuMDQ2IDE5Ljg1OSA5LjE0NiBDIDIwLjE0IDkuMjQ2IDIwLjQyMSA5LjM0NiAyMC43MDIgOS40NDYgQyAyMC45ODIgNy4zNDcgMjAuNzAyIDUuOTQ3IDE5LjU3OCA0LjY0OCBDIDE4LjM2MSAzLjI0OCAxNi4yMDggMi41NDggMTMuNDkzIDIuNTQ4IEwgNS41MzYgMi41NDggQyA0Ljk3NCAyLjU0OCA0LjUwNiAzLjA0OCA0LjQxMiAzLjU0OCBMIDEuMTM2IDI1Ljc0IEMgMS4wNDIgMjYuMjM5IDEuMzIzIDI2LjYzOSAxLjc5MSAyNi42MzkgTCA2Ljc1MyAyNi42MzkgTCA3Ljk3IDE4LjM0MiBMIDkuMjggOS40NDYgWiI+PC9wYXRoPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNDk3NzM3LCAwLCAwLCAwLjUyNjEyLCAxLjEwMTQ0LCAwLjYzODY1NCkiIG9wYWNpdHk9IjAuMiI+PHBhdGggZmlsbD0iIzIzMWYyMCIgZD0iTTM5LjMgMTYuN2MwLjkgMC41IDEuNyAxLjEgMi4zIDEuOCAxIDEuMSAxLjYgMi41IDEuOSA0LjEgMC4zLTMuMi0wLjItNS44LTEuOS03LjgtMC42LTAuNy0xLjMtMS4yLTIuMS0xLjdDMzkuNSAxNC4yIDM5LjUgMTUuNCAzOS4zIDE2Ljd6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzIzMWYyMCIgZD0iTTAuNCA0NS4yTDYuNyA1LjZDNi44IDQuNSA3LjggMy43IDguOSAzLjdoMTZjNS41IDAgOS44IDEuMiAxMi4yIDMuOSAxLjIgMS40IDEuOSAzIDIuMiA0LjggMC40LTMuNi0wLjItNi4xLTIuMi04LjRDMzQuNyAxLjIgMzAuNCAwIDI0LjkgMEg4LjljLTEuMSAwLTIuMSAwLjgtMi4zIDEuOUwwIDQ0LjFDMCA0NC41IDAuMSA0NC45IDAuNCA0NS4yeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMzFmMjAiIGQ9Ik0xMC43IDQ5LjRsLTAuMSAwLjZjLTAuMSAwLjQgMC4xIDAuOCAwLjQgMS4xbDAuMy0xLjdIMTAuN3oiPjwvcGF0aD48L2c+PC9zdmc+" alt="PP" className="paypal-logo paypal-logo-pp paypal-logo-color-white"  />
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg==" alt="PayPal" className="paypal-logo paypal-logo-paypal paypal-logo-color-white" />
    </div>;
    
    

export default OrderFrom;