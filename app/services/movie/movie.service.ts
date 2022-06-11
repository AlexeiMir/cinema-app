import { getMoviesUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/movie.type"
import { axiosClassic } from "api/interceptors"

export const MovieService = {
    async getMovies(searchTerm?: string) {
        return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
            params: searchTerm ?
                {
                    searchTerm
                } 
                : {}
        })
    }
}