import React, {FC} from 'react';
import {ButtonProps} from './Button.props';
import s from './Button.module.css';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({children, appearance, className, ...props}) => {
  return (
    <button
    className={cn(s.button, className, {
      [s.primary]: appearance === 'primary',
      [s.ghost]: appearance === 'ghost',
    })}
    {...props}
    >
      {children}
    </button>
  );
};

export {Button};