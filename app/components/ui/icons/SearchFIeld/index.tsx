import { ChangeEvent, FC } from 'react';
import { MaterialIcon } from '../MaterialIcon';
import styles from './styles.module.scss';

interface ISearchField {
    searchTerm: string;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({searchTerm, handleSearch}) => (
    <div className={styles.search_field__container}>
        <MaterialIcon name='MdSearch' />
        <input placeholder='Search' value={searchTerm} onChange={handleSearch} />
  </div>
);

export { SearchField };