import React from "react";

const LoadingFetchedData = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-13 w-12 border-t-4 border-blue-500"></div>
      <h2 className="ml-3 text-xl font-semibold"> Data is Loading...</h2>
    </div>
  );
};

export default LoadingFetchedData;
