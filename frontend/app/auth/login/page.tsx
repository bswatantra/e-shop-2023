'use client'

import { Button, Input } from "@nextui-org/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "@/app/lib/types";

import BaseCard from '../../components/cards/BaseCard'
import { login } from "@/app/utils/auth";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset, setError, } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema), });
    const onSubmit: SubmitHandler<TLoginSchema> = async data => {
        const response = await login(data)
        console.log(response)
    };

    return (
        <div className='w-1/2 flex justify-center items-center py-60 mx-auto'>

            <BaseCard title='Login'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input size='sm' variant='bordered' type="email" label="Email" className='mb-4'
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 mb-4">{`${errors.email.message}`}</p>
                    )}
                    <Input size='sm' variant='bordered' type="password" label="Password" className="mb-4"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-red-500 mb-4">{`${errors.password.message}`}</p>
                    )}
                    <Button type="submit" color='primary' spinnerPlacement='end' className="mt-2"
                        variant={'bordered'}
                        disableRipple
                        isLoading={isSubmitting}
                    >
                        {'Login'}
                    </Button>
                </form>
            </BaseCard>
        </div>
    )
}

export default Login