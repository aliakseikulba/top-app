import React, {FC} from 'react';
import {FooterProps} from './Footer.props';
import s from './Footer.module.css';

const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <div {...props}>
      FOOTER
    </div>
  );
};

export default Footer;