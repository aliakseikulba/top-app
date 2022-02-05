import React, {FC} from 'react';
import {ButtonProps} from './Button.props';
import s from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg'

const Button: FC<ButtonProps> = ({children, arrow = 'none', appearance, className, ...props}) => {
  return (
    <button
    className={cn(s.button, className, {
      [s.primary]: appearance === 'primary',
      [s.ghost]: appearance === 'ghost',
    })}
    {...props}
    >
      {children}
      {
        arrow !== 'none' &&
          <span className={cn(s.arrow, {
            [s.down]: arrow === 'down',
            [s.right]: arrow === 'right',
          })}>
            <ArrowIcon/>
          </span>
      }
    </button>
  );
};

export {Button};