"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import MessagesLayout from '~/layouts/messagesLayout';

const Custom404 = () => {

    const router = useRouter();

    const onSubmit = async () => {
        router.push("/auth/signin")
    };

    return (
        <MessagesLayout image="/assets/unexpected.svg" width={500} height={292} buttonOnClickFunc={onSubmit} buttonText='Fazer Login' message='Erro 404 - Página não encontrada Yoki'>
            
        </MessagesLayout>
    );
};

export default Custom404;

// export default function Custom404() {
//     return <h1>404 - Page Not Founde</h1>
//   }