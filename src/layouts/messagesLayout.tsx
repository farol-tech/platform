import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import ButtonComponent from '~/components/common/button/buttton';

type Props = {
    children: React.ReactNode;
    image: string;
    width: number;
    height: number;
    buttonOnClickFunc: () => void;
    buttonText: string;
    message: string;
};

const messagesLayout: React.FC<Props> = ({ children, image, width, height, buttonOnClickFunc, buttonText, message}) => {

    return (
        <div className='flex flex-col w-screen h-screen bg-center justify-center items-center'>
            <div className="py-4 flex flex-col gap-2 w-1/3 justify-center items-center">
                <Image src={image} width={width} height={height} alt="LoginImage" priority={true} />
            </div>
            <div className="py-4 flex flex-col gap-2 w-1/3 justify-center items-center">
                <p>{message}</p>
            </div>
            <div className="py-4 flex flex-col gap-2 w-1/3 justify-center items-center">
                <ButtonComponent text={buttonText} clickFunction={buttonOnClickFunc}/>
            </div>
        </div>
    );
};

export default messagesLayout;
