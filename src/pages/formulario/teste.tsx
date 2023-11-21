import Head from 'next/head'
import InputComponent from "~/components/common/input/input";
import { useState } from 'react';
import MultipleChoiceComponent from '~/components/common/multiple_choice/multiple_choice';
import GraphComponent from '~/components/common/graph/graph';

export default function Home() {


    const [checked1a, setChecked1a] = useState([false, false, false, false]);
    const [checked1b, setChecked1b] = useState([false, false, false, false]);

    const [checked2a, setChecked2a] = useState([false, false, false, false, false, false]);
    const [checked2b, setChecked2b] = useState([false, false, false, false, false]);

    const [graph, setGraph] = useState(`digraph { }`);
  
    const MarketingFields = () =>(
        <section className="flex flex-col gap-1 mb-8 w-full">
            <div className="flex flex-col gap-1 mb-8 w-full align-middle items-center">
            <h2>Marketing</h2>
            </div>
            <MultipleChoiceComponent
                title="1) Na sua percepção, as atuais campanhas de marketing afetam a demanda?"
                single={true}
                choices={["Afetam Muito", "Afetam", "Afetam Pouco", "Não Afetam"]}
                checked={checked1a}
                setCheckeds={setChecked1a}
            />
            <MultipleChoiceComponent
                title="2) Na sua percepção, as promoções afetam a demanda?"
                single={true}
                choices={["Afetam Muito", "Afetam", "Afetam Pouco", "Não Afetam"]}
                checked={checked1b}
                setCheckeds={setChecked1b}
            />
        </section>
    )

    const ExecutivosFields = () => (
        <section className="flex flex-col gap-1 mb-8 w-full">
            <div className="flex flex-col gap-1 mb-8 w-full align-middle items-center">
            <h2>Executivo</h2>
            </div>
            
            <MultipleChoiceComponent
                title="1) Na sua percepção, quais são os maiores drivers de preço? Pode selecionar mais de um."
                single={false}
                choices={["Dolar", "Petroleo", "Produção agrícola", "Clima", "Demanda", "Outros"]}
                checked={checked2a}
                setCheckeds={setChecked2a}
            />
            <MultipleChoiceComponent
                title="2) Quais os principais drivers de demanda?"
                single={true}
                choices={["Preço", "Período do mês", "Período do ano", "Sazonalidade", "Outros"]}
                checked={checked2b}
                setCheckeds={setChecked2b}
            />
            <GraphComponent
                title="Desenhe a relação das filiais"
                w={600}
                h={300}
                graph= {graph}
                setGraph={setGraph}
            />
        </section>
    )

    const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
    const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
    
    const Navigation = () =>(
        <section className="w-full justify-between mt-4 flex flex-row-reverse">
            {
                !step &&
                <button type="button" className="flex flex-row items-center text-xs font-bold" onClick={()=>{setStep(step+1)}}>
                <img src={rightArrow}/>
                Executivo
                </button>
            }
            {
                step == 1 &&
                <button type="button" className="flex flex-row items-center text-xs font-bold" onClick={()=>{setStep(step+1)}} disabled>
                Executivo
                </button>
            }
            <button type="submit" className="py-3 px-5 bg-blue-700 text-blue-100 rounded text-sm font-bold">
                Salvar
            </button>
            {
                step == 1 &&
                <button type="button" className="flex flex-row items-center text-xs font-bold" onClick={()=>{setStep(step-1)}}>
                    <img src={leftArrow}/>
                    Marketing
                </button>
            }
            {
                !step &&
                <button type="button" className="flex flex-row items-center text-xs font-bold" onClick={()=>{setStep(step-1)}} disabled>
                    Marketing
                </button>
            }
        </section>
    )

    const [step, setStep] = useState(0)

    const fieldGroups =[
        <MarketingFields/>,
        <ExecutivosFields/>
    ]

    return (
        <div className="flex flex-col w-full h-screen items-center align-middle">
            <h1 className="text-2xl font-bold">Formulario Farol Tech</h1>
            <div className='py-4 flex flex-col gap-2 w-1/2 h-screen items-start align-middle'>
                {fieldGroups[step]}
                <Navigation/>
            </div>
        </div>
    )
}
