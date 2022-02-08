import React, {FC} from 'react';
import {LayoutProps} from './Layout.props';
import s from './Layout.module.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header}/>
        <Sidebar className={s.sidebar}/>
        <div className={s.body}>
          {children}
        </div>
      <Footer className={s.footer}/>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
};