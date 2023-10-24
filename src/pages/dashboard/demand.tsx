import React from "react";
import DashboardLayout from "~/layouts/dashboard/dashboardLayout";
import Progress from "~/components/dashboard/demand/progress/page";
import Demand from "~/components/dashboard/overview/demand/page";
import Status from "~/components/dashboard/demand/status/page";
import { StatusReportProps } from "~/components/common/StatusReport";
import { StatusItemProps } from "~/components/common/StatusItem";

const DemandPage: React.FC = ({}) => {
    const items: StatusItemProps[] = [
        {
            text: "Ultima atualização da demanda",
            log_date: "23/08/2023",
        },
        {
            text: "Última atualização do modelo",
            log_date: "23/08/2023",
        },
    ];

    const report: StatusReportProps = {
        text: "Cobertura de produtos",
        percentage: 40,
    };

    return (
        <DashboardLayout>
            <div className="flex items-center gap-10 self-stretch">
                <Status items={items} report={report} />
                <Progress />
            </div>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 bg-branco">
                <Demand />
            </div>
        </DashboardLayout>
    );
};

export default DemandPage;
