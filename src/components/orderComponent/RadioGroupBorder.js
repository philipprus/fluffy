import React from 'react';
import '../../css/RadioGroupBorder.css';

const RadioGroupBorder = (props) => {
      return (
            <ul class="bordered-ul with-hover" id={props.id}>
                  {props.children}
            </ul>
      )
};


export default RadioGroupBorder;
