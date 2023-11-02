import React from "react";
import DashboardLayout from "~/layouts/dashboard/dashboardLayout";
import Demand from "~/components/dashboard/overview/demand";
import InvOpt from "~/components/dashboard/overview/invOpt";
import Progress from "~/components/dashboard/overview/progress";

const Overview: React.FC = ({}) => {
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
            <Progress />
            <div className="flex w-full flex-row items-start justify-start gap-2.5 bg-branco">
                <Demand data={data} />
                <InvOpt />
            </div>
        </DashboardLayout>
    );
};

export default Overview;
