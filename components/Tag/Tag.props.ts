import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size: 's' | 'm';
  children: ReactNode;
  href?: string;
  color: 'ghost' | 'grey' | 'red' | 'green' | 'primary'
}