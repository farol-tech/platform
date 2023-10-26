import React from 'react';
import DashInput from '~/components/dashboard/invOpt/dashInput/page';
import InvOpt from '../../overview/invOpt/page';
import { useState } from 'react';

const DashboardComponent: React.FC = (userData) => {

    const [produtos,setProdutos] = useState([]);
    const [produtosErro, setProdutosErro] = useState("");
    const [familias,setFamilias] = useState([]);
    const [familiasErro, setFamiliasErro] = useState("");
    const [lojas,setLojas] = useState([]);
    const [lojasErro, setLojasErro] = useState("");
    const options = {
        familias: [
            {value: "Acre", label: "Acre"},
            {value: "Alagoas", label: "Alagoas"},
            {value: "Amapá", label: "Amapá"},
            {value: "Amazonas", label: "Amazonas"},
            {value: "Bahia", label: "Bahia"},
            {value: "Ceará", label: "Ceará"},
            {value: "Distrito Federal", label: "Distrito Federal"},
            {value: "Espírito Santo", label: "Espírito Santo"},
            {value: "Goiás", label: "Goiás"},
            {value: "Maranhão", label: "Maranhão"},
            {value: "Mato Grosso", label: "Mato Grosso"},
            {value: "Mato Grosso do Sul", label: "Mato Grosso do Sul"},
            {value: "Minas Gerais", label: "Minas Gerais"},
            {value: "Pará", label: "Pará"},
            {value: "Paraíba", label: "Paraíba"},
            {value: "Paraná", label: "Paraná"},
            {value: "Pernambuco", label: "Pernambuco"},
            {value: "Piauí", label: "Piauí"},
            {value: "Rio de Janeiro", label: "Rio de Janeiro"},
            {value: "Rio Grande do Norte", label: "Rio Grande do Norte"},
            {value: "Rio Grande do Sul", label: "Rio Grande do Sul"},
            {value: "Rondônia", label: "Rondônia"},
            {value: "Roraima", label: "Roraima"},
            {value: "Santa Catarina", label: "Santa Catarina"},
            {value: "São Paulo", label: "São Paulo"},
            {value: "Sergipe", label: "Sergipe"},
            {value: "Tocantins", label: "Tocantins"}
        ],
        produtos: [
            {value: "Acre", label: "Acre"},
            {value: "Alagoas", label: "Alagoas"},
            {value: "Amapá", label: "Amapá"},
            {value: "Amazonas", label: "Amazonas"},
            {value: "Bahia", label: "Bahia"},
            {value: "Ceará", label: "Ceará"},
            {value: "Distrito Federal", label: "Distrito Federal"},
            {value: "Espírito Santo", label: "Espírito Santo"},
            {value: "Goiás", label: "Goiás"},
            {value: "Maranhão", label: "Maranhão"},
            {value: "Mato Grosso", label: "Mato Grosso"},
            {value: "Mato Grosso do Sul", label: "Mato Grosso do Sul"},
            {value: "Minas Gerais", label: "Minas Gerais"},
            {value: "Pará", label: "Pará"},
            {value: "Paraíba", label: "Paraíba"},
            {value: "Paraná", label: "Paraná"},
            {value: "Pernambuco", label: "Pernambuco"},
            {value: "Piauí", label: "Piauí"},
            {value: "Rio de Janeiro", label: "Rio de Janeiro"},
            {value: "Rio Grande do Norte", label: "Rio Grande do Norte"},
            {value: "Rio Grande do Sul", label: "Rio Grande do Sul"},
            {value: "Rondônia", label: "Rondônia"},
            {value: "Roraima", label: "Roraima"},
            {value: "Santa Catarina", label: "Santa Catarina"},
            {value: "São Paulo", label: "São Paulo"},
            {value: "Sergipe", label: "Sergipe"},
            {value: "Tocantins", label: "Tocantins"}
        ],
        lojas: [
            {value: "Acre", label: "Acre"},
            {value: "Alagoas", label: "Alagoas"},
            {value: "Amapá", label: "Amapá"},
            {value: "Amazonas", label: "Amazonas"},
            {value: "Bahia", label: "Bahia"},
            {value: "Ceará", label: "Ceará"},
            {value: "Distrito Federal", label: "Distrito Federal"},
            {value: "Espírito Santo", label: "Espírito Santo"},
            {value: "Goiás", label: "Goiás"},
            {value: "Maranhão", label: "Maranhão"},
            {value: "Mato Grosso", label: "Mato Grosso"},
            {value: "Mato Grosso do Sul", label: "Mato Grosso do Sul"},
            {value: "Minas Gerais", label: "Minas Gerais"},
            {value: "Pará", label: "Pará"},
            {value: "Paraíba", label: "Paraíba"},
            {value: "Paraná", label: "Paraná"},
            {value: "Pernambuco", label: "Pernambuco"},
            {value: "Piauí", label: "Piauí"},
            {value: "Rio de Janeiro", label: "Rio de Janeiro"},
            {value: "Rio Grande do Norte", label: "Rio Grande do Norte"},
            {value: "Rio Grande do Sul", label: "Rio Grande do Sul"},
            {value: "Rondônia", label: "Rondônia"},
            {value: "Roraima", label: "Roraima"},
            {value: "Santa Catarina", label: "Santa Catarina"},
            {value: "São Paulo", label: "São Paulo"},
            {value: "Sergipe", label: "Sergipe"},
            {value: "Tocantins", label: "Tocantins"}
        ],
    };  

    const OnSubmit = () => {
        //Remover dps
        console.log(produtos);
        console.log(familias);
        console.log(lojas);

        if (validate()){
            console.log("validado");
            //Continuar lógica de submit
        }
        
    }

    const validate = () => {
        let val = true
        if (produtos.length == 0){
            setProdutosErro("Selecione ao menos um produto");
            val = false;
        }
        else setProdutosErro("");

        if (familias.length == 0){
            setFamiliasErro("Selecione ao menos uma família");
            val = false;
        }
        else setFamiliasErro("");

        if (lojas.length == 0){
            setLojasErro("Selecione ao menos uma loja");
            val = false;
        }
        else setLojasErro("");
        
        return val;
    }

    return (    
        <div>
            <p className='text-2xl font-medium text-[#151515]'>Análise de Desempenho</p>
            <br/>
            <div className='flex flex-row justify-between bg-roxo_medio w-full h-full rounded-3xl'>
                <div className='ml-8 w-2/5 mt-8'>
                    <p className='font-medium text-[#151515] text-xl'>Filtros</p>
                    <br/>
                    <div className='flex flex-col w-full gap-5' >
                        <DashInput 
                            placeholder="selecionar..." 
                            options={options.produtos} 
                            setValue={setProdutos}
                            title='Produtos'
                            error={produtosErro}
                        />
                            
                        <DashInput 
                            placeholder="selecionar..." 
                            options={options.familias}
                            setValue = {setFamilias}
                            title='Famílias'
                            error={familiasErro}
                        />
                        
                        <DashInput 
                            placeholder="selecionar..." 
                            options={options.lojas}
                            setValue={setLojas}
                            title='Lojas'
                            error={lojasErro}
                        />
                        <button className='bg-roxo_claro w-40 text-center p-3 rounded-3xl font-medium mt-5 hover:border'
                            onClick={OnSubmit}>
                                Exportar Dados
                        </button>
                        
                    </div>
                </div>
                <div className='w-3/5 mt-5 mr-5 ml-5'>
                    <InvOpt/>
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;