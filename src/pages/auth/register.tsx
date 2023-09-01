"use client";
import React, { useEffect, useState } from "react";
import InputComponent from "~/components/common/input/input";
import MaskedInputComponent from "~/components/common/input/maskedInput";
import SelectInputComponent from "~/components/common/input/selectInput";
import CheckboxComponent from "~/components/common/checkbox/checkbox";
import ButtonComponent from "~/components/common/button/buttton";
import { HiOutlineEye } from "react-icons/hi";
import validator from 'validator';
import { api } from "~/utils/api";
import NotAuthenticatedLayout from "~/layouts/notAuthenticatedLayout";
import Link from "next/link";
import {useRouter}  from 'next/navigation';


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
    const [cnpj, setCnpj]  = useState("");
    const [cnpjError, setCnpjError]= useState("");
    const [endereco, setEndereco] = useState("");
    const [enderecoError, setEnderecoError] = useState("");
    const [website, setWebsite] = useState("");
    const [estado, setEstado] = useState("");
    const [estadoError, setEstadoError] = useState("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const allStates = [
        {value: "Acre", label: "Acre"},
        {value: "Alagoas", label: "Alagoas"},
        {value: "Amapá", label: "Amapá"},
        {value: "Amazonas", label: "Amazonas"},
        {value: "Bahia", label: "Bahia"},
        {value: "Ceará", label: "Ceará"},
        {value: "Distrito Federal", label: "Distrito Federal"},
        {value: "Espírito Santo", label: "Espírito Santo"},
        {value: "Goiás", label: "Goiás"},
        {value: "Maranhão", label: "Maranhão"},
        {value: "Mato Grosso", label: "Mato Grosso"},
        {value: "Mato Grosso do Sul", label: "Mato Grosso do Sul"},
        {value: "Minas Gerais", label: "Minas Gerais"},
        {value: "Pará", label: "Pará"},
        {value: "Paraíba", label: "Paraíba"},
        {value: "Paraná", label: "Paraná"},
        {value: "Pernambuco", label: "Pernambuco"},
        {value: "Piauí", label: "Piauí"},
        {value: "Rio de Janeiro", label: "Rio de Janeiro"},
        {value: "Rio Grande do Norte", label: "Rio Grande do Norte"},
        {value: "Rio Grande do Sul", label: "Rio Grande do Sul"},
        {value: "Rondônia", label: "Rondônia"},
        {value: "Roraima", label: "Roraima"},
        {value: "Santa Catarina", label: "Santa Catarina"},
        {value: "São Paulo", label: "São Paulo"},
        {value: "Sergipe", label: "Sergipe"},
        {value: "Tocantins", label: "Tocantins"}
    ];

    const router = useRouter();
    const mutation = api.user.create.useMutation()

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
        if (cnpj.length != 18){
            setCnpjError("Digite um CNPJ válido antes de continuar")
            flag = false;
        } else{
            setCnpjError("");
        }
        if (!(allStates.some(element => element.value == estado))){
            setEstadoError("Selecione um Estado válido antes de continuar")
            flag = false;
        } else{
            setEstadoError("");
        }
        if (!endereco){
            setEnderecoError("Digite um Endereço para a sede da empresa antes de continuar")
            flag = false;
        } else{
            setEnderecoError("");
        }
        if (!pass) {
            setPassError("Digite uma senha antes de continuar");
            flag = false;
        } else
            setPassError("");
        if (passConfirmation != pass) {
            setPassConfirmationError("Senhas não são iguais");
            flag = false;
        } else
            setPassConfirmationError("")
        return flag
    }

    const onSubmit = async () => {

        const valid: boolean = validate();
        if (!valid)
            return;

        setLoadingSubmit(true);
        
        try { 
            await mutation.mutateAsync({ email: email, senha: pass, nome_fantasia: nome, cnpj:cnpj, estado:estado, endereco:endereco, website:website });
            router.push('/auth/verifyEmail');

        } catch{
            setSignInError("Error interno. Nos contate para resolvermos.")
        }
        
        setLoadingSubmit(false);
    };
    //Consertar Layout da página
    return (
        <NotAuthenticatedLayout image="/assets/login_image.svg" width={500} height={292}>
            <div className="py-4 flex flex-col gap-2 w-1/2">
                <h2 className="text-3xl font-bold">Cadastro</h2>
                <br></br>
                <InputComponent
                    title="Email"
                    type="email"
                    placeholder="nome@email.com"
                    setValue={setEmail}
                    error={emailError}
                />
                <InputComponent
                    title="Nome Fantasia"
                    type="text"
                    placeholder="Nome da Empresa"
                    setValue={setNome}
                    error={nomeError}
                />
                <MaskedInputComponent
                    mask="99.999.999/9999-99"
                    title="CNPJ"
                    type="text"
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    setValue={setCnpj}
                    error={cnpjError}
                />
                <SelectInputComponent
                    title="Estado da Sede"
                    placeholder="Selecione um Estado..."
                    setValue={setEstado}
                    options={allStates}
                />
                <InputComponent
                    title="Endereço"
                    type="text"
                    placeholder="Endereço"
                    setValue={setEndereco}
                    //icon={<HiOutlineEye />}
                    error={enderecoError}
                />
                <InputComponent
                    title="Website"
                    type="text"
                    placeholder="https://dummyPlaceholder.com"
                    setValue={setWebsite}
                    error={""}
                />
                <InputComponent
                    title="Senha"
                    type="password"
                    placeholder="Senha"
                    setValue={setPass}
                    //icon={<HiOutlineEye />}
                    error={passError}
                />
                <InputComponent
                    title="Confirmar Senha"
                    type="password"
                    placeholder="Senha"
                    setValue={setPassConfirmation}
                    //icon={<HiOutlineEye />}
                    error={passConfirmationError}
                />
                <ButtonComponent text="Cadastro" clickFunction={onSubmit} loading={loadingSubmit} error={signInError}/>
               <p className='text-medium'> <Link href={"/auth/signin"} className="hover:underline"> Já tenho conta </Link></p>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default Register;
/*
<InputComponent
                    title="Estado da Sede"
                    type="text"
                    placeholder="Amazonas"
                    setValue={setEstado}
                    error={estadoError}
                />*/