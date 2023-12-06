import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Select from "react-select";
import { useState } from 'react';
import { DropdownIndicator } from "react-select/dist/declarations/src/components/indicators";

/*type InputProps = {
    placeholder: string;
  };

const DashInput: React.FC<InputProps> = ({placeholder}) => {
    return (
        <div className="flex flex-col w-full gap-5 text-base">
            <div className=" flex flex-row rounded-2xl bg-roxo_claro p-1 w-full font-normal relative">
                <p className="ml-4">{placeholder}</p>
                <BiSearchAlt className="absolute right-4 bottom-2"/>
            </div>
        </div>
    );
}*/

//export default DashInput;


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
      background:'#DBDFEA',
      borderRadius:'20px',
      padding: 1,
      boxShadow: state.isFocused ? 'none' : 'none',
      '&:hover' : {
        borderColor: 'black'
      }
    }),
    option: (base,state) => ({
        ...base,
        backgroundColor: state.isFocused ? '#DBDFEA' : null,
        color:'black'
    }),
    menu: (base) => ({
        ...base,
        // Outline border style for the menu dropdown
        border: '0px solid black',
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: '#ABB4CE',
        borderRadius:'10px'
    }),
    multiValueRemove: (base, state) => ({
        ...base,
        '&:hover': {
            backgroundColor: 'transparent', // this ensures the background remains unchanged on hover
            color: 'grey' // this ensures the color of "X" remains unchanged on hover
        }
    }),
  };

  const SelectInputComponent: React.FC<InputProps> = ({ title, placeholder, error, setValue, options }) => {
    return (
      <div className="flex flex-col space-y-2 text-preto">
        <label className="text-lg font-medium ml-5">{title}</label>
        <div className="relative">
            <Select
                isMulti
                isSearchable
                options={options}
                styles={customStyles}
                onChange={(e) => {
                    if(e && e.length > 0) {
                        setValue(e.map(item => item.value));
                    } else {
                        setValue([]);
                    }
                }}
                placeholder={placeholder}
                components={{
                    DropdownIndicator: (props) => {
                        return props.hasValue ? null:<BiSearchAlt className="absolute right-4"/>;
                    },
                    IndicatorSeparator: () => null
                }}
            />
      </div>
      {error && <p className="text-vermelho text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectInputComponent;