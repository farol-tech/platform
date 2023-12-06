import React from "react";
import DashboardLayout from "~/layouts/dashboard/dashboardLayout";
import Progress from "~/components/dashboard/demand/progress/page";
import Status from "~/components/dashboard/demand/status/page";
import { StatusReportProps } from "~/components/common/StatusReport";
import { StatusItemProps } from "~/components/common/StatusItem";
import DashboardComponent from "~/components/dashboard/demand/dashboardComponent/page";
import InsightTable from "~/components/dashboard/demand/insightTable/page";

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
        <div className='flex flex-col h-full gap-y-5'>
            <div className='flex flex-row w-full justify-start gap-10'>
                <div className='flex flex-col gap-10 w-1/2'>
                    <p className='text-2xl font-medium text-[#151515]'>Insights Automatizados</p>
                    <div className="flex flex-col items-center justify-between">
                      <InsightTable/>
                    </div>
                   
                </div>
                <Status items={items} report={report}></Status>
                <Progress></Progress>
            </div>
            <DashboardComponent></DashboardComponent>
            
        </div>

    </DashboardLayout>
        /*<DashboardLayout>
            <div className="flex items-center gap-10 self-stretch">
                <Status items={items} report={report} />
                <Progress />
            </div>
            <div className="flex w-full flex-row items-start justify-start gap-2.5 bg-branco">
                <Demand />
            </div>
        </DashboardLayout>*/
    );
};

export default DemandPage;
