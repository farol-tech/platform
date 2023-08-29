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


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState("");
    const [signInError, setSignInError] = useState("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [checked, setChecked] = useState(false);

    const router = useRouter();

    const validate = () => {
        let flag = true;
        if (!validator.isEmail(email)) {
            setEmailError("Digite um email válido")
            flag = false;
        } else
            setEmailError("")
        if (!pass) {
            setPassError("Digite uma senha antes de continuar");
            flag = false;
        } else
            setPassError("");
        return flag
    }

    const onSubmit = async () => {

        const valid: boolean = validate();
        if (!valid)
            return;

        setLoadingSubmit(true);

        try {
            const result = await signIn("credentials", {
                redirect: false,
                callbackUrl: '/dashboard',
                email: email,
                password: pass,
            })

            setLoadingSubmit(false);

            if (result!.ok) {
                router.push("/dashboard/overview")
            } else {
                setPassError("Email e senha não batem")
            }
        } catch {
            setSignInError("Erro interno. Contate a equipe");
        }

    };

    return (
        <NotAuthenticatedLayout image="/assets/login_image.svg" width={500} height={292}>
            <div className="py-4 flex flex-col gap-2 w-1/2">
                <h2 className="text-2xl font-bold">Login</h2>
                <InputComponent
                    title="Email"
                    type="email"
                    placeholder="nome@email.com"
                    setValue={setEmail}
                    error={emailError}
                />
                <InputComponent
                    title="Senha"
                    type="password"
                    placeholder="Senha"
                    setValue={setPass}
                    icon={<HiOutlineEye />}
                    error={passError}
                />
                <CheckboxComponent
                    id="conectado"
                    label="Mantenha-me conectado"
                    checked={checked}
                    setValue={setChecked}
                />
                <ButtonComponent text="Login" loading={loadingSubmit} clickFunction={onSubmit} error={signInError}/>
                <p className='text-medium'> <Link href={"/auth/redefine/send"}>Esqueci minha senha </Link>| <Link href={"/auth/register"}>Cadastre-se</Link></p>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default LoginPage;