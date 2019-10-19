import React from 'react';

const RadioBorder = ({
      field: { name, value, onChange, onBlur },
      id,
      label,
      className,
      price,
      ...props
    }) => {
      return (
            <li>
                  <label>
                        {/* <input type="radio" checked={id === value} name={name} onBlue={onBlur} onChange={onChange} value={value} />  */}
                        <input
                              name={name}
                              type="radio"
                              value={id} // could be something else for output?
                              checked={id === value}
                              onChange={onChange}
                              onBlur={onBlur}
                        />
                        <span class="ch-custom-radio"></span> 
                        <span class="ch-custom-label"><span>{label}</span></span>
                        {price && <span class="pull-right price"> {price} </span>}
                  </label>
            </li>
      )
}

export default RadioBorder;