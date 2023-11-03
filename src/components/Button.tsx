import { FC, ReactEventHandler } from 'react';
import './Button.css';

interface ButtonProps {
   onClick: ReactEventHandler;
   buttonText: string;
}

const Button: FC<ButtonProps> = (props) => {
   return (
      <button className="buttonStyle" onClick={props.onClick}>
         {props.buttonText}
      </button>
   );
}

export default Button;
