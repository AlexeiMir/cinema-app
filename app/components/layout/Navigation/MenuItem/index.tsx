import { FC } from 'react';
import { IMenuItem } from '../MenuContainer/menu.types';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
    const { asPath } = useRouter()
    return <li className={cx(styles.menu_item__li,{
        [styles.active]: asPath === item.link
    })}>
        <Link href={item.link}>
            <a>
                <MaterialIcon name={item.icon} />
                <span>{item.title }</span>
        </a>
        </Link>

    </li>
};

export { MenuItem };