import React from "react";
import DashboardLayout from "~/layouts/dashboard/dashboardLayout";
import Progress from "~/components/dashboard/demand/progress";
import Demand from "~/components/dashboard/overview/demand";
import Status from "~/components/dashboard/common/status";
import { StatusItemProps } from "~/components/dashboard/common/StatusItem";
import { StatusReportProps } from "~/components/dashboard/common/StatusReport";
import DashboardComponent, { FilterOptionsProps } from "~/components/dashboard/common/dashboardComponent";

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

    const options: FilterOptionsProps = {
        products: ["arroz", "feijao", "pipoca"],
        families: ["spirandelli", "yoshiro", "merklein"],
        stores: ["mariazzinha", "deodato eletronicos"],
    };

    const data = [
        { x: 1, y: 400 },
        { x: 2, y: 378 },
        { x: 3, y: 399 },
        { x: 4, y: 398 },
        { x: 5, y: 356 },
        { x: 6, y: 402 },
        { x: 6, y: 366 },
    ];

    return (
        <DashboardLayout>
            <div className="flex h-full flex-col gap-y-5">
                <div className="flex w-full flex-row justify-start gap-10">
                    <div className="flex w-1/2">
                        <p className="text-center text-2xl font-medium text-[#151515]">Insights Automatizados</p>
                    </div>
                    <Status items={items} report={report} />
                    <Progress />
                </div>
                <DashboardComponent title="Previsão de Demanda" options={options}>
                    <Demand data={data} hasButton={false} />
                </DashboardComponent>
            </div>
        </DashboardLayout>
    );
};

export default DemandPage;
