import React from "react";



const Progress = () => {

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[ relative overflow-hidden gap-5">
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-center text-[#151515]">
        Progresso da Farol
      </p>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[287px] overflow-hidden gap-5 p-5 rounded-[20px] bg-[#abb4ce]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow relative gap-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-center text-[#f9f9f9]">
            Olá,
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[622px] text-4xl font-medium text-left">
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[622px] text-4xl font-medium text-left text-[#f9f9f9]">
              Conclua as{" "}
            </span>
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[622px] text-4xl font-medium text-left text-[#116a7b]">
              entrevistas
            </span>
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[622px] text-4xl font-medium text-left text-[#f9f9f9]">
              {" "}
              para obter resultados mais{" "}
            </span>
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[622px] text-4xl font-medium text-left text-[#116a7b]">
              precisos
            </span>
          </p>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow overflow-hidden gap-2.5">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-[15px] rounded-[30px] bg-[#f9f9f9]">
              <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#151515]">
                Como Melhorar
              </p>
              <svg
                width={14}
                height={15}
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M5.293 12.793L6.707 14.207L13.414 7.49997L6.707 0.792969L5.293 2.20697L9.586 6.49997H0V8.49997H9.586L5.293 12.793Z"
                  fill="#151515"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[20px] bg-[#f7f5eb]">
          <svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M10.5263 50H2.63158C1.93364 50 1.26429 49.7227 0.770772 49.2292C0.277255 48.7357 0 48.0664 0 47.3684V26.3158C0 25.6179 0.277255 24.9485 0.770772 24.455C1.26429 23.9615 1.93364 23.6842 2.63158 23.6842H10.5263C11.2243 23.6842 11.8936 23.9615 12.3871 24.455C12.8806 24.9485 13.1579 25.6179 13.1579 26.3158V47.3684C13.1579 48.0664 12.8806 48.7357 12.3871 49.2292C11.8936 49.7227 11.2243 50 10.5263 50ZM28.9474 50H21.0526C20.3547 50 19.6853 49.7227 19.1918 49.2292C18.6983 48.7357 18.4211 48.0664 18.4211 47.3684V2.63158C18.4211 1.93364 18.6983 1.26429 19.1918 0.770772C19.6853 0.277255 20.3547 0 21.0526 0H28.9474C29.6453 0 30.3147 0.277255 30.8082 0.770772C31.3017 1.26429 31.5789 1.93364 31.5789 2.63158V47.3684C31.5789 48.0664 31.3017 48.7357 30.8082 49.2292C30.3147 49.7227 29.6453 50 28.9474 50ZM47.3684 50H39.4737C38.7757 50 38.1064 49.7227 37.6129 49.2292C37.1194 48.7357 36.8421 48.0664 36.8421 47.3684V18.4211C36.8421 17.7231 37.1194 17.0538 37.6129 16.5602C38.1064 16.0667 38.7757 15.7895 39.4737 15.7895H47.3684C48.0664 15.7895 48.7357 16.0667 49.2292 16.5602C49.7227 17.0538 50 17.7231 50 18.4211V47.3684C50 48.0664 49.7227 48.7357 49.2292 49.2292C48.7357 49.7227 48.0664 50 47.3684 50Z"
              fill="#151515"
            />
          </svg>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-lg font-bold text-left text-[#151515]">
            Previsão de Demanda
          </p>
          <p className="self-stretch flex-grow w-40 h-[61px] text-xs text-left text-[#151515]">
            Integre os dados necessários para obter acesso a modelos automáticos
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#151515]">
            0/3 etapas | 0% concluído
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-2.5 overflow-hidden rounded-[5px] bg-[#eee9da]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-px h-2.5 overflow-hidden gap-2.5 rounded-[5px] bg-black" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[20px] bg-[#ebedf3]">
          <svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M48.515 10.2155L26.015 0.215634C25.6951 0.0734608 25.3489 0 24.9988 0C24.6486 0 24.3024 0.0734608 23.9825 0.215634L1.4825 10.2155C1.4325 10.238 1.3975 10.2755 1.3475 10.303C1.2775 10.338 1.2025 10.3605 1.1375 10.403C1.0825 10.4405 1.04 10.488 0.9875 10.528C0.804757 10.6638 0.644472 10.8275 0.5125 11.013C0.4625 11.083 0.41 11.1455 0.365 11.2155C0.290592 11.3476 0.227049 11.4856 0.175 11.628C0.1525 11.6955 0.1175 11.758 0.0975001 11.8255C0.0347138 12.0451 0.00191637 12.2721 0 12.5005V37.5002C0 38.4901 0.58 39.3826 1.485 39.7851L23.985 49.785C24.31 49.93 24.655 50 25 50C25.3481 49.9911 25.6904 49.9093 26.005 49.76L26.015 49.785L48.515 39.7851C48.9572 39.589 49.333 39.2687 49.5966 38.863C49.8602 38.4574 50.0004 37.9839 50 37.5002V12.5005C50.0004 12.0167 49.8602 11.5432 49.5966 11.1376C49.333 10.732 48.9572 10.4116 48.515 10.2155ZM25 5.23807L41.345 12.5005L25 19.7629L21.73 18.3104L8.6575 12.5005L25 5.23807ZM27.5 43.6526V24.1253L45 16.3479V35.8777L27.5 43.6526Z"
              fill="#151515"
            />
          </svg>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-40 text-lg font-bold text-left text-[#151515]">
            Otimização de Inventário
          </p>
          <p className="self-stretch flex-grow w-40 h-[61px] text-xs text-left text-[#151515]">
            Integre os dados necessários para obter acesso a modelos automáticos
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#151515]">
            0/3 etapas | 0% concluído
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-2.5 overflow-hidden rounded-[5px] bg-[#dbdfea]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-px h-2.5 overflow-hidden gap-2.5 rounded-[5px] bg-black" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Progress;