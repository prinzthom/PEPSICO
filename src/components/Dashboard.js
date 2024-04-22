import React from 'react';
import DistributorCard from './DistributorCard';
import { distributors } from '../mockData';

function Dashboard() {
    return (
        <div>
            {distributors.map(distributor => (
                <DistributorCard key={distributor.id} data={distributor} />
            ))}
        </div>
    );
}
export default Dashboard;
