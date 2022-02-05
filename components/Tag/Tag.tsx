import React, {FC} from 'react';
import {TagProps} from './Tag.props';
import s from './Tag.module.css';
import cn from 'classnames';

export const Tag: FC<TagProps> = ({ size = 'm', href, children, color = 'ghost', className, ...props }) => {
  return (
    <>
      <div
        className={cn(className, s.tag, {
          [s.s]: size === 's',
          [s.m]: size === 'm',
          [s.ghost]: color === 'ghost',
          [s.grey]: color === 'grey',
          [s.green]: color === 'green',
          [s.primary]: color === 'primary',
          [s.red]: color === 'red',
        })}
        {...props}
      >
        {
          href ? <a className={s.link} href={href}>{children}</a>
            : <>{children}</>
        }
      </div>
    </>
  );
};
