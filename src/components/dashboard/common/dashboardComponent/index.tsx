import React, { ReactNode } from "react";
import DashInput from "~/components/dashboard/common/dashInput";
import { useState } from "react";

export type FilterOptionsProps = {
        products: string[];
        families: string[];
        stores: string[];
}

type DashboardComponentProps = {
    title: string;
    options: FilterOptionsProps;
    children: ReactNode;
};

const DashboardComponent: React.FC<DashboardComponentProps> = ({ title, options, children }) => {
    const [produtos, setProdutos] = useState([]);
    const [produtosErro, setProdutosErro] = useState("");
    const [familias, setFamilias] = useState([]);
    const [familiasErro, setFamiliasErro] = useState("");
    const [lojas, setLojas] = useState([]);
    const [lojasErro, setLojasErro] = useState("");

    const OnSubmit = () => {
        if (validate()) {
            console.log("validado");
            //Continuar lógica de submit
        }
    };

    const validate = () => {
        let val = true;
        if (produtos.length == 0) {
            setProdutosErro("Selecione ao menos um produto");
            val = false;
        } else setProdutosErro("");

        if (familias.length == 0) {
            setFamiliasErro("Selecione ao menos uma família");
            val = false;
        } else setFamiliasErro("");

        if (lojas.length == 0) {
            setLojasErro("Selecione ao menos uma loja");
            val = false;
        } else setLojasErro("");

        return val;
    };

    return (
        <div>
            <p className="text-2xl font-medium text-[#151515]">{title}</p>
            <br />
            <div className="flex h-full w-full flex-row justify-between rounded-3xl bg-roxo_medio">
                <div className="ml-8 mt-8 w-2/5">
                    <p className="text-xl font-medium text-[#151515]">Filtros</p>
                    <br />
                    <div className="flex w-full flex-col gap-5">
                        <DashInput
                            placeholder="selecionar..."
                            options={options.products.map((product) => {
                                return {
                                    label: product,
                                    value: product,
                                };
                            })}
                            setValue={setProdutos}
                            title="Produtos"
                            error={produtosErro}
                        />

                        <DashInput
                            placeholder="selecionar..."
                            options={options.families.map((family) => {
                                return {
                                    label: family,
                                    value: family,
                                };
                            })}
                            setValue={setFamilias}
                            title="Famílias"
                            error={familiasErro}
                        />

                        <DashInput
                            placeholder="selecionar..."
                            options={options.stores.map((store) => {
                                return {
                                    label: store,
                                    value: store,
                                };
                            })}
                            setValue={setLojas}
                            title="Lojas"
                            error={lojasErro}
                        />
                        <button
                            className="mt-5 w-40 rounded-3xl bg-roxo_claro p-3 text-center font-medium hover:border"
                            onClick={OnSubmit}
                        >
                            Exportar Dados
                        </button>
                    </div>
                </div>
                <div className="ml-5 mr-5 mt-5 w-3/5">{children}</div>
            </div>
        </div>
    );
};

export default DashboardComponent;
