
"use client"; 
import React from 'react';
import About from '@/app/About/page';

const DownloadButton = () => {
  
  const HandleDownload = () => {
    const fileURL = '/dark-mode-6682.png'; 
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    
    <button className="bg-blue-600 w-40 text-white rounded-xl p-3 hover:bg-blue-700" onClick={HandleDownload}>
      Download
      
    </button></>
  );
};

export default DownloadButton;
