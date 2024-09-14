import React, { useState } from 'react';
import axios from 'axios';
import '../css/UploadEvidence.css';

const UploadEvidence = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            alert('Please select a file first');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload response:', response); // Log the response to handle it
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file', error);
            alert('File upload failed');
        }
    };

    return (
        <div className="upload-container">
            <div className="upload-content">
                <h2>Upload Evidence</h2>
                <form className="upload-form">
                    <label htmlFor="evidenceFile">Select Evidence File:</label>
                    <input 
                        type="file" 
                        id="evidenceFile" 
                        name="evidenceFile" 
                        onChange={handleFileChange} 
                    />
                    <div className="upload-buttons">
                        <button 
                            type="button" 
                            onClick={handleFileUpload}
                            disabled={!file}
                        >
                            Upload Evidence
                        </button>
                        <button 
                            type="reset" 
                            onClick={() => setFile(null)}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadEvidence;
