import { FC } from 'react';
import { Menu } from '../../Menu';
import styles from './styles.module.scss';
import { usePopularGenres } from './usePopularGenres';

const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres();
    return <div className = "mx-r-11 mb-6" >
    {
      isLoading ?
          <div> Loading ... </div>
          : (
            <Menu
              menu={{
                title: 'Popular genre',
                items: data || []
            }}
            />
          )
    }

  </div>
};

export { GenreMenu };