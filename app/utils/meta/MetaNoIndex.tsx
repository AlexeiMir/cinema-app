import { titleMerge } from 'configs/seo.config';
import Head from 'next/head';
import { FC } from 'react';

const MetaNoIndex: FC<{title?: string}> = ({title = 'Error'}) => (
    <Head>
        <title>{titleMerge(title)}</title>
        <meta name='robots' content='noindex, nofollow' />

  </Head>
);

export { MetaNoIndex };