import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

type InputProps = {
  title: string;
  //type: 'text' | 'password' | 'email' | 'number';
  placeholder: string;
  error?: string;
  setValue: CallableFunction;
  options: Array<{value:string, label:string}>;
};

const base = {
    borderRadius: '0px',
    borderColor: '#000'
}
const customStyles = {
    control: (base,state) => ({
      ...base,
      borderColor: 'black',
      borderRadius: 0,
      padding: 2,
      boxShadow: state.isFocused ? 'none' : 'none',
      '&:hover' : {
        borderColor: 'black'
      }
    }),
    option: (base,state) => ({
        ...base,
        backgroundColor: state.isFocused ? '#116A7B' : null,
        color: state.isFocused ?  '#FFFFFF' : 'black'
    }),
    menu: (base) => ({
        ...base,
        // Outline border style for the menu dropdown
        border: '1px solid black',
    }),
  };


const SelectInputComponent: React.FC<InputProps> = ({ title/*, type*/, placeholder, error, setValue, options}) => {
  return (
    <div className="flex flex-col space-y-2 text-preto">
      <label className="text-lg font-medium">{title}</label>
      <div className="relative">
        <Select
            options={options}
            styles={customStyles}
            onChange={(e) => {setValue(e.value)}}
            placeholder={placeholder}
        />
      </div>
      {error && <p className="text-vermelho text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectInputComponent;