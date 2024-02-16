import React from "react";

const WarehouseForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card">
        <form className="w-full max-w-lg">
          <h2 className="text-2xl mb-4 text-center">Warehouse</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="warehouseName">
                Warehouse Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="warehouseName" type="text" placeholder="Warehouse Name" />
            </div>
          </div>
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

export default WarehouseForm;
