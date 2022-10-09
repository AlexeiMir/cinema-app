import { MaterialIcon } from '@/components/ui/icons/MaterialIcon';
import { getGenreUrl, getMovieUrl } from 'configs/url.config';
import { getGenresListEach } from '@/utils/movie/getGenresListEach';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IWidgetMovie } from '../movie.types';
import styles from './styles.module.scss';

const MovieItem: FC<{movie: IWidgetMovie}> = ({movie}) => (
    <div className={styles.movie_item__container}>
        <Link href={getMovieUrl(movie.slug)}>
            <a>
                <Image
                    alt={movie.title}
                    width={65}
                    height={97}
                    src={movie.poster}
                    draggable={false}
                    priority
                />
            </a>
        </Link>
        <div className={styles.movie_item__info}>
            <div>
                <div className={styles.movie_item__title}>
                {movie.title}
                </div>
                <div className={styles.movie_item__genres}>
                    {movie.genres.map(({ slug, name, _id }, idx) => (
                        <Link key={_id} href={getGenreUrl(slug)}>
                            <a>
                                {getGenresListEach(idx, movie.genres.length, name)}
                            </a>
                        </Link>
                    ))}
                </div>

                
            </div>
            <div className={styles.movie_item__rating}>
                <MaterialIcon name='MdStarRate' />
                <span>{movie.rating.toFixed(1)}</span>
            </div>
        </div>

  </div>
);

export { MovieItem };