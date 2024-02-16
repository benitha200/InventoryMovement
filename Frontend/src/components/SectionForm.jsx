import React from "react";

const SectionForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-full max-w-lg">
        <form className="w-full">
          <h2 className="text-2xl mb-4 text-center">Section</h2>
          {/* Warehouse Name dropdown goes here */}
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sectionName">
              Section Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="section" type="text" placeholder="Section" />
          </div>
          {/* Number of Sections input goes here */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionForm;
