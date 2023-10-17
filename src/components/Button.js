import React from 'react';
import "./Button.css";

function Button(click) {
   return (
      <button className="buttonStyle" onClick={click.onClick}>
         {click.buttonText}
      </button>
   );
}

export default Button;
