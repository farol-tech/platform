import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai'

type ButtonProps = {
  text: string;
  color?: string;
  text_color?: string;
  width?: string;
  border_radius?: string;
  loading: boolean;
  error?: string;
  clickFunction: () => void;
  icon?: React.ReactNode;
};

const ButtonComponent: React.FC<ButtonProps> = ({ text, color = "bg-azul_escuro", text_color = "text-branco", width = "w-full",
  border_radius = "", loading, error, clickFunction, icon }) => {
  return (
    <div className={`flex flex-col gap-2 items-start ${width} flex-grow-0 flex-shrink-0`}>
      <button
        className={`flex flex-row gap-2 items-center justify-center ${width} ${border_radius} ${color} cursor-pointer`}
        onClick={clickFunction}>
        <p className={`font-medium ${text_color} py-2`}>{text}</p>
        {loading && <span className='animate-spin'><AiOutlineLoading color="white"/></span>}
      </button>
      {error && <p className="text-vermelho text-xs mt-1">{error}</p>}
    </div>
  );
};

export default ButtonComponent;
