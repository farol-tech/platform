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
      <div className="relative">
        <Graphviz dot={graph} options={{ width: w, height: h }} />        

        {icon && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {icon}
          </div>
        )}
      </div>

      <label className="text-lg font-medium">Insira uma Transição</label>
      
      <div className="flex flex-row items-center space-x-2">
        <div className="grow">
          <InputComponent
            title="Nó A"
            type="text"
            placeholder="Nó A"
            setValue={setNoA}
          />
        </div>
        <div className="grow">
          <InputComponent
            title="Nó B"
            type="text"
            placeholder="Nó B"
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
