import { useState, useEffect } from "react";
// import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/templateSlice";
import Templates from "./components/Templates";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import TemplateCard from "./components/TemplateCard";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const { template, status } = useSelector((state) => state.template);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    console.log(template);
  }, []);

  // Get current template
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = template?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="px-10 sm:px-10 lg:px-48 py-10">
      <Header />
      <Welcome />
      <p className="text-xl font-semibold">All Templates (Dynamic)</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {status == "loading" ? (
          <p className="text-center text-7xl flex justify-center w-full">Loading</p>
        ) : status == "success" ? (
          currentPosts?.map((item, i) => <TemplateCard data={item} key={i} />)
        ) : (
          <h1>We encountered an error</h1>
        )}
      </div>

      {/* <Pagination postsPerPage={postsPerPage} totalPosts={template?.length} /> */}
      <footer className="font-semibold text-xl text-center relative bottom-2 left-auto mt-20">Elozino Ovedhe</footer>
    </div>
  );
}

export default App;
