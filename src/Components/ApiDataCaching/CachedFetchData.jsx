import React, { useState } from "react";
import { useEffect } from "react";
import CacheLoading from "./CacheLoading";

const CachedFetchData = () => {
  const [fetchdata, setFetchData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const CachedFetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await data.json();
    console.log(result);

    setFetchData(result);
    setLoading(false);
    localStorage.setItem("apidata", JSON.stringify(result));
  };

const refreshData=()=>{
    localStorage.removeItem("apidata")
    CachedFetchData()
    setLoading(true)
}


  useEffect(() => {
    const getCachedData = localStorage.getItem("apidata");

    if (getCachedData) {
      console.log("cache se data aaya hai");
      setFetchData(JSON.parse(getCachedData));
      setLoading(false);
    } else {
      console.log("Api se data aaya hai");

      CachedFetchData();
    }
  }, []);

  if (Loading) {
    return <CacheLoading />;
  }

  return (
    <div className=" p-5  text-center">
      <h1 className="mt-5 font-bold text-2xl">Cached Data in Local Storage</h1>
<button className="bg-amber-500 rounded-md p-2 mt-2 " onClick={refreshData}> Refresh data 🔄</button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
        {fetchdata.map((items, index) => {
          return (
            <div className="border  p-4 rounded-md bg-white" key={index}>
              <h2 className="text-lg font-semibold mb-2">
                {items.id}. {items.title}
              </h2>
              <p className="text-gray-600 text-sm">{items.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CachedFetchData;
