import React from 'react';

const Select = (props) => {
      const [isFocus, setFocus] = React.useState(false);
      const {form: {errors, dirty, touched}, field, name, id, label, type, helper, required} = props;

    const _onFocus = () => {
          if(!isFocus) {
                setFocus(true);
          }
        }
      const  _onBlur = (e) => {
            if (isFocus) {
                  field.onBlur(e);
                setFocus(false);
            };
        }
      return (
            <div class="select-wrap">
                  <select id={id} name={name}  autocomplete={name} className={`form-control  ch-select select-shipping-country  ch-dirty  ${touched[name] && "touched"} ${errors[name] && "invalid"} ${dirty ? "dirty" : "" }`}  data-vv-id={id} aria-required={required ? "true" : "false"} {...field} > 
                        {props.children}
                  </select> 
                  <label htmlFor={name} className="input-label"><span>{label}</span></label> 
                  <div class="ch-select-arrow"></div> 
                  {errors[name] && touched[name] && <div className="text-danger"><span>{errors[name]}</span></div>}
            </div>
                  
      )
}

export default Select;