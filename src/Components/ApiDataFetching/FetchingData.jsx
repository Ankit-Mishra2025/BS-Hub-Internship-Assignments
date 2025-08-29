import React, { useEffect, useState } from "react";

import LoadingFetchedData from "./LoadingFetchedData";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);


  const fetchedData = async () => {
  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let fetchedResult = await res.json();
   
    setData(fetchedResult);
    
    setLoading(false);
 
  };

  useEffect(() => {
    fetchedData();
  }, []);

  if (Loading) {
    return <LoadingFetchedData />;
  }

  return (
    <div className="mx-auto p-5 w-full text-center">
      <h1 className="text-2xl font-bold mb-5">
        Here is the list of all fetched data
      </h1>

   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
    
        {data.slice(0,50).map((items, index) => {
          return (
            <div
              key={index}
              className="border shadow-emerald-50 rounded-xl p-4 bg-white hover:shadow-lg transition"
            >
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

export default FetchingData;
