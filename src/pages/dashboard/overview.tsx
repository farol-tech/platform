import React from 'react';
import DashboardLayout from '~/layouts/dashboard/dashboardLayout';
import Demand from '~/components/dashboard/overview/demand';
import InvOpt from '~/components/dashboard/overview/invOpt';
import Progress from '~/components/dashboard/overview/progress';


const Overview: React.FC = ({ }) => {

    return (
        <DashboardLayout>
            <Progress />
            <div className='flex flex-row justify-start items-start w-full gap-2.5 bg-branco'>
                <Demand />
                <InvOpt />
            </div>
        </DashboardLayout>
    );
};

export default Overview;
