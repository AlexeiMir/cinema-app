import { IMovie } from '@/shared/types/movie.type';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';

const SearchList: FC<{movies: IMovie[]}> = ({movies}) => (
    <div className={styles.list__container}>
        {movies.length ? (
        movies.map((movie) => (
            <Link key={movie.slug} href={`movie/${movie.slug}`}>
                <a>
                    <Image
                        src={movie.poster || ''}
                        width={50}
                        height={50}
                        objectFit="cover"
                        objectPosition="top"
                        alt={movie.title}
                        draggable={false}
                    />
                    <span>{movie.title}</span>
                </a>
            </Link>
))
        ): (
            <div className="text-white text-center my-4">
            Movies not found!
            </div>
        )}

  </div>
);

export { SearchList };