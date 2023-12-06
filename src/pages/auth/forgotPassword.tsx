"use client";
import React, { useState } from "react";
import InputComponent from "~/components/common/input/input";
import CheckboxComponent from "~/components/common/checkbox/checkbox";
import ButtonComponent from "~/components/common/button/buttton";
import { HiOutlineEye } from "react-icons/hi";
import validator from 'validator';
import { api } from "~/utils/api";
import NotAuthenticatedLayout from "~/layouts/notAuthenticatedLayout";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const Register = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState("");
    const [passConfirmation, setPassConfirmation] = useState("");
    const [passConfirmationError, setPassConfirmationError] = useState("");
    const [signInError, setSignInError] = useState("");
    const [nome, setNome] = useState("");
    const [nomeError, setNomeError] = useState("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const mutation = api.user.create.useMutation()

    const router = useRouter();

    const validate = () => {
        let flag = true;
        if (!validator.isEmail(email)) {
            setEmailError("Digite um email válido")
            flag = false;
        } else
            setEmailError("")
        if (!nome) {
            setNomeError("Digite uma nome antes de continuar");
            flag = false;
        } else
            setNomeError("");
        if (!pass) {
            setPassError("Digite uma senha antes de continuar");
            flag = false;
        } else
            setPassError("");
        if (passConfirmation != pass) {
            setPassConfirmationError("Senhas não são iguais");
            flag = true;
        } else
            setPassConfirmationError("")
        return flag
    }

    const onSubmit = async () => {
        router.push("/auth/signin")
    };

    return (
        <NotAuthenticatedLayout image="/assets/forgot_password.svg" width={500} height={292}>
            <div className="py-4 flex flex-col gap-2 w-1/2">
                <h2 className="text-2xl font-bold">Esqueci a Senha</h2>
                <InputComponent
                    title="Email"
                    type="email"
                    placeholder="nome@email.com"
                    setValue={setEmail}
                    error={emailError}
                />
                
                <ButtonComponent text="Enviar Email" clickFunction={onSubmit} loading={loadingSubmit} error={signInError}/>
               <p className='text-medium'> <Link href={"/auth/signin"}> Já tenho conta </Link></p>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default Register;