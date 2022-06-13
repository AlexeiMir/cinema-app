import { FC } from 'react';


const Heading: FC<{title: string, className?: string}> = ({title, className = ''}) => (
    <h1 className={`text-white text-opacity-80 font-semibold ${
        className.includes('xl') ? '' : 'text-3xl'
  } ${className}`}>

  </h1>
);

export { Heading };