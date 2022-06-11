import { SearchField } from '@/components/ui/icons/SearchFIeld';
import { useDebounce } from '@/hooks/useDebounce';
import { MovieService } from '@/services/movie/movie.service';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { SearchList } from './SearchList';
import styles from './styles.module.scss';

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debounceSearch = useDebounce(searchTerm, 500);
    const { isSuccess, data: popularMovies } = useQuery(
        ['search movie list', debounceSearch], () => MovieService.getMovies(debounceSearch),
        {
            select: ({ data }) => data,
            enabled: !!debounceSearch
        }
    );

    const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        }, [setSearchTerm])

    return <div className={styles.search__container}>
        <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
        {isSuccess && <SearchList movies={popularMovies || []} />}
    </div>
};

export { Search };