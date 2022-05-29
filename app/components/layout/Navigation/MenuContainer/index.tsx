import { FC } from 'react';
import { Menu } from '../Menu';
import { GenreMenu } from './genres/GenreMenus';
import { firstMenu, userMenu } from './menu.data';

const MenuContainer: FC = () => (
  <div>
    <Menu menu={firstMenu} />
    <GenreMenu />
    <Menu menu={userMenu} />
  </div>
);

export { MenuContainer };