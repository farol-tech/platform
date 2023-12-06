import { useState, useEffect } from 'react';
import MultipleChoiceComponent from '~/components/common/multiple_choice/multiple_choice';
import GraphComponent from '~/components/common/graph/graph';
import { useSession } from 'next-auth/react';
import { api } from '~/utils/api';
import FileInputComponent from '~/components/common/file/file';
import DashboardLayout from "~/layouts/dashboard/dashboardLayout";

export default function Home() {
    const { data: session } = useSession();
    let id_usuario = session?.user?.id as string;

    if (id_usuario == undefined) {
        id_usuario = "1";
    }

    const [checked1a, setChecked1a] = useState([false, false, false, false]);
    const [checked1b, setChecked1b] = useState([false, false, false, false]);

    const [checked2a, setChecked2a] = useState([false, false, false, false, false, false]);
    const [checked2b, setChecked2b] = useState([false, false, false, false, false]);

    const [graph, setGraph] = useState(`digraph { }`);

    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string>("");

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    }

    const formsDB = api.forms.getFormsByUserId.useQuery({userId: id_usuario})
    const apagarDadosMutate = api.forms.deleteFormsByUserId.useMutation();
    const salvarDadosMutate = api.forms.addForm.useMutation();

    const arr2str = (arr: boolean[]) => {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            str += arr[i] ? "1" : "0";
        }
        return str;
    }

    const str2arr = (str: string) => {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i] == "1");
        }
        return arr;
    }

    const salvarForms = () => {
        apagarDadosMutate.mutate({
            userId: id_usuario,
        });

        // Transforma os arrays de booleanos em uma string de 0s e 1s
        const str1a = arr2str(checked1a);
        const str1b = arr2str(checked1b);
        const str2a = arr2str(checked2a);
        const str2b = arr2str(checked2b);

        // Salva os dados no banco de dados
        salvarDadosMutate.mutate({
            userId: id_usuario,
            resp1: str1a,
            resp2: str1b,
            resp4: str2a,
            resp5: str2b,
            resp6: graph,
        });
    }

    useEffect(() => {
        if (formsDB.data) {
            const forms = formsDB.data[0];
            if (forms == undefined) {
                return;
            }
            setChecked1a(str2arr(forms.resp1));
            setChecked1b(str2arr(forms.resp2));
            setChecked2a(str2arr(forms.resp4));
            setChecked2b(str2arr(forms.resp5));
            setGraph(forms.resp6);
        }
    }, [formsDB.data]);
  
    const MarketingFields = () =>(
        <section className="flex flex-col gap-1 mb-8 w-full">
            <div className="flex flex-col gap-1 mb-8 w-full align-middle items-center">
            <h2>Sugerimos que essa seção seja respondida pelo time de marketing</h2>
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
            <label className="text-lg font-medium">3) Consegue enviar dados de gastos de marketing por mês? Envie quantos meses quantos tiver e desconsidere gasto com pessoas </label>
            <FileInputComponent
                id="fileInput"
                onChange={onFileChange}
                error={fileError}
            />
        </section>
    )

    const ExecutivosFields = () => (
        <section className="flex flex-col gap-1 mb-8 w-full">
            <div className="flex flex-col gap-1 mb-8 w-full align-middle items-center">
            <h2>Sugerimos que essa seção seja respondida pelo time de executivos</h2>
            </div>
            
            <MultipleChoiceComponent
                title="1) Na sua percepção, quais são os maiores drivers de preço? Pode selecionar mais de um."
                single={false}
                choices={["Dolar", "Petroleo", "Produção agrícola", "Clima", "Demanda", "Outros"]}
                checked={checked2a}
                setCheckeds={setChecked2a}
            />
            <MultipleChoiceComponent
                title="2) Quais os principais drivers de demanda? Pode selecionar mais de um."
                single={false}
                choices={["Preço", "Período do mês", "Período do ano", "Sazonalidade", "Outros"]}
                checked={checked2b}
                setCheckeds={setChecked2b}
            />
            <GraphComponent
                title="3) Desenhe a relação das filiais"
                w={900}
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
            <button type="button" className="py-3 px-5 bg-blue-700 text-blue-100 rounded text-sm font-bold" onClick={()=>{salvarForms()}}>
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
        <DashboardLayout>
            <div className="flex flex-col w-full h-screen items-center align-middle">
                <h1 className="text-2xl font-bold py-5 my-2">Formulario Farol Tech</h1>
                <div className='py-4 flex flex-col gap-2 w-1/2 h-screen items-start align-middle'>
                    {fieldGroups[step]}
                    <Navigation/>
                </div>
            </div>
        </DashboardLayout>
    )
}
