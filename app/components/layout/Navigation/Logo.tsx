import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';

import logoImage from '@/assets/images/logo.svg';

const Logo: FC = () => (
    <Link href="/">
        <a className="px-layout mb-10 block">
            <Image
                src={logoImage}
                width={247}
                height={34}
                alt="Movie app"
                draggable={false}
            />

        </a>

  </Link>
);

export { Logo };