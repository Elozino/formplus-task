import React from "react";

function Welcome() {
  return (
    <div className="px-4 md:flex items-center justify-center mb-10 bg-red-50 rounded py-2">
      <div className="flex justify-center">
        <div className="italic text-lg font-semibold text-red-600 bg-red-200 p-4 md:mr-4 rounded-full w-7 h-7 flex items-center justify-center text-center">
          i
        </div>
      </div>
      <p className="text-center">
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </div>
  );
}

export default Welcome;
