import React from "react";
import { useQuery } from "@tanstack/react-query";
import QueryDataLoading from "./QueryDataLoading";

const ReactQueryFetch = () => {
  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <QueryDataLoading />;
  }
  if (isError) {
    return <h1>There is an errorr...</h1>;
  }
  return (
    <div className="p-5 mx-auto ">
      <h1 className="text-center font-bold text-2xl">
        Here is the react-query fetched data
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {data &&
          data.slice(0, 20).map((items, index) => {
            return (
              <div
                key={index}
                className="border shadow-amber-50 rounded-md bg-white p-5"
              >
                <h2 className="ml-2 text-md font-bold text-center">
                  {items.id} . {items.title}
                </h2>
                <p className="text-gray-600 text-sm text-center ">{items.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ReactQueryFetch;
