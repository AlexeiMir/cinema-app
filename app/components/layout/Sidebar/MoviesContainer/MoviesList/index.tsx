import Link from 'next/link';
import { FC } from 'react';
import { IMovieList } from '../movie.types';
import { MovieItem } from '../MovieItem';
import styles from './styles.module.scss';

const MoviesList: FC<{list: IMovieList}> = ({list: {title, link, movies}}) => (
    <div className={styles.movies_list__container}>
        <div className={styles.movies__heading}>
        {title}
        </div>
        {
            movies.map(movie => (
               <MovieItem key={movie._id} movie={movie} />
           )) 
        }
        <Link href={link}>
            <a className={styles.movies__button}>See more</a>
        </Link>
        

  </div>
);

export { MoviesList };