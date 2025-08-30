import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchDataLoading from "./SearchDataLoading";

const SearchData = () => {
  const [input, setInput] = useState("");
  const [showAll, setShowAll] = useState(false); // ✅ yeh control karega kitna data dikhana hai

  const ApiDataFetch = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await data.json();
  };

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: ApiDataFetch,
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SearchDataLoading />;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  // ✅ cache me se hi filter hoga
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

  // ✅ agar showAll false hai to 50 hi dikhayega
  const finalData = showAll ? filteredData : filteredData.slice(0, 50);

  return (
    <div className="mx-auto p-5">
      <h2 className="text-center font-bold text-2xl mt-5">
        Searching Data in Cached Data
      </h2>

      <input
        type="text"
        placeholder="Search Your Items"
        className="p-2 border-1 ml-3 rounded-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => {
          refetch();
          setShowAll(true); // ✅ Refresh ke baad full data show karega
        }}
        className="p-2 bg-amber-200 gap-2 rounded-md ml-3 cursor-pointer"
      >
        {isFetching ? <SearchDataLoading /> : "Refresh Items"}
      </button>

      <p className="ml-4 mt-3">Searched Items: {input}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {finalData &&
          finalData.map((items, index) => (
            <div className="border shadow-amber-50 rounded-md p-5" key={index}>
              <h2 className="ml-2 text-md font-bold text-center">
                {items.id}. {items.title}
              </h2>
              <p className="text-gray-800 text-sm">{items.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchData;
