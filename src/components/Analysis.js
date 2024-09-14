import '../css/Analysis.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register necessary components for the chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Analysis = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching analysis data from the backend
        axios.get('/api/analysis')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const chartData = {
        labels: data ? data.labels : [],
        datasets: [{
            label: 'Anomaly Detection',
            data: data ? data.values : [],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
        }],
    };

    return (
        <div className="analysis-container">
            <div className="analysis-content">
                <h2>Automated Forensic Analysis</h2>
                <p>Using AI-driven algorithms, this tool helps detect anomalies and generate insights from the uploaded forensic data. The chart below highlights the areas of concern.</p>
                {loading ? (
                    <p>Loading analysis data...</p>
                ) : (
                    <div className="chart-container">
                        <Bar data={chartData} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        maxTicksLimit: 10, // Limit number of ticks on y-axis
                                    },
                                },
                            },
                        }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Analysis;
