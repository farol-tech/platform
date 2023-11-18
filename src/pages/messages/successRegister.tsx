"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import MessagesLayout from '~/layouts/messagesLayout';

const LoginPage = () => {
    const [loading, setLoadingSubmit] = useState(false);
    const router = useRouter();
    
    const onSubmit = async () => {
        setLoadingSubmit(true);
        router.push("/auth/signin");
        setLoadingSubmit(false);
    };

    return (
        <MessagesLayout isLoading={loading} image="/assets/festivities.svg" width={500} height={292} buttonOnClickFunc={onSubmit} buttonText='Fazer Login' message='O cadastro foi um sucesso'>
            
        </MessagesLayout>
    );
};

export default LoginPage;