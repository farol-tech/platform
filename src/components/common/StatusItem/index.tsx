import React from "react";

export type StatusItemProps = {
    text: string;
    log_date: string;
};

const StatusItem: React.FC<StatusItemProps> = ({ text, log_date }) => {
    return (
        <div className="bg-branquissimo flex flex-1 flex-col items-start justify-center gap-2 self-stretch rounded-2xl p-6 md:p-5">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                    <path
                        d="M0 3.53325V14.7333C0 15.1576 0.168571 15.5646 0.468629 15.8646C0.768687 16.1647 1.17565 16.3333 1.6 16.3333H12.8C13.2243 16.3333 13.6313 16.1647 13.9314 15.8646C14.2314 15.5646 14.4 15.1576 14.4 14.7333V3.53325C14.4 3.10891 14.2314 2.70194 13.9314 2.40188C13.6313 2.10182 13.2243 1.93325 12.8 1.93325H11.2V0.333252H9.6V1.93325H4.8V0.333252H3.2V1.93325H1.6C1.17565 1.93325 0.768687 2.10182 0.468629 2.40188C0.168571 2.70194 0 3.10891 0 3.53325ZM12.8 14.7333H1.6V5.13325H12.8V14.7333Z"
                        fill="#151515"
                    />
                </svg>
                <div className="flex items-center gap-1">
                    <p className="text-gray-900 text-center text-base font-medium">{text}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path
                            d="M5.3999 0.333252C2.6429 0.333252 0.399902 2.57625 0.399902 5.33325C0.399902 8.09025 2.6429 10.3333 5.3999 10.3333C8.1569 10.3333 10.3999 8.09025 10.3999 5.33325C10.3999 2.57625 8.1569 0.333252 5.3999 0.333252ZM5.3999 9.33325C3.1944 9.33325 1.3999 7.53875 1.3999 5.33325C1.3999 3.12775 3.1944 1.33325 5.3999 1.33325C7.6054 1.33325 9.3999 3.12775 9.3999 5.33325C9.3999 7.53875 7.6054 9.33325 5.3999 9.33325Z"
                            fill="#151515"
                        />
                        <path
                            d="M4.8999 4.83325H5.8999V7.83325H4.8999V4.83325ZM4.8999 2.83325H5.8999V3.83325H4.8999V2.83325Z"
                            fill="#151515"
                        />
                    </svg>
                </div>
            </div>
            <p className="text-center text-base font-normal leading-normal text-preto">{log_date}</p>
        </div>
    );
};

export default StatusItem;
