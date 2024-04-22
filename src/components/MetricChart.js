import React from 'react';
import { Bar } from 'react-chartjs-2';

function MetricChart({ data }) {
    const options = {
        // ... Chart.js options
    };

    return <Bar data={data} options={options} />;
}
export default MetricChart;
