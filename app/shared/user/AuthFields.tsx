import React, { FC } from "react"
import cx from "classnames"
import styles from "./styles.module.scss"
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Field from "@/components/ui/form-elements/Field";
import { IAuthInput } from "@/components/screens/ auth/auth.interface";
import { validEmail } from "@/hooks/shared/regex";

interface AuthFieldsProps {
    register: UseFormRegister<any>,
    errors: FieldErrors<IAuthInput>
    isPasswordRequired?: boolean
}
const AuthFields: FC<AuthFieldsProps> = ({
    register,
    errors,
    isPasswordRequired,
}) => {
  return (
    <>
      <Field
        {...register('email', {
          required: 'Email is required!',
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email',
          }
        })}
        placeholder="E-mail"
        error={errors.email}
      />
      <Field
        {...register('password',
        isPasswordRequired ?  {
          required: 'Password is required!',
          minLength: {
            value: 6,
            message: 'Min length should more 6 symbols!',
          },
        } : {})}
        placeholder="Password"
				type="password"
        error={errors.password}
      />
    </>
  )
};

export default AuthFields;
