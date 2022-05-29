import React, { FC } from 'react';
import { Logo } from './Logo';
import { MenuContainer } from './MenuContainer';
import styles from './styles.module.scss';

const Navigation: FC = () => (
  <div className={styles.navigation_container}>
    <Logo />
    <MenuContainer />
  </div>
);

export { Navigation };