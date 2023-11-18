import React from 'react';
import InputMask from 'react-input-mask';

type InputProps = {
  title: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder: string;
  error?: string;
  setValue: CallableFunction;
  icon?: React.ReactNode;
  mask: string;
};

const MaskedInputComponent: React.FC<InputProps> = ({ title, type, placeholder, error, icon, setValue, mask}) => {
  return (
    <div className="flex flex-col space-y-2 text-preto">
      <label className="text-lg font-medium">{title}</label>
      <div className="relative">
        <InputMask 
          maskChar={" "}
          mask={mask}
          maskPlaceholder={""}
          type={type} 
          placeholder={placeholder} 
          className="pr-5 pl-3 py-2 border w-full focus:outline-none border-cinza_medio"
          onChange={(e) => {setValue(e.target.value)}}
        />
        {icon && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-vermelho text-xs mt-1">{error}</p>}
    </div>
  );
};

export default MaskedInputComponent;

