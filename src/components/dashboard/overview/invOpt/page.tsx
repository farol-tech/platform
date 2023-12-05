import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    time: 1,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    time: 2,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    time: 3,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    time: 4,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    time: 5,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    time: 6,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    time: 7,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const InvOpt = ()  => {

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-5 p-2.5">
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-center text-[#151515]">
        Otimização de Inventário
      </p>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-5 p-5 rounded-[20px] bg-[#ebedf3]">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="flex-grow w-[418.82px] text-base text-left text-[#151515]">
            Nível de serviço (Beta) por período
          </p>
          <svg
            width={19}
            height={17}
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M2.60961 16.5H16.8127C17.7984 16.5 18.6 15.7027 18.6 14.7222V2.27778C18.6 1.29733 17.7984 0.5 16.8127 0.5H2.60961C1.62389 0.5 0.822266 1.29733 0.822266 2.27778V14.7222C0.822266 15.7027 1.62389 16.5 2.60961 16.5ZM2.60961 14.7222V10.2778H6.18429V14.7222H2.60961ZM11.5463 4.05556V8.5H7.97163V4.05556H11.5463ZM6.18429 4.05556V8.5H2.60961V4.05556H6.18429ZM7.97163 14.7222V10.2778H11.5463V14.7222H7.97163ZM13.3336 14.7222V10.2778H16.8136V14.7222H13.3336ZM16.8127 8.5H13.3336V4.05556H16.8127V8.5Z"
              fill="#151515"
            />
          </svg>
          <svg
            width={15}
            height={17}
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M7.0001 11.7H8.6001V4.5H11.0001L7.8001 0.5L4.6001 4.5H7.0001V11.7Z"
              fill="#151515"
            />
            <path
              d="M2.2001 16.5H13.4001C14.2825 16.5 15.0001 15.7824 15.0001 14.9V7.7C15.0001 6.8176 14.2825 6.1 13.4001 6.1H10.2001V7.7H13.4001V14.9H2.2001V7.7H5.4001V6.1H2.2001C1.3177 6.1 0.600098 6.8176 0.600098 7.7V14.9C0.600098 15.7824 1.3177 16.5 2.2001 16.5Z"
              fill="#151515"
            />
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[483px] h-[340px] relative overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={397}
                height={309}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-[15px] rounded-[30px] bg-[#dbdfea]">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#151515]">
              Detalhes
            </p>
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M5.58597 12.293L6.99997 13.707L13.707 6.99997L6.99997 0.292969L5.58597 1.70697L9.87897 5.99997H0.292969V7.99997H9.87897L5.58597 12.293Z"
                fill="#151515"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvOpt;