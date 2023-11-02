import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type ChartProps = {
    x: number;
    y: number;
};

type Props = {
    data: ChartProps[];
};

const Demand: React.FC<Props> = ({ data }) => {
    return (
        <div className="flex flex-col items-start justify-start gap-5 overflow-hidden p-2.5">
            <p className="flex-shrink-0 flex-grow-0 text-center text-2xl font-medium text-[#151515]">
                Previsão de Demanda
            </p>
            <div>
                <h2 className="text-center">Demanda total (em R$) por unidade de Tempo</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data}>
                        <Line type="monotone" dataKey="y" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="x" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Demand;
