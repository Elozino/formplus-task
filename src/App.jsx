import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/templateSlice";
import Templates from "./components/Templates";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import TemplateCard from "./components/TemplateCard";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimit, setDataLimit] = useState(20);
  const [postsPerPage] = useState(12);
  const { template, status } = useSelector((state) => state.template);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    // console.log(template);
  }, []);

  const data = template;
  const pageLimit = 12;
  // const dataLimit = 20;

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }

  function prevPage() {
    setCurrentPage((page) => page - 1);
  }

  function handlePaginationData() {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  }

  function handleChangePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  function handlePaginationGroup() {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((item, index) => start + index + 1);
  }

  // Get current template
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = template?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="px-10 sm:px-10 lg:px-48 py-10">
      <Header data={template} status={status} />
      <Welcome />
      <p className="text-xl font-semibold">All Templates (Dynamic)</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {status == "loading" ? (
          <p className="text-center text-7xl flex justify-center w-full">
            Loading...
          </p>
        ) : status == "success" ? (
          // currentPosts?.map((item, i) => <TemplateCard data={item} key={i} />)
          handlePaginationData().map((item, index) => (
            <TemplateCard data={item} key={index} />
          ))
        ) : (
          <h1>We encountered an error</h1>
        )}
      </div>

      {/* <Pagination postsPerPage={postsPerPage} totalPosts={template?.length} /> */}
      <Pagination
        data={data}
        dataLimit={dataLimit}
        setDataLimit={setDataLimit}
        nextPage={nextPage}
        prevPage={prevPage}
        handlePaginationGroup={handlePaginationGroup}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
      <footer className="font-semibold text-xl text-center relative bottom-2 left-auto mt-16">
        Elozino Ovedhe
      </footer>
    </div>
  );
}

export default App;
