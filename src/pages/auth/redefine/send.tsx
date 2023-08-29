"use client";
import validator from 'validator';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import InputComponent from "~/components/common/input/input";
import CheckboxComponent from "~/components/common/checkbox/checkbox";
import { HiOutlineEye } from "react-icons/hi";
import NotAuthenticatedLayout from '~/layouts/notAuthenticatedLayout';
import ButtonComponent from '~/components/common/button/buttton';
import Link from 'next/link';
import { api } from '~/utils/api';


const RedefinePage = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [signInError, setSignInError] = useState("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const router = useRouter();
    const mailMutation = api.mail.sendEmail.useMutation()

    const validate = () => {
        let flag = true;
        if (!validator.isEmail(email)) {
            setEmailError("Digite um email válido")
            flag = false;
        } else
            setEmailError("")
        return flag
    }

    const onSubmit = async () => {

        const valid: boolean = validate();
        if (!valid)
            return;

        setLoadingSubmit(true);

        try {
            const result = await mailMutation.mutateAsync({text:"Redefinir Senha", to:email, subject:"Redefinir Senha", html:"<h1>Teste</h1>"})

            setLoadingSubmit(false);

            if (result!.status === 200) {
                router.push("/auth/redefine/sent")
            }
        } catch {
            setSignInError("Erro interno. Contate a equipe");
        }

    };

    return (
        <NotAuthenticatedLayout image="/assets/forgot_password.svg" width={477} height={317}>
            <div className="py-4 flex flex-col gap-3 w-1/2">
                <h2 className="text-2xl font-bold">Esqueci a Senha</h2>
                <p className='text-lg'>Um email será enviado para a conta cadastrada com um link de recuperação de senha.</p>
                <InputComponent
                    title="Digite o email cadastrado"
                    type="email"
                    placeholder="nome@email.com"
                    setValue={setEmail}
                    error={emailError}
                />
                <ButtonComponent text="Enviar email" loading={loadingSubmit} clickFunction={onSubmit} error={signInError}/>
                <p className='text-medium'> <Link href={"/auth/signin"}>Fazer login </Link>| <Link href={"/auth/register"}>Cadastre-se</Link></p>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default RedefinePage;