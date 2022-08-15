import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/icons/Heading';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import AuthFields from '@/shared/user/AuthFields';
import { Meta } from '@/utils/meta';
import React, { FC, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import styles from './styles.module.scss';
import { useAuthRedirect } from './useAuthRedirect';

const Auth: FC = () => {
    useAuthRedirect();
    const { isLoading } = useAuth();

    const { login, register } = useActions();

    const [type, setType] = useState<'login' | 'register'>('login');
    
    const { register: registerInput, handleSubmit, formState: { errors }, reset } = useForm<IAuthInput>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IAuthInput> = useCallback((data) => {
        if (type === 'login') login(data)
        else if (type === 'register') register(data)

        reset()
      }, [login, register, reset, type]);



    return <Meta title='Auth'>
    <section className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading title='Auth' className='mb-6' />
                <AuthFields register={registerInput} errors={errors} />

                <div className={styles.buttons}>
                    <Button
                        type='submit'
                        disabled={isLoading}
                        onClick={() => setType('login')}
                    >
                        Login
                    </Button>
                    
                    <Button
                        type='submit'
                        disabled={isLoading}
                        onClick={() => setType('register')}
                    >
                        Register
                        </Button>
                </div>


        
    </form>
    </section>
    </Meta>
};

export { Auth };