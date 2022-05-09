import { FC } from 'react';
import { Navigation } from './Navigation';
import { Sidebar } from './Sidebar';
import styles from './styles.module.scss';

const Layout: FC = ({children}) => (
    <div className={styles.layout_container}>
        <Navigation />
        <div className={styles.layout_center}>
        {children}
        </div>
        <Sidebar />

  </div>
);

export { Layout };
    

