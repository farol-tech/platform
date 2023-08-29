"use client"
import React from 'react';
import { signOut } from "next-auth/react";


const NavbarComponent: React.FC = () => {
    return (
        <div className='h-full w-1/5 border-r-2 border-cinza_claro'>
            <button className='bg-vermelho' onClick={() => {signOut({ callbackUrl: '/auth/signin' })}}> Sair </button>
        </div>
    );
};

export default NavbarComponent;