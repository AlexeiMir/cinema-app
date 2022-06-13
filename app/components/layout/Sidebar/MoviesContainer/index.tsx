import { FC } from 'react';
import { PopularMovieList } from './PopularMovieList';
import styles from './styles.module.scss';

const MoviesContainer: FC = () => (
    <div className={styles.movies__container}>
        <PopularMovieList />

  </div>
);

export { MoviesContainer };