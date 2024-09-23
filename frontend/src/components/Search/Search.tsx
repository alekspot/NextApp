import { ReactNode, useState } from 'react';
import styles from './Search.module.scss';

export type SearchProps<T> = {
  items?: T[];
  renderResult?: (item: T, index: number) => ReactNode;
  searchFn?: (value: string, item: T) => boolean;
  onClickResult?: (item: T, index?: number) => void;
  showResult?: boolean;
};

export const Search = <T,>({
  items = [],
  renderResult = (item, index) => 'Result' + (index + 1),
  searchFn = () => true,
  onClickResult = () => null,
  showResult = true,
}: SearchProps<T>) => {
  const [value, setValue] = useState('');

  const [searchedItems, setSearchedItems] = useState<T[]>([]);

  const closeDropdown = () => {
    setValue('');
    setSearchedItems([]);
  };

  const showSearchResult = showResult && searchedItems.length !== 0 && value !== '';

  return (
    <div className={styles.search}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => {
            const inputValue = e.target.value;
            setValue(inputValue);

            const filtred = items.filter((item) => searchFn(inputValue, item));
            setSearchedItems(filtred);
          }}
          placeholder="Поиск"
        />
      </div>
      {/* <div className={styles.close}></div> */}
      {showSearchResult && (
        <div className={styles.dropdown}>
          {searchedItems.map((item, index) => (
            <div
              className={styles.item}
              key={index}
              onClick={() => {
                onClickResult(item, index);
                closeDropdown();
              }}
            >
              {renderResult(item, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
