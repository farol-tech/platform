import { Single_Day } from 'next/font/google';
import React from 'react';
import CheckboxBigComponent from "~/components/common/checkbox/checkboxBig";

type InputProps = {
  title: string;
  single: boolean;
  choices: string[];
  error?: string;
  checked: boolean[];
  setCheckeds: CallableFunction;
  icon?: React.ReactNode;
};



const MultipleChoiceComponent: React.FC<InputProps> = ({ title, single, error, icon, checked, setCheckeds, choices }) => {
  return (
    <div className="flex flex-col space-y-2 text-preto">
      <label className="text-lg font-medium">{title}</label>
      <div className="relative">
        {choices.map((choice, index) => {
          return (
            <CheckboxBigComponent
              key={index}
              id={choice}
              label={choice}
              checked={checked[index]}
              setValue={(value: boolean) => {
                if (single) {
                  const newChecked = [...checked];
                  for (let i = 0; i < newChecked.length; i++) {
                    newChecked[i] = false;
                  }
                  newChecked[index] = value;
                  setCheckeds(newChecked);
                  return;
                }
                const newChecked = [...checked];
                newChecked[index] = value;
                setCheckeds(newChecked);
              }}
            />
          );
        })}

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

export default MultipleChoiceComponent;
