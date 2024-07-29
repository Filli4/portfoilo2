"use client";
import React from 'react';

const DownloadButton = () => {
  
  const pdf1 = "/Filmon_CV_no_3.docx.pdf";
  const pdf2 = "/personlig_brev_no_3.pdf";

  
  const handleDownload = () => {
    
    const files = [
      { url: pdf1, name: 'Filmon_CV.pdf' },
      { url: pdf2, name: 'personlig_brev.pdf' }
    ];

  
    files.forEach(file => {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      className="bg-blue-600 w-40 text-white rounded-xl p-3 hover:bg-blue-700"
      onClick={handleDownload}
    >
      Download Documents
    </button>
  );
};

export default DownloadButton;


