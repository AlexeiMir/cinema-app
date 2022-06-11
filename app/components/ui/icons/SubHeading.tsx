import { FC } from 'react';
import styles from './styles.module.scss';

const SubHeading: FC<{title: string}> = ({title}) => (
    <h2 className={`text-white text-xl mb-5 text-semibold`}>
        {title}
  </h2>
);

export { SubHeading };