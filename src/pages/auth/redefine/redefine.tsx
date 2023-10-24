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
import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants';


const RedefinePage = () => {
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [passError1, setPassError1] = useState("");
    const [passError2, setPassError2] = useState("");
    const [passError3, setPassError3] = useState("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const router = useRouter();
    const mailMutation = api.mail.sendEmail.useMutation()

    const validate = () => {
        let flag = true;
        if (validator.isEmpty(pass1)) {
            setPassError1("Campo obrigatório")
            flag = false;
        } else
            setPassError1("")
        
        if (validator.isEmpty(pass2)) {
            setPassError2("Campo obrigatório")
            flag = false;
        } else
            setPassError2("")
        
        if (!validator.equals(pass1, pass2)) {
            setPassError3("As senhas precisam ser iguais")
            flag = false;
        } else
            setPassError3("")
        
        return flag
    }

    const onSubmit = async () => {

        const valid: boolean = validate();
        if (!valid)
            return;

        setLoadingSubmit(true);

        router.push("/auth/redefine/redefined")

    };

    return (
        <NotAuthenticatedLayout image="/assets/forgot_password.svg" width={477} height={317}>
            <div className="py-4 flex flex-col gap-3 w-1/2">
                <h2 className="text-2xl font-bold">Redefinir a Senha</h2>
                <InputComponent
                    title="Nova Senha"
                    type="password"
                    placeholder="Senha"
                    setValue={setPass1}
                    icon={<HiOutlineEye />}
                    error={passError1}
                />
                <InputComponent
                    title="Confirmação de nova senha"
                    type="password"
                    placeholder="Senha"
                    setValue={setPass2}
                    icon={<HiOutlineEye />}
                    error={passError2}
                />
                <ButtonComponent text="Redefinir senha" loading={loadingSubmit} clickFunction={onSubmit} error={passError3}/>
                <p className='text-medium'> <Link href={"/auth/signin"}>Fazer login </Link>| <Link href={"/auth/register"}>Cadastre-se</Link></p>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default RedefinePage;