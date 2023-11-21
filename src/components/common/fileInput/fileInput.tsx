import React from 'react';

type InputProps = {
    id: string;
    onChange: CallableFunction;
    accept?: string;
    error?: string;
};

const FileInputComponent: React.FC<InputProps> = ({ id, onChange, accept, error}) => {
  return (
    <div className="flex flex-col space-y-2 text-preto">
        <label className="text-lg font-medium">Anexe o Arquivo</label>
        <div className="relative">
            <input
                type="file"
                className="pr-5 pl-3 py-2 border w-full focus:outline-none border-cinza_medio"
                onChange={(e) => {onChange(e)}}
                placeholder='Selecione um arquivo...'
            />
        </div>
        {error && <p className="text-vermelho text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FileInputComponent;