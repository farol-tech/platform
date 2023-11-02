"use client";
import validator from 'validator';
import React, { useState } from "react";
import InputComponent from "~/components/common/input/input";
import CheckboxComponent from "~/components/common/checkbox/checkbox";
import { HiOutlineEye } from "react-icons/hi";
import ButtonComponent from '~/components/common/button/buttton';
import MultipleChoiceComponent from '~/components/common/multiple_choice/multiple_choice';


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState("");
    const [checked, setChecked] = useState(false);
    const [num, setNum] = useState("");
    const [numError, setNumError] = useState("");

    const [checkeds, setCheckeds] = useState([false, false, false]);

    const [checkeds2, setCheckeds2] = useState([false, false, false]);

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
        if (!validator.isNumeric(num)) {
            setNumError("Digite um numero valido")
            flag = false;
        } else
            setNumError("")        
        return flag
    }

    const onSubmit = async () => {

        const valid: boolean = validate();
        if (!valid)
            return;

        console.log("Validado")

    };

    return (
        <div className="py-4 flex flex-col gap-2 w-full h-screen items-center align-middle">
            <h2 className="text-2xl font-bold">Teste de Diferentes Componentes</h2>
            <InputComponent
                title="Texto"
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
            <InputComponent
                title="Numeros"
                type="number"
                placeholder=""
                setValue={setNum}
                error={numError}
            />
            <CheckboxComponent
                id="conectado"
                label="CheckboxSimples"
                checked={checked}
                setValue={setChecked}
            />

            <MultipleChoiceComponent
                title="Só pode escolher 1 opção"
                single={true}
                choices={["Opção 1", "Opção 2", "Opção 3"]}
                checked={checkeds}
                setCheckeds={setCheckeds}
            />

            <MultipleChoiceComponent
                title="Pode escolher várias opções"
                single={false}
                choices={["MOpção 1", "MOpção 2", "MOpção 3"]}
                checked={checkeds2}
                setCheckeds={setCheckeds2}
            />

            <ButtonComponent text="Butão" clickFunction={onSubmit}/>
        </div>
    );
};

export default LoginPage;