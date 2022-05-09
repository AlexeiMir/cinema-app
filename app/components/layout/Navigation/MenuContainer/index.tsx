import { FC } from 'react';
import { Menu } from '../Menu';
import { firstMenu, userMenu } from './menu.data';
import styles from './styles.module.scss';

const MenuContainer: FC = () => (
  <div className={styles.menu_container__container}>
    <Menu menu={firstMenu} />
    <Menu menu={userMenu} />
  </div>
);

export { MenuContainer };