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
        <div className='flex flex-col bg-center w-screen h-screen'>
            <div className="flex flex-col justify-center bg-center items-center flex-grow w-full">
                <Image src={image} width={width} height={height} alt="LoginImage" priority={true} />
                {children}
            </div>
            <div className='text-medium flex justify-center'>
                
            </div>
        </div>
    );
};

export default NotAuthenticatedLayout;