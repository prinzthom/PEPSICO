import React from 'react';
import MetricChart from './MetricChart';

function DistributorCard({ data }) {
    return (
        <div>
            <h2>{data.name}</h2>
            {/* Render other data here */}
            <MetricChart data={data.metrics} />
        </div>
    );
}
export default DistributorCard;
