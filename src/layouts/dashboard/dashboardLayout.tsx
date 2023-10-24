import React from 'react';
import NavbarComponent from '~/components/dashboard/navbar/navbar';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';

type Props = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const { data: session, status } = useSession()

    if (status === "unauthenticated") {
        router.push("/auth/signin");
        return null;
    }
    if(status == "loading"){
        return <p>Loading</p>
    }

    return (
        <div className='flex flex-row w-full h-screen py-8 bg-branco'>
            <NavbarComponent name={session?.user.name || "Loading"}/>
            <div className='h-full w-5/6 bg-center fle flex-col justify-start items-start flex-grow overflow-hidden gap-[30px] px-[25px]'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
