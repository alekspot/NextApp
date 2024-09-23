import { FC } from 'react';
import styles from './Button.module.scss';
import { cn } from '@/helpers/classnames';

type Props = {
  size?: 's' | 'm' | 'xl';
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button: FC<Props> = ({
  className,
  size = 'm',
  onClick = () => null,
  children,
}) => {
  const sizeClass = {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.xl]: size === 'xl',
  };

  return (
    <button onClick={onClick} className={cn(styles.button, sizeClass, className)}>
      {children}
    </button>
  );
};
