import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

type Props = {
    children: React.ReactNode;
    image: string;
    width: number;
    height: number;
};

const NotAuthenticatedLayout: React.FC<Props> = ({ children, image, width, height }) => {

    return (
        <div>
            
            <div className='flex flex-row w-screen h-screen'>
                <div className="flex flex-col justify-between items-center h-full w-2/5 overflow-auto">
                    <img src='/assets/logo.svg' className='mr-auto mt-8 ml-16'/>
                    <div className="flex flex-col justify-center items-center flex-grow w-full">
                        {children}
                    </div>
                    <div className='text-medium flex flex-row justify-between w-1/2'>
                        <Link href={"/general/terms_conditions"}>Termos e condições </Link>
                        <Link href={"/general/privacy"}>Política de privacidade</Link>
                    </div>
                </div>
                <div className='w-3/5 bg-branco bg-center flex items-center justify-center h-screen'>
                    <Image src={image} width={width} height={height} alt="LoginImage" priority={true} />
                </div>
            </div>
        </div>
    );
};

export default NotAuthenticatedLayout;
