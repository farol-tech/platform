import React from "react";

const Progress = () => {

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[ relative overflow-hidden gap-5">
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-center text-[#151515]">
        Progresso
      </p>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[350px] overflow-hidden gap-5 p-5 rounded-[20px] bg-[#abb4ce]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-[20px] bg-roxo_medio">
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
            Diminua seus estoques de segurança
          </p>
          <p className="self-stretch flex-grow w-40 h-[61px] text-xs text-left text-[#151515]">
            Envie dados sobre a variabilidade da demanda para obter um modelo ainda mais preciso e econômico
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#151515]">
            0/3 etapas | 0% concluído
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-2.5 overflow-hidden rounded-[5px] bg-[#eee9da]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-px h-2.5 overflow-hidden gap-2.5 rounded-[5px] bg-black" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Progress;