"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import MessagesLayout from '~/layouts/messagesLayout';

const LoginPage = () => {

    const router = useRouter();

    const onSubmit = async () => {
        router.push("/auth/signin")
    };

    return (
        <MessagesLayout image="/assets/festivities.svg" width={500} height={292} buttonOnClickFunc={onSubmit} buttonText='Fazer Login' message='A senha foi redefinida com sucesso'>
            
        </MessagesLayout>
    );
};

export default LoginPage;