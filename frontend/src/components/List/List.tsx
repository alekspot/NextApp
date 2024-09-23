import { ReactNode } from 'react';
import styles from './List.module.scss';
import { cn } from '../../helpers/classnames';

export type ListProps<T> = {
  items?: T[];
  groupItems?: T[][];
  onClickItem?: (item: T, index?: number) => void;
  renderItem?: (item: T, index: number, isActive: boolean) => ReactNode;
  isActive?: (item: T, index?: number) => boolean;
  getItemClassName?: (item: T, index: number, isActive: boolean) => string;
};

export const List = <T,>({
  groupItems = [],
  items = [],
  onClickItem = () => null,
  renderItem = (item, index) => 'Item' + (index + 1),
  isActive = () => false,
  getItemClassName = () => '',
}: ListProps<T>) => {
  const renderListItem = (item: T, index: number) => (
    <div
      key={index}
      data-scroll={index}
      onClick={() => {
        if (!isActive(item, index)) {
          onClickItem(item, index);
        }
      }}
      className={cn(styles.item, getItemClassName(item, index, isActive(item, index)), {
        [styles.active]: isActive(item, index),
      })}
    >
      {renderItem(item, index, isActive(item, index))}
    </div>
  );

  return (
    <div className={styles.list}>
      {groupItems.map((group, index) => (
        <div className={styles.group} key={index}>
          {group.map(renderListItem)}
        </div>
      ))}
      {items.map(renderListItem)}
    </div>
  );
};
