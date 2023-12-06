import React from "react";
import DashboardLayout from '~/layouts/dashboard/dashboardLayout';
import InvOpt from '~/components/dashboard/overview/invOpt/page';
import Status from '~/components/dashboard/demand/status/page';
import { StatusReportProps } from "~/components/common/StatusReport";
import { StatusItemProps } from "~/components/common/StatusItem";
import Progress from '~/components/dashboard/invOpt/progress/page';
import DashboardComponent from "~/components/dashboard/invOpt/dashboardComponent/page";
import InsightTable from "~/components/dashboard/invOpt/insightTable/page";

const invOpt = () => {
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
        text: "Nível de Serviço Médio",
        percentage: 60,
    };

    const userData = {produtos: ["arroz","feijao", "pipoca"], familias: ["spirandelli", "yoshiro", "merklein"], lojas: ["mariazzinha", "deodato eletronicos"]}

    return (
    <DashboardLayout>
        <div className='flex flex-col h-full gap-y-5'>
            <div className='flex flex-row w-full justify-start gap-10'>
                <div className='flex flex-col gap-10 w-1/2'>
                    <p className='text-2xl font-medium text-[#151515]'>Insights Automatizados</p>
                    <div className="flex flex-col items-left text-left text-xg h-full p-1">
                     <InsightTable></InsightTable>
                    </div>
                </div>
                <Status items={items} report={report}></Status>
                <Progress></Progress>
            </div>
            <DashboardComponent></DashboardComponent>
            
        </div>

    </DashboardLayout>
    );
}

export default invOpt