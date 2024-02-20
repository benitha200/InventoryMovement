import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import StockInPage from "./components/StockInPage";
import StockOutPage from "./components/StockOutPage";
import SectionForm from "./components/SectionForm";
import WarehouseForm from "./components/WarehouseForm";
import WarehouseLayout from "./components/WarehouseLayout";
import CurrentStock from "./components/CurrentStock";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="bg-gray-200 w-6/12 md:w-1/4 px-4 py-6">
          <ul>
            {/* Stock Forms */}
            <li className="mb-2">
              <h3 className="text-lg font-bold mb-2">Stock</h3>
              <LinkButton to="/stockInput" text="Stock Input" />
            </li>
            <li className="mb-2">
              <LinkButton to="/stockOut" text="Stock Out" />
            </li>

            {/* Warehouse Forms */}
            <li className="mb-2">
              <h3 className="text-lg font-semibold mb-2">Warehouse</h3>
              <LinkButton
                to="/warehouseForm"
                text="Create Warehouse Form"
              />
            </li>
            <li className="mb-2">
              <LinkButton to="/sectionForm" text="Create Section Form" />
            </li>
            <li className="mb-2">
              <LinkButton
                to="/warehouseLayout"
                text="Warehouse Layout"
              />
            </li>
            <li className="mb-2">
              <LinkButton to="/currentStock" text="Current Stock" />
            </li>
          </ul>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-8 overflow-auto">
          <Routes>
            <Route exact path="/" element={<SectionForm />} />
            <Route path="/stockInput" element={<StockInPage />} />
            <Route path="/stockOut" element={<StockOutPage />} />
            <Route path="/sectionForm" element={<SectionForm />} />
            <Route path="/warehouseForm" element={<WarehouseForm />} />
            <Route path="/warehouseLayout" element={<WarehouseLayout />} />
            <Route path="/currentStock" element={<CurrentStock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const LinkButton = ({ to, text }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`w-full text-left py-2 px-4 rounded ${
        location.pathname === to ? "bg-blue-500 text-white" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default App;
