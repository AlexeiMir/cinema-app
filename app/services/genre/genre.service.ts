import { getGenresUrl } from '@/config/api.config';
import { IGenre } from '@/shared/types/movie.type';
import { axiosClassic } from 'api/interceptors';


export const GenreService = {
    async getAll(searchTearm?: string) {
        return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
            params: searchTearm ?
                {
                    searchTearm
                }
                : {}
        })
    },

    async getPopularGenres(limit = 4) {
        return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {
            params: {
                limit
            }
        })
    }
}