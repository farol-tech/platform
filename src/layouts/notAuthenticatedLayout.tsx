import React from 'react';
import Image from 'next/image'

type Props = {
    children: React.ReactNode;
    image: string;
    width: number;
    height: number;
};

const NotAuthenticatedLayout: React.FC<Props> = ({ children, image, width, height }) => {

    return (
        <div className='flex flex-row w-screen h-screen'>
            <div className="flex flex-col justify-center items-center h-full w-2/5">
                {children}
            </div>
            <div className='h-screen w-3/5 bg-branco bg-center flex items-center justify-center'>
                <Image src={image} width={width} height={height} alt="LoginImage" priority={true} />
            </div>
        </div>
    );
};

export default NotAuthenticatedLayout;
