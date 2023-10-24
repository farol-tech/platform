import React from "react";
import StatusItem, { StatusItemProps } from "~/components/common/StatusItem";
import StatusReport, { StatusReportProps } from "~/components/common/StatusReport";

type StatusProps = {
    items: StatusItemProps[];
    report: StatusReportProps;
};

const Status: React.FC<StatusProps> = ({ items, report }) => {
    return (
        <div className="w-72 flex flex-col items-start gap-5 self-stretch">
            <p className="text-xl text-center font-medium leading-normal text-preto">Status</p>
            <div className="flex flex-1 flex-col items-start gap-2 self-stretch rounded-lg">
                {items.map((item, index) => (
                    <StatusItem key={index} {...item} />
                ))}
                <StatusReport {...report} />
            </div>
        </div>
    );
};

export default Status;
