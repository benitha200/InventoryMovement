import React, { useState } from "react";
import StockInputForm from "./components/StockInputForm";
import StockOutForm from "./components/StockOutForm";
import SectionForm from "./components/SectionForm";
import WarehouseForm from "./components/WarehouseForm";
import LoginPage from "./components/LoginPage";
import WarehouseLayout from "./components/WarehouseLayout";
import CurrentStock from "./components/CurrentStock";

const App = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleLogin = (username, password) => {
    // Your login logic goes here
    console.log("Logged in with username:", username, "and password:", password);
    // For demonstration, let's assume login is successful and switch to the stockInput form
    setActiveForm("stockInput");
  };

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return <LoginPage onLogin={handleLogin} />;
      case "stockInput":
        return <StockInputForm />;
      case "stockOut":
        return <StockOutForm />;
      case "sectionForm":
        return <SectionForm />;
      case "warehouseForm":
        return <WarehouseForm />;
      case "warehouseLayout":
        return <WarehouseLayout />;
      case "currentStock":
        return <CurrentStock />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 w-6/12 md:w-1/4 px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Forms</h2>
        <ul>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "login" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("login")}
            >
              Login
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "stockInput" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("stockInput")}
            >
              Stock Input
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "stockOut" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("stockOut")}
            >
              Stock Out
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "sectionForm" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("sectionForm")}
            >
              Section Form
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "warehouseForm" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("warehouseForm")}
            >
              Warehouse Form
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "warehouseLayout" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("warehouseLayout")}
            >
              Warehouse Layout
            </button>
          </li>
          <li className="mb-2">
            <button
              className={`w-full text-left py-2 px-4 rounded ${activeForm === "currentStock" ? "bg-blue-500 text-white" : ""
                }`}
              onClick={() => setActiveForm("currentStock")}
            >
              Current Stock
            </button>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8 overflow-auto">
        {renderForm()}
      </div>
    </div>
  );
};

export default App;
