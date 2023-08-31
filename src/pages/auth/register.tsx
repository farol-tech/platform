"use client";
import React, { useState } from "react";
import InputComponent from "~/components/common/input/input";
import InputSelect from "~/components/common/input/input";
import CheckboxComponent from "~/components/common/checkbox/checkbox";
import ButtonComponent from "~/components/common/button/buttton";
import { HiOutlineEye } from "react-icons/hi";
import validator from 'validator';
import { api } from "~/utils/api";
import NotAuthenticatedLayout from "~/layouts/notAuthenticatedLayout";
import Link from "next/link";


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
        if (!cnpj){
            setCnpjError("Digite o CNPJ da empresa antes de continuar")
            flag = false;
        } else{
            setCnpjError("");
        }
        if (!estado){
            setEstadoError("Digite o Estado da sede da empresa antes de continuar")
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
            flag = true;
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
            await mutation.mutateAsync({ email: email, senha: pass, nome_fantasia: nome, cnpj:cnpj, estado:estado, endereco:endereco, website:website }); //Falta mexer aqui, e mudar o modelo de user do banco de dados
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
                <InputComponent
                    title="CNPJ"
                    type="text"
                    placeholder="XX.XXX.XXX/0001-XX"
                    setValue={setCnpj}
                    error={cnpjError}
                />
                <InputComponent
                    title="Estado da Sede"
                    type="text"
                    placeholder="Amazonas"
                    setValue={setEstado}
                    error={estadoError}
                />
                <InputComponent
                    title="Endereço"
                    type="text"
                    placeholder="São José dos Campos. DCTA, r. H8C apto. 103E"
                    setValue={setEndereco}
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