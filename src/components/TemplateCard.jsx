import React from "react";

function TemplateCard({ data }) {
  // console.log(data);
  

  return (
    <div className=" shadow-lg mb-14 rounded relative h-full">
      <div className="px-4 pt-4">
        <h2 className="font-semibold capitalize text-2xl">{data.name}</h2>
        <p className="py-2 my-4">
          {data.description.charAt(0).toUpperCase() + data.description.slice(1)}
        </p>
      </div>
      <button className="absolute bottom-0 bg-slate-50 text-green-600 px-4 py-2 w-full rounded">
        <a href={data.link} target="_blank" className="w-full">
          Use Template
        </a>
      </button>
    </div>
  );
}

export default TemplateCard;
