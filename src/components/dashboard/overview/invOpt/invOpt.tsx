import React from 'react';
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

const InvestOpt = () => (
<div className="bg-[#FAFAF9] py-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <header className="items-stretch self-stretch border-r-[color:var(--roxo-claro,#DBDFEA)] flex flex-col  px-5 border-r-2 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ee01fe92c16ea4aad87897ef26cda1cb7de5be7e9be8b5faf9c4f4a2363e43?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-[3] object-contain object-center w-24 overflow-hidden self-center max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d95f7577db35a4a5bcc527fc3bc5eb921fffaae744777e074f1068538d49ea6?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-square object-contain object-center w-20 fill-gray-500 overflow-hidden self-center max-w-full mt-10"
            />
            <div className="text-gray-500 text-center text-lg font-medium self-center whitespace-nowrap mt-2.5">
              Felipe Spirandelli
            </div>
            <div className="items-stretch flex flex-col mt-10 pb-12 px-6 max-md:px-5">
              <div className="items-center flex justify-between gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fca1a9841a31d21293d9f8dace3459201237e8b8140ccdd66d4486455791e9ff?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                  className="aspect-square object-contain object-center w-[18px] fill-gray-500 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
                  Dashboard
                </div>
              </div>
              <div className="flex justify-between gap-3 mt-8 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/53660f0129e0c5f3d41df50f11464111b2ac645b231bff167517577fc978fb35?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                  className="aspect-[1.05] object-contain object-center w-5 fill-gray-500 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
                  Previsão de Demanda
                </div>
              </div>
              <div className="items-stretch flex justify-between gap-3 mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23aa70d1bcae9ef456cabbabffa1659b9376685d2d8f7cad425c0db9d1ea1bff?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                  className="aspect-[0.95] object-contain object-center w-5 fill-cyan-800 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-cyan-800 text-center text-lg font-medium grow whitespace-nowrap">
                  Otimização de Inventário
                </div>
              </div>
              <div className="flex justify-between gap-3 mt-8 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63698d09ed1ef655cd88597f33cf39cf033b6f05c3d110a6820daa3c1fa91c6?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                  className="aspect-[0.95] object-contain object-center w-[19px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
                  Configurações
                </div>
              </div>
              <div className="flex justify-between gap-3 mt-8 mb-80 pr-2.5 items-start max-md:mb-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/809bc833879824b2c179ae3a5062af347a89ffe9e16faf2363871430d0d7959f?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                  className="aspect-[0.9] object-contain object-center w-[18px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
                  Notificações
                </div>
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2.5 pl-6 pr-20 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/273ad0bd6601ab86bc2d463364cd056617b49905457512763dea29abda883688?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-cyan-800 text-left text-lg font-medium self-center grow whitespace-nowrap my-auto">
                Sair
              </div>
            </div>
        </header>
        <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch self-stretch flex flex-col pl-6 pr-4 max-md:max-w-full max-md:mt-10 max-md:pl-5">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-2.5">
                    <div className="text-neutral-900 text-center text-2xl font-medium whitespace-nowrap max-md:max-w-full">
                      Insights automatizados
                    </div>
                    <div className="items-start bg-stone-50 flex shrink-0 h-[287px] flex-col mt-5 rounded-3xl max-md:max-w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch self-stretch flex flex-col">
                        <div className="text-neutral-900 text-center text-2xl font-medium w-full">
                            Status
                        </div>
                        <div className="justify-center items-stretch bg-[#FFFFFF] flex w-full flex-col mt-5 px-5 py-6 rounded-3xl">
                            <div className="flex justify-between gap-2.5 items-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f101d0c19ca0ccf4bba3035c9d13081f16146fae0e3d7ee3cebac767f06085?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                                className="aspect-[0.88] object-contain object-center w-3.5 fill-neutral-900 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="items-stretch self-stretch flex justify-between gap-1">
                                <div className="text-neutral-900 text-center text-base font-medium grow whitespace-nowrap">
                                Última atualização de estoque
                                </div>
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ac22b2201da0f8431428c81d04604e3fe41687356982bf2df57795bd669432?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                                className="aspect-square object-contain object-center w-2.5 fill-neutral-900 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            </div>
                            <div className="text-neutral-900 text-center text-base whitespace-nowrap mt-2.5">
                            23/08/2023
                            </div>
                        </div>
                        <div className="justify-center items-stretch bg-[#FFFFFF] flex w-full flex-col mt-2.5 p-6 rounded-3xl max-md:pr-5">
                            <div className="flex justify-between gap-2.5 items-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ee7cf9a403112aa9d3c5399f00138340627b0c77ff0b117ef8ad57931cfabd?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                                className="aspect-[0.88] object-contain object-center w-3.5 fill-neutral-900 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="items-stretch self-stretch flex justify-between gap-1">
                                <div className="text-neutral-900 text-center text-base font-medium grow whitespace-nowrap">
                                Último benchmark do modelo{" "}
                                </div>
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1089e36e66dc66f9c6cca4c4b2abd06334f9868535720fd57f534e060e0d8ea4?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                                className="aspect-square object-contain object-center w-2.5 fill-neutral-900 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            </div>
                            <div className="text-neutral-900 text-center text-base whitespace-nowrap mt-2.5">
                            23/08/2023
                            </div>
                        </div>
                        <div className="justify-center items-stretch bg-[#FFFFFF] flex w-full flex-col mt-2.5 pl-5 py-3 rounded-3xl">
                            <div className="items-stretch flex justify-between gap-2.5 pr-4">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3365c8771245a24d72aa303ffe330a8a315c4213d2c6b5a2af9b25b9e0b69741?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                                className="aspect-square object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="items-stretch self-center flex gap-1 my-auto">
                                <div className="text-neutral-900 text-center text-base font-medium grow whitespace-nowrap">
                                Nível de Serviço médio
                                </div>
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8781533da34058317e166933bb0d539e241cde8a268c2c774fe08dc0da6cfb?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                                className="aspect-square object-contain object-center w-2.5 fill-neutral-900 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch self-stretch flex flex-col">
                        <header className="header text-neutral-900 text-2xl font-medium w-full">
                            Progresso
                        </header>
                        <div className="items-start bg-[#abb4ce] flex w-full flex-col mt-5 px-5 py-4 rounded-3xl">
                            <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1665f956cebd0d713db49fbf1296c748847ea35f98c9e5c87e98957ad9f874f?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                            className="aspect-[3.2] object-contain object-center w-40 fill-neutral-900 overflow-hidden self-center"
                            alt="Progress Image"
                            />
                            <div className="self-stretch text-neutral-900 text-lg font-bold mt-2.5">
                            Diminua seus estoques de segurança
                            </div>
                            <div className="self-stretch text-neutral-900 text-xs mt-2.5">
                            Envie dados sobre a variabilidade da demanda para obter um modelo ainda mais preciso e econômico
                            </div>
                            <div className="text-neutral-900 text-xs self-stretch whitespace-nowrap mt-2.5">
                            2/3 etapas | 66% concluído
                            </div>
                            <div className="items-stretch self-stretch bg-slate-200 flex flex-col justify-center mt-2.5 pr-14 rounded-md max-md:pr-5">
                            <div className="items-start bg-neutral-900 flex shrink-0 h-2.5 flex-col rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="items-stretch flex flex-col mt-8 p-2.5 max-md:max-w-full">
              <div className="text-neutral-900 text-center text-2xl font-medium whitespace-nowrap max-md:max-w-full">
                Análise de Desempenho
              </div>
              <div className="mt-5 p-5 rounded-3xl max-md:max-w-full bg-[#abb4ce]">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                  <div className="items-start self-stretch flex flex-col pb-12">
      <div className="text-neutral-900 text-left text-lg font-medium self-stretch w-full">
        Filtros
      </div>
      <div className="items-stretch self-stretch bg-[#E4E4E7] flex w-full  justify-between gap-0 mt-5 px-6 py-1.5 rounded-3xl max-md:px-5">
        <div className="text-neutral-900 text-base grow shrink basis-auto">
          Produtos
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8b8c75fcceb36c47c0c9c2cf63bb04ed2f66eb4af386976d0e4299ba781f12?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
          className="aspect-square object-contain object-center w-4 fill-neutral-900 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <div className="self-stretch flex w-full items-stretch justify-between gap-1.5 mt-1.5 pr-20 max-md:pr-5">
        <div className="bg-[#E4E4E7] flex justify-between gap-2.5 px-3 py-1.5 rounded-3xl items-start">
          <div className="text-neutral-900 text-center text-base font-light grow whitespace-nowrap">
            Produtos 1
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c05e49f7795eae027b1165cedc691a5a63060d4258fa8b549fad32a916775?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-5 fill-black overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="bg-[#E4E4E7] flex justify-between gap-2.5 px-3 py-1.5 rounded-3xl items-start">
          <div className="text-neutral-900 text-center text-base font-light grow whitespace-nowrap">
            Produtos 2
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c05e49f7795eae027b1165cedc691a5a63060d4258fa8b549fad32a916775?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-5 fill-black overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="self-stretch flex w-full items-stretch justify-between gap-1.5 mt-1.5 pr-20 max-md:pr-5">
        <div className="bg-[#E4E4E7] flex justify-between gap-2.5 px-3 py-1.5 rounded-3xl items-start">
          <div className="text-neutral-900 text-center text-base font-light grow whitespace-nowrap">
            Produtos 2
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c05e49f7795eae027b1165cedc691a5a63060d4258fa8b549fad32a916775?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-5 fill-black overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="bg-[#E4E4E7] flex justify-between gap-2.5 px-3 py-1.5 rounded-3xl items-start">
          <div className="text-neutral-900 text-center text-base font-light grow whitespace-nowrap">
            Produtos 2
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c05e49f7795eae027b1165cedc691a5a63060d4258fa8b549fad32a916775?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-5 fill-black overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="items-stretch self-stretch bg-[#E4E4E7] flex w-full justify-between gap-0 mt-5 px-6 py-1.5 rounded-3xl max-md:px-5">
        <div className="text-neutral-900 text-base grow shrink basis-auto">
          Famílias
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8b8c75fcceb36c47c0c9c2cf63bb04ed2f66eb4af386976d0e4299ba781f12?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
          className="aspect-square object-contain object-center w-4 fill-neutral-900 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <div className="items-stretch self-stretch bg-[#E4E4E7] flex w-full justify-between gap-0 mt-5 px-6 py-1.5 rounded-3xl max-md:px-5">
        <div className="text-neutral-900 text-base grow shrink basis-auto">
          Lojas
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8b8c75fcceb36c47c0c9c2cf63bb04ed2f66eb4af386976d0e4299ba781f12?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
          className="aspect-square object-contain object-center w-4 fill-neutral-900 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <div className="items-stretch content-start self-stretch flex-wrap bg-[#FFFFFF] flex justify-between gap-1.5 mt-1.5 pr-20 rounded-3xl max-md:pr-5">
        <div className="bg-[#E4E4E7] flex justify-between gap-2.5 px-3 py-1.5 rounded-3xl items-start">
          <div className="text-neutral-900 text-center text-base font-light grow whitespace-nowrap">
            Loja 1
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c05e49f7795eae027b1165cedc691a5a63060d4258fa8b549fad32a916775?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-5 fill-black overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="bg-[#E4E4E7] flex justify-between gap-1.5 px-3 py-1.5 rounded-3xl items-start">
          <div className="text-neutral-900 text-center text-base font-light grow whitespace-nowrap">
            Loja 2
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c05e49f7795eae027b1165cedc691a5a63060d4258fa8b549fad32a916775?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-5 fill-black overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="text-neutral-900 text-lg font-medium whitespace-nowrap justify-center items-stretch bg-[#E4E4E7] mt-5 mb-12 p-4 rounded-[30px] self-start max-md:mb-10">
        Exportar dados
      </div>
    </div>
                </div>
                  <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-center self-stretch bg-[#f6f6f6] flex flex-col w-full pt-5 pb-2 px-5 rounded-3xl max-md:max-w-full max-md:mt-10">
                      <div className="items-stretch self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        <div className="text-neutral-900 text-base grow shrink basis-auto max-md:max-w-full">
                          Nível de serviço (Beta) por período
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f24572ea179ac46cfbc1a63f757c6381a0d7a6c64cf25a6d8056261806ab9721?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                          className="aspect-[1.13] object-contain object-center w-[18px] fill-neutral-900 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17999ea4fc300fe8ebfa41289544aa06c614994a350e9e2ece61a39774adcadc?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                          className="aspect-[0.88] object-contain object-center w-3.5 fill-neutral-900 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
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
                      <div className="justify-center items-stretch bg-[#E4E4E7] flex gap-2.5 mt-2 p-4 rounded-[30px]">
                        <div className="text-neutral-900 text-lg font-medium grow whitespace-nowrap">
                          Detalhes
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62301dcd22f7f9669b5f2bde0be00518b2ec52589816a139dc8f072a5aefbf43?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
                          className="aspect-square object-contain object-center w-[13px] fill-neutral-900 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default InvestOpt;