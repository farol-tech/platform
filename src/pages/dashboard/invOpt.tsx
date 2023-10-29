import React from "react";
import DashboardLayout from "~/layouts/dashboard/dashboardLayout";
import InvOpt from "~/components/dashboard/overview/invOpt/page";
import Status from "~/components/dashboard/demand/status/page";
import { StatusReportProps } from "~/components/common/StatusReport";
import { StatusItemProps } from "~/components/common/StatusItem";
import Progress from "~/components/dashboard/invOpt/progress/page";
import DashboardComponent, { FilterOptionsProps } from "~/components/dashboard/invOpt/dashboardComponent/page";

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

    const options: FilterOptionsProps = {
        products: ["arroz", "feijao", "pipoca"],
        families: ["spirandelli", "yoshiro", "merklein"],
        stores: ["mariazzinha", "deodato eletronicos"],
    };

    return (
        <DashboardLayout>
            <div className="flex h-full flex-col gap-y-5">
                <div className="flex w-full flex-row justify-start gap-10">
                    <div className="flex w-1/2">
                        <p className="text-center text-2xl font-medium text-[#151515]">Insights Automatizados</p>
                    </div>
                    <Status items={items} report={report}></Status>
                    <Progress></Progress>
                </div>
                <DashboardComponent title="Análise de Desempenho" options={options}>
                    <InvOpt />
                </DashboardComponent>
            </div>
        </DashboardLayout>
    );
};

export default invOpt;
