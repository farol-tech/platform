import React from "react";

const Progress = () => {
    return (
        <div className="h-[ relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-5 self-stretch overflow-hidden">
            <p className="flex-shrink-0 flex-grow-0 text-center text-2xl font-medium text-[#151515]">Progresso</p>
            <div className="relative flex w-[200px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-[20px] bg-[#f7f5eb] px-5 py-[15px]">
                <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 flex-grow-0"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M10.5263 50H2.63158C1.93364 50 1.26429 49.7227 0.770772 49.2292C0.277255 48.7357 0 48.0664 0 47.3684V26.3158C0 25.6179 0.277255 24.9485 0.770772 24.455C1.26429 23.9615 1.93364 23.6842 2.63158 23.6842H10.5263C11.2243 23.6842 11.8936 23.9615 12.3871 24.455C12.8806 24.9485 13.1579 25.6179 13.1579 26.3158V47.3684C13.1579 48.0664 12.8806 48.7357 12.3871 49.2292C11.8936 49.7227 11.2243 50 10.5263 50ZM28.9474 50H21.0526C20.3547 50 19.6853 49.7227 19.1918 49.2292C18.6983 48.7357 18.4211 48.0664 18.4211 47.3684V2.63158C18.4211 1.93364 18.6983 1.26429 19.1918 0.770772C19.6853 0.277255 20.3547 0 21.0526 0H28.9474C29.6453 0 30.3147 0.277255 30.8082 0.770772C31.3017 1.26429 31.5789 1.93364 31.5789 2.63158V47.3684C31.5789 48.0664 31.3017 48.7357 30.8082 49.2292C30.3147 49.7227 29.6453 50 28.9474 50ZM47.3684 50H39.4737C38.7757 50 38.1064 49.7227 37.6129 49.2292C37.1194 48.7357 36.8421 48.0664 36.8421 47.3684V18.4211C36.8421 17.7231 37.1194 17.0538 37.6129 16.5602C38.1064 16.0667 38.7757 15.7895 39.4737 15.7895H47.3684C48.0664 15.7895 48.7357 16.0667 49.2292 16.5602C49.7227 17.0538 50 17.7231 50 18.4211V47.3684C50 48.0664 49.7227 48.7357 49.2292 49.2292C48.7357 49.7227 48.0664 50 47.3684 50Z"
                        fill="#151515"
                    />
                </svg>
                <p className="w-40 flex-shrink-0 flex-grow-0 self-stretch text-left text-lg font-bold text-[#151515]">
                    Previsão de Demanda
                </p>
                <p className="h-[61px] w-40 flex-grow self-stretch text-left text-xs text-[#151515]">
                    Integre os dados necessários para obter acesso a modelos automáticos
                </p>
                <p className="flex-shrink-0 flex-grow-0 text-left text-xs text-[#151515]">0/3 etapas | 0% concluído</p>
                <div className="flex h-2.5 flex-shrink-0 flex-grow-0 items-center justify-start self-stretch overflow-hidden rounded-[5px] bg-[#eee9da]">
                    <div className="bg-black flex h-2.5 w-px flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-[5px]" />
                </div>
            </div>
        </div>
    );
};

export default Progress;
