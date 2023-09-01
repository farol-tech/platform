"use Client";
import NotAuthenticatedLayout from "~/layouts/notAuthenticatedLayout";
import ButtonComponent from "~/components/common/button/buttton";
import { useState, useRef, useEffect } from "react";
import EnterCode from "~/components/common/input/emailVerificationField";

const confirmEmail = () => {

    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [emailCodeError, setEmailCodeError] = useState("");

    const defaultMail="dummyMail@gmail.com";
    let isLoading= false;
    
    const onSubmit = () => {
        return 0;
    }

    return (
        <NotAuthenticatedLayout image="/assets/login_image.svg" width={500} height={292}>
        <div className="py-4 flex flex-col gap-2 w-1/2">
            <h2 className="text-3xl font-bold">Confirme o seu Email</h2>
            <br/>
            <p className="text-medium">Um código de verificação foi enviado pra o email <b>{defaultMail}</b></p>
            <EnterCode callback={onSubmit} isLoading={isLoading} reset={false}></EnterCode>
            <ButtonComponent text="Confirmar Email" clickFunction={onSubmit} loading={loadingSubmit} error={emailCodeError}/>
        </div>
    </NotAuthenticatedLayout>
    );
};

export default confirmEmail;