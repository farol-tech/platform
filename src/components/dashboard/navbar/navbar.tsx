"use client"
import React from 'react';
import { signOut } from "next-auth/react";
import Image from 'next/image';
import { BiUserCircle, BiGridAlt, BiBarChartAlt2, BiCube, BiCog, BiBell, BiLogOutCircle } from 'react-icons/bi'
import Link from 'next/link';

type Props = {
    name: string;
};



const NavbarComponent: React.FC<Props> = ({ name }) => {

    const links = [
        { "name": "Dashboard", "icon": <BiGridAlt className='text-cinza_medio' size={24} />, "url": "/dashboard/overview" },
        { "name": "Previsão de Demanda", "icon": <BiBarChartAlt2 className='text-cinza_medio' size={24} />, "url": "/dashboard/demand"},
        { "name": "Otimização de Inventário", "icon": <BiCube className='text-cinza_medio' size={24} />, "url": "/dashboard/invopt"},
        { "name": "Configurações", "icon": <BiCog className='text-cinza_medio' size={24} />, "url": "/dashboard/settings"},
        { "name": "Notificações", "icon": <BiBell className='text-cinza_medio' size={24} />, "url": "/dashboard/notifications"},
    ]

    return (
        <div className='h-full w-1/6 border-r-2 border-cinza_claro flex flex-col'>
            <div className='flex flex-col gap-3 w-full items-center mb-8'>
                <Image src="/logo_nome.svg" width={98} height={32} alt="logo" />
                <BiUserCircle size={80} color={"#767D86"} />
                <p className="text-lg text-cinza_medio">{name}</p>
            </div>
            <div className='flex flex-col gap-3 flex-grow pl-6'>
                {links.map(({ name, icon, url }) => {
                    return (
                        <Link href={url}>
                            <div className='flex flex-row gap-2 items-center'>
                                {icon}
                                <p className='text-lg text-cinza_medio font-medium'>{name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-row gap-2 items-center pl-6 cursor-pointer w-fit'
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
                <BiLogOutCircle className='text-azul_escuro' size={24} />
                <p className='text-lg text-azul_escuro font-medium'>Sair</p>
            </div>
        </div>
    );
};

export default NavbarComponent;