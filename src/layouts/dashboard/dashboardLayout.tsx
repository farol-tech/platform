import React from 'react';
import NavbarComponent from '~/components/dashboard/navbar/navbar';

type Props = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {

    return (
        <div className='flex flex-row w-full h-screen py-5 bg-branco'>
        <NavbarComponent />
        <div className='h-full w-4/5 bg-center fle flex-col justify-start items-start flex-grow overflow-hidden gap-[30px] px-[25px]' style={{overflowY: 'scroll' }}>
            { children }
        </div>

    </div>
    );
};

export default DashboardLayout;
