"use Client";
import NotAuthenticatedLayout from "~/layouts/notAuthenticatedLayout";
import ButtonComponent from "~/components/common/button/buttton";
import { useState, useRef, useEffect } from "react";
import EnterCode from "~/components/common/input/emailVerificationField";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Error from "next/error";

const confirmEmail = () => {

    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [emailCodeError, setEmailCodeError] = useState("");

    let placeholderMail = "";
    const router=useRouter();
    if (router.query.email){
        placeholderMail= router.query.email.toString();
    }

    const verifyQuery = api.userVerification.verifyCode.useMutation();
    

    const onSubmit = async (code:String) => {
        setLoadingSubmit(true);
        //console.log("inside callback, we got email= " + placeholderMail + " and inputCode = " + Number(code));
        try {
            const response = await verifyQuery.mutateAsync({email:placeholderMail, inputCode:Number(code)});
            if (response == 200){
                //redirect to successful login

            } else if (response == 1000){
                // means wrong passcode
                setEmailCodeError("Código errado, tente novamente.");
            } else if (response == 1001){
                //means too many failures
                setEmailCodeError("Você falhou muitas vezes. Faça o cadastro novamente.");
            } else if (response == 1002){
                //means account not yet registered
                setEmailCodeError("Este email ainda não foi registrado. Dirija-se à página de cadastro");
            }

        } catch  {
            setEmailCodeError("Erro interno, nos contate para resolvermos.");
        }
       
        setLoadingSubmit(false);
        
    }

    return (
        <NotAuthenticatedLayout image="/assets/login_image.svg" width={500} height={292}>
            <div className="py-4 flex flex-col gap-2 w-1/2">
                <h2 className="text-3xl font-bold">Confirme o seu Email</h2>
                <br/>
                <p className="text-medium">Um código de verificação foi enviado pra o email <b>{placeholderMail}</b></p>
                <EnterCode callback={onSubmit} isLoading={loadingSubmit} reset={false}></EnterCode>
                <ButtonComponent text="Confirmar Email" clickFunction={() => 0} loading={loadingSubmit} error={emailCodeError}/>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default confirmEmail;