// src/components/Report.js
import '../css/Report.css';  
import React from 'react';

const Report = () => {
    const downloadReport = (format) => {
        alert(`Downloading report in ${format} format...`);
    };

    return (
        <div className="report-container">
            <div className="report-content">
                <h2>Generate Report</h2>
                <div className="report-buttons">
                    <button onClick={() => downloadReport('PDF')}>Download PDF</button>
                    <button onClick={() => downloadReport('JSON')}>Download JSON</button>
                    <button onClick={() => downloadReport('CSV')}>Download CSV</button>
                </div>
            </div>
        </div>
    );
};

export default Report;
