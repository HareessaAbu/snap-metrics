import React from 'react';

const LoadingSpinner = ({ progress }) => (
    // spinner
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>

    
    // <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
    //     <div className="w-24 h-24 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    //     <div className="mt-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
    //         {progress}%
    //     </div>
    // </div>
    
);

export default LoadingSpinner;
