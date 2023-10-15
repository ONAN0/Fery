import React from 'react';

const buttonStyle = {
   backgroundColor: 'blue',
   color: 'white',
   padding: '10px 20px',
   border: 'none',
   borderRadius: '5px',
   cursor: 'pointer',
};

const Button = () => {
   const handleClick = () => {
      console.log('Diki za prácu na výkend, cením.');
   };

   return (
      <button style={buttonStyle} onClick={handleClick}>
         Stlač ma
      </button>
   );
};

export default Button;
