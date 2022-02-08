import React, {FC} from 'react';
import {SidebarProps} from './Sidebar.props';
import s from './Sidebar.module.css';

const Sidebar: FC<SidebarProps> = ({...props}) => {
  return (
    <div {...props}>
      SIDEBAR
    </div>
  );
};

export default Sidebar;