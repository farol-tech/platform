import React from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import InputComponent from "~/components/common/input/input";
import ButtonComponent from '~/components/common/button/buttton';

const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

type InputProps = {
  title: string;
  w: number;
  h: number;
  graph: string;
  setGraph: CallableFunction;
  error?: string;
  icon?: React.ReactNode;
};



const GraphComponent: React.FC<InputProps> = ({ title, w, h, graph, setGraph, error, icon }) => {

  const [noA, setNoA] = useState("")
  const [noB, setNoB] = useState("")

  const updateGraph = () => {

    if (noA == "" || noB == "") {
      return
    }
    let newGraph = graph
    newGraph = newGraph.replace("}", "")
    newGraph = newGraph + `"${noA}" -> "${noB}"; }`
    setGraph(newGraph)
  }

  return (
    <div className="flex flex-col space-y-2 text-preto">
      <label className="text-lg font-medium">{title}</label>
      <div className="flex align-middle items-center">
        <Graphviz dot={graph} options={{ width: w, height: h }} />        
      </div>

      <label className="text-lg font-medium">Insira uma relação entre duas filiais</label>
      
      <div className="flex flex-row items-center space-x-2">
        <div className="grow">
          <InputComponent
            title="Filial A"
            type="text"
            placeholder="Filial"
            setValue={setNoA}
          />
        </div>
        <div className="grow">
          <InputComponent
            title="Filial B"
            type="text"
            placeholder="Filial"
            setValue={setNoB}
          />
        </div>
        
      </div>
      <div className="flex flex-row items-center space-x-2">
          <ButtonComponent text="Adicionar" clickFunction={updateGraph}/>
      </div>

      {error && <p className="text-vermelho text-xs mt-1">{error}</p>}
    </div>
  );
};

export default GraphComponent;
