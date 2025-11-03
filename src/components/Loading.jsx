// src/components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 text-white z-50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Aylanadigan loader */}
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <p className="text-lg tracking-widest font-semibold animate-pulse">
            COIN MARKETGA KIRISH
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
