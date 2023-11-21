import React from 'react';

type CheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
  setValue: CallableFunction;
};

const CheckboxBigComponent: React.FC<CheckboxProps> = ({ id, label, checked = false, setValue }) => {
  return (
    <div className="flex items-center text-preto my-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {setValue(e.target.checked)}}
        className="form-checkbox h-6 w-6 azul_escuro transition duration-1000 ease-in-out"
      />
      <label htmlFor={id} className="ml-2 block text-lg leading-5 text-preto">
        {label}
      </label>
    </div>
  );
};

export default CheckboxBigComponent;
