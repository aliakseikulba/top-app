import React, {FC} from 'react';
import {HeaderProps} from './Header.props';
import s from './Header.module.css';

const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <div {...props}>
      HEADER
    </div>
  );
};

export default Header;