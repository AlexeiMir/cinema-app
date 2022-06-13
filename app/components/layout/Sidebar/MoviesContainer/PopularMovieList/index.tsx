import { SkeletonLoader } from '@/components/ui/icons/SkeletonLoader';
import { MovieService } from '@/services/movie/movie.service';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { MoviesList } from '../MoviesList';

const PopularMovieList: FC = () => {
    const { isLoading, data: popularMovies } = useQuery(
        'Most popular movies', 
        () => MovieService.getMostPopularMovies(),
        {
            select: (data) => data.slice(0, 3)
        }
    );

    return isLoading ? 
        <div className='mt-11'>
            <SkeletonLoader count={3} className='h-28 mb-4' />

        </div>
        : (
            <MoviesList
                list={{
                    title: 'Popular movies',
                    link: '/trending',
                    movies: popularMovies || []
            }}
            />
        )
};

export { PopularMovieList };