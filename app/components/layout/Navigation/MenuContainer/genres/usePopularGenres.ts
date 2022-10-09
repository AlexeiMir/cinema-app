import { IMenuItem } from './../menu.types';
import { GenreService } from "@/services/genre/genre.service";
import { useQuery } from "react-query"
import { getAdminUrl } from 'configs/url.config';

export const usePopularGenres = () => {
    const queryData = useQuery(
        'popular genres menu',
        () => GenreService.getAll(),
        {
            select: ({ data }) => 
                data.map(
                    (genre): IMenuItem => ({
                        icon: genre.icon,
                        link: getAdminUrl(genre.slug),
                        title: genre.name

                    })
                ).splice(0, 4),
            onError(error) {
                console.log(error, 'Popular genres menu');
                
            }
        }
    )

    return queryData;
}