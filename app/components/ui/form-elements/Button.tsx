import React, { FC } from "react"
import cx from "classnames"
import styles from "./styles.module.scss"
import { IButton } from "./form.interface";

interface ButtonProps extends IButton{
    className?: string,
}
const Button:FC<ButtonProps> = ({className, children, ...rest}) => {
  return (
    <button className={cx(styles.button, className)} {...rest}>
      {children}
    </button>
  )
};

export {Button};
