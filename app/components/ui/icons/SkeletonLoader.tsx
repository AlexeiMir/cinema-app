import { FC } from "react"
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import cx from "classnames";



const SkeletonLoader:FC<SkeletonProps> = ({className, ...rest}) => {
    return (
        <Skeleton
            {...rest}
            baseColor="#1F2125"
            highlightColor="#292A2E"
            className={cx('rounded-lg', className)}
        />
    
  )
};

export {SkeletonLoader};
