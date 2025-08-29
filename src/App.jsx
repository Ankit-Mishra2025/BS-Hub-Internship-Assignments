import React from "react";
import FetchingData from "./Components/ApiDataFetching/FetchingData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CachedFetchData from "./Components/ApiDataCaching/CachedFetchData";
import ReactQueryFetch from "./Components/ApiDataCaching/ReactQueryFetch";
import SearchData from "./Components/SearchingFetchedData/SearchData";

const App = () => {
  return (
    <div>
      <nav className="mx-auto flex items-center justify-center gap-10 mt-5">
        <Link to="/task1" className="bg-blue-300 p-2 rounded-md">
          Task 1
        </Link>
        <Link to="/task2" className="bg-fuchsia-500 p-2 rounded-md">
          Task 2
        </Link>
        <Link to="/task2/react-query" className="bg-emerald-300 p-2 rounded-md">Task 2(React Query)</Link>
        <Link to="/task3" className="bg-pink-400 p-2 rounded-md"> Task 3</Link>
      </nav>
      <Routes>
        <Route path="/task1" element={<FetchingData />} />
        <Route path="/task2" element={<CachedFetchData />} />
        <Route path="/task2/react-query" element={<ReactQueryFetch/>}/>
        <Route path="/task3" element={<SearchData/>}/>
      </Routes>
    </div>
  );
};

export default App;
