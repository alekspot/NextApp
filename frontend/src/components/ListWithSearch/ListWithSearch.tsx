import { Search, SearchProps } from '../Search/Search';
import { List, ListProps } from '../List/List';

type Props<T extends { id: number }> = SearchProps<T> & ListProps<T>;

export const ListWithSearch = <T extends { id: number }>({
  items = [],
  isActive,
  onClickItem,
  onClickResult = () => null,
  renderItem,
  renderResult,
  searchFn,
  getItemClassName,
}: Props<T>) => {
  const handleClickResult: SearchProps<T>['onClickResult'] = (item, index) => {
    const idx = items.findIndex((itm) => itm.id === item.id);

    if (idx >= 0) {
      onClickResult(item, index);

      const elem = document.querySelector(`[data-scroll='${idx}']`);

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Search
        items={items}
        searchFn={searchFn}
        renderResult={renderResult}
        onClickResult={handleClickResult}
      />
      <List
        items={items}
        isActive={isActive}
        onClickItem={onClickItem}
        renderItem={renderItem}
        getItemClassName={getItemClassName}
      />
    </>
  );
};
