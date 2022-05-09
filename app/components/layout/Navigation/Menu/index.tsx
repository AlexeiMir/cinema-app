import { FC } from 'react';
import { AuthItems } from '../AuthItems';
import { IMenu } from '../MenuContainer/menu.types';
import { MenuItem } from '../MenuItem';
import styles from './styles.module.scss';

const Menu: FC<{menu: IMenu}> = ({menu: {title, items}}) => (
    <div className={styles.menu__container}>
        <h3 className={styles.menu__heading}>
        {title}
        </h3>
        <ul className={styles.menu__ul}>
            {items.map(menuItem => (
            <MenuItem item={menuItem} key={menuItem.link} />
            ))}
        </ul>
        {title === 'General' ? <AuthItems /> : null }

  </div>
);

export { Menu };