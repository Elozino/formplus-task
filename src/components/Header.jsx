import { SearchOutlined } from "@ant-design/icons";
import React from "react";

function Header({ data, status }) {
  return (
    <div>
      <div className="md:flex items-center justify-between mb-10 md:mb-20">
        <div className="flex items-center border-2 px-2 py-1 rounded justify-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Templates"
              className="outline-none"
            />
          </div>
          <div className="flex items-center">
            <SearchOutlined style={{ color: "grey", cursor: "pointer" }} />
          </div>
        </div>
        <form className="md:flex items-center text-center">
          <p className="px-4">Sort By</p>
          <fieldset className="border border-solid border-gray-300 px-3 mx-2  rounded">
            <legend className="px-2 text-xs md:text-left">Category</legend>
            <select defaultValue className="outline-none">
              {/* <option defaultValue>Default</option>
              <option value="All">All</option>
              <option value="Agriculture">Agriculture</option> */}
              {status == "success" ? (
                data[0].category?.map((item, i) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))
              ) : (
                <option defaultValue>Default</option>
              )}
            </select>
          </fieldset>
          <fieldset className="border border-solid border-gray-300 px-3 mx-2  rounded">
            <legend className="px-2 text-xs md:text-left">Order</legend>
            <select defaultValue className="outline-none">
              <option defaultValue>Default</option>
              <option value="All">All</option>
              <option value="Agriculture">Agriculture</option>
            </select>
          </fieldset>
          <fieldset className="border border-solid border-gray-300 px-3 mx-2  rounded">
            <legend className="px-2 text-xs md:text-left">Date</legend>
            <select defaultValue className="outline-none">
              <option defaultValue>Default</option>
              <option value="All">All</option>
              <option value="Agriculture">Agriculture</option>
            </select>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Header;
