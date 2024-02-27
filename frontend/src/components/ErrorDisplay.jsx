import React from "react";

const ErrorDisplay = () => {
  return (
    <div className="shadow shadow-black rounded-md p-10">
      <h3 className="text-red-500 font-bold text-xl">
        üzgünüz bir hata oluştu
      </h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
