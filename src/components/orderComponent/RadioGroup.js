import React from "react";

export const RadioButtonGroup = ({
      value,
      error,
      touched,
      id,
      label,
      className,
      children
    }) => {
    
      return (
        <div>
          <fieldset>
            <legend>{label}</legend>
            {children}
          </fieldset>
        </div>
      );
    };
    