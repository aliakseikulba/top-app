import React, {FC} from 'react';
import {PProps} from './P.props';
import s from './P.module.css';
import cn from 'classnames';

export const P: FC<PProps> = ({ size = 'm', children, className, ...props }) => {
  return (
    <>
      <p
        className={cn(className, s.p, {
          [s.s]: size === 's',
          [s.m]: size === 'm',
          [s.l]: size === 'l',
        })}
        {...props}
      >
        {children}
      </p>
    </>
  );
};
