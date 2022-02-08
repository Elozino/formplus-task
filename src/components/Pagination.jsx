// import React from "react";

// function Pagination({ postsPerPage, totalPosts, paginate }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div>
//       {pageNumbers.map((number) => (
//         <p key={number} className="page-item">
//           <a onClick={() => paginate(number)} href="!#" className="page-link">
//             {number}
//           </a>
//         </p>
//       ))}
//     </div>
//   );
// }

// export default Pagination;

import React from "react";

function Pagination({
  data,
  dataLimit,
  setDataLimit,
  nextPage,
  prevPage,
  handlePaginationGroup,
  setCurrentPage,
  currentPage,
  handleChangePage,
}) {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <button
          onClick={prevPage}
          className="bg-slate-50 text-green-600 border-2 border-slate-500 rounded px-2 py-1 w-32"
        >
          Previous
        </button>
        <div>
          showing {currentPage} to {currentPage + dataLimit - 1} of{" "}
          {data?.length}
        </div>
        {handlePaginationGroup()?.map((item, index) => (
          <div onClick={handleChangePage} key={index}>
            <span>{item}</span>
          </div>
        ))}
        <button
          onClick={nextPage}
          className="bg-slate-50 text-green-600 border-2 border-slate-500 rounded px-2 py-1 w-32"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
