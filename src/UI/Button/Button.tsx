import React, { ReactNode } from 'react';
import './Button.scss';

type ButtonPropsType = {
  children?: ReactNode;
};

const Button: React.FC<ButtonPropsType> = ({ children }) => {
  return (
    <button className="button">
      <span className="button__title">{children}</span>
    </button>
  );
};

export default Button;
