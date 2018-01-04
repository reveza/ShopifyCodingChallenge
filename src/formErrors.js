import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <small id="emailHelp" className="form-text invalid" key={i}>Please enter a valid email address</small>
        )
      } else {
        return '';
      }
    })}
  </div>
