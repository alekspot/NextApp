import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import styles from './SwipeList.module.scss';
import { ListProps } from '../List/List';
import { FC } from 'react';
import { cn } from '@/helpers/classnames';
import { Button } from '../Button/Button';

export const SwipeList = <T,>({
  groupItems = [],
  items = [],
  onClickItem = () => null,
  renderItem = (item, index) => 'Item' + (index + 1),
  isActive = () => false,
  getItemClassName = () => '',
}: ListProps<T>) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>
        <Button className={styles.button}>Закрепить</Button>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>
        <Button className={styles.button}>Удалить</Button>
      </SwipeAction>
    </TrailingActions>
  );

  const renderListItem = (item: T, index: number) => (
    <SwipeableListItem
      key={index}
      data-scroll={index}
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
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
    </SwipeableListItem>
  );

  return (
    <SwipeableList type={Type.IOS} className={styles.list}>
      {groupItems.map((group, index) => (
        <div className={styles.group} key={index}>
          {group.map(renderListItem)}
        </div>
      ))}
      {items.map(renderListItem)}
    </SwipeableList>
  );
};
