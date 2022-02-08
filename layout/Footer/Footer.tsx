import React, {FC} from 'react';
import {FooterProps} from './Footer.props';
import s from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

const Footer: FC<FooterProps> = ({className, ...props }) => {
  return (
    <footer {...props} className={cn(className, s.footer)}>
      <div className={s.rights}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#' target='_blank' className={s.terms}>Пользовательское соглашение</a>
      <a href='#' target='_blank' className={s.confidence}>Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;