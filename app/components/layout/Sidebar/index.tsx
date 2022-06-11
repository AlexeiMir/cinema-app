import React, { FC } from 'react';
import { Search } from './Search';
import styles from './styles.module.scss';

const Sidebar: FC = () => (
  <div className={styles.sidebar__container}>
    <Search />
  </div>
);

export { Sidebar };