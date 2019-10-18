import React from 'react';

const Input = (props) => {
      return (
            <div className="input-wrap">
                  <input data-vv-validate-on="change" name="email" autocomplete="email" type="email" id="customer_email" className="form-control ch-input input-email" data-vv-id="1" aria-required="true" aria-invalid="false" /> 
                  <label for="customer_email" className="input-label"><span>Email</span></label> 
                  <div className="text-danger">
                        <span></span>
                  </div>
            </div> 
      )
}

export default Input;