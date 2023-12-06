import React from "react";

export type StatusReportProps = {
    text: string;
    percentage: number;
};

const StatusReport: React.FC<StatusReportProps> = ({ text, percentage }) => {
    const angleInDegrees = (360 * percentage) / 100;
    const angleInRadians = (angleInDegrees * Math.PI) / 180;

    const radius = 23;
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);

    return (
        <div className="bg-branquissimo flex flex-1 flex-col items-start justify-center gap-2 self-stretch rounded-2xl p-6 md:p-5">
            <div className="flex items-center gap-2 w-72">
                <div className="w-20 h-20 flex-shrink-0 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
                        <circle
                            cx="35"
                            cy="35.6665"
                            r="30" 
                            fill="none"
                            stroke="#93BFCF" 
                            strokeWidth="7" 
                        />
                        <circle
                            cx="35"
                            cy="35.6665"
                            r="30"
                            fill="none"
                            stroke="#116A7B" 
                            strokeWidth="7" 
                            strokeDasharray="188.5" 
                            strokeDashoffset={-188.5 + (percentage / 100) * 188.5} 
                        />
                    </svg>
                    <p className="text-azul_escuro text-xl text-center font-medium leading-normal absolute inset-0 flex items-center justify-center bottom-2 right-2">{`${percentage}%`}</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="text-sm text-center font-medium leading-normal text-preto">{text}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <path
                            d="M5 0.666504C2.243 0.666504 0 2.9095 0 5.6665C0 8.4235 2.243 10.6665 5 10.6665C7.757 10.6665 10 8.4235 10 5.6665C10 2.9095 7.757 0.666504 5 0.666504ZM5 9.6665C2.7945 9.6665 1 7.872 1 5.6665C1 3.461 2.7945 1.6665 5 1.6665C7.2055 1.6665 9 3.461 9 5.6665C9 7.872 7.2055 9.6665 5 9.6665Z"
                            fill="#151515"
                        />
                        <path d="M4.5 5.1665H5.5V8.1665H4.5V5.1665ZM4.5 3.1665H5.5V4.1665H4.5V3.1665Z" fill="#151515" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default StatusReport;
