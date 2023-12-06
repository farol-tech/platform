import Link from "next/link";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

type ChartProps = {
    x: number;
    y: number;
};

type Props = {
    data: ChartProps[];
    hasButton?: boolean;
};

const Demand: React.FC<Props> = ({ data, hasButton = true }) => {
    return (
        <div className="inline-flex h-[579px] w-[551px] flex-col items-start justify-start gap-5 p-2.5">
            <div className="text-neutral-900 text-center font-['Ubuntu'] text-2xl font-medium">Previsão de Demanda</div>
            <div className="bg-orange-50 flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch rounded-[20px] p-5">
                <div className="inline-flex h-[19px] w-[491px] items-center justify-start gap-5">
                    <div className="text-neutral-900 shrink grow basis-0 text-center font-['Inter'] font-normal">
                        Demanda total (em R$) por unidade de tempo
                    </div>
                </div>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            {hasButton && (
                <div className="flex flex-grow flex-col items-center justify-center gap-2.5 self-stretch overflow-hidden">
                    <Link href={"/dashboard/demand"}>
                        <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 overflow-hidden rounded-[30px] bg-[#dbdfea] p-[15px]">
                            <p className="flex-shrink-0 flex-grow-0 text-left text-lg font-medium text-[#151515]">
                                Detalhes
                            </p>
                            <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 flex-grow-0"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M5.58597 12.293L6.99997 13.707L13.707 6.99997L6.99997 0.292969L5.58597 1.70697L9.87897 5.99997H0.292969V7.99997H9.87897L5.58597 12.293Z"
                                    fill="#151515"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Demand;
