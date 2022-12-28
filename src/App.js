import React from "react";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Search from "./components/Search";
import Loading from "./components/Loading";

function App() {
  const API_URL = "https://dummyjson.com/posts";
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error(`Error :  ${response.status} ${response.statusText}`);
        const jsonData = await response.json();
        setData(jsonData.posts);
        setSearch(jsonData.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <>
            <Search data={data} setSearch={setSearch} />
            <Posts search={search} error={error}/>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Loading />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
