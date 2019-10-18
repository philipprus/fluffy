import React from 'react';
import { withFormik } from "formik";
import axios from 'axios';
import { Field } from 'formik';
import { testimonials } from '../../utils/const';


const StatusOrderForm = (props) => {
    const { errors, touched, handleSubmit } = props;
    
      return (
          <form onSubmit={handleSubmit}>
                    <Field name={'status'} placeholder="Choose canvas position" className={ 'form-control' + (errors.canvasPosition && touched.canvasPosition ? ' is-invalid' : '')}  component="select" >
                                <option value="new">New</option>
                                <option value="inprocess">In Process</option>
                                <option value="not_confirmed">Not confirmed</option>
                                <option value="ready_to_dispatch">Ready to dispatch</option>
                                <option value="in_delivery">In Delivery</option>
                                <option value="complete">Complete</option>

                          </Field>
                  <button type="submit" className="btn btn-success"> V  </button>
                  <div className="btn btn-danger"  onClick={props.handlerCancel}> X  </div>
            </form>
      )
    }
    
    const StatusOrderFormik = withFormik({
                  enableReinitialize:true,
                  mapPropsToValues: (props)=> ({
                    status: props.status,
                    id: props.id,
                  }),
                  handleSubmit: (values, bag) => {
                    axios.put("/api/order", values)
                    .then(function (response) {
                      if(response.status === 200) {
                        const valid = response && response.data;
                        bag.props.hadlerValid(valid);
                      }
                    }).catch(({ response }) => {
                     console.log(response);
                    });
                  }
    })(StatusOrderForm);
    

      const StatusOrder = (props) => {

            const [isEdit, setEdit] = React.useState(false);  
            const handlerCancel = () => {
                  setEdit(false);
            }
            return isEdit ? <StatusOrderFormik id={props.id} handlerCancel={handlerCancel} /> : <span class={`badge p-2 pl-3 pr-3 ${props.status}-color`} onClick={()=>setEdit(true)}>{testimonials[props.status]}</span>
      
      }

export default StatusOrder;
