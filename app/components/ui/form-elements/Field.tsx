import React, { FC, forwardRef } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { IField } from './form.interface';

const Field = forwardRef<HTMLInputElement, IField>(({placeholder, error, type = 'text', style, ...rest}, ref) => (
    <div className={cx(styles.common, styles.field)} style={style}>
        <label>
            <span>{placeholder}</span>
            <input ref={ref} type={type} {...rest} />
            {error && <div className={styles.error}>
            {error.message}
            </div>}
        </label>

  </div>
));

Field.displayName = 'Field'

export default Field;