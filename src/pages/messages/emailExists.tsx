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
        <MessagesLayout image="/assets/unexpected.svg" width={500} height={292} buttonOnClickFunc={onSubmit} buttonText='Fazer Login' message='Ocorreu um erro: Email ou CNPJ já cadastrados' isLoading={loading}>
            
        </MessagesLayout>
    );
};

export default LoginPage;