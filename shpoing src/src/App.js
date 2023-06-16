import React, { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Categorys from "./Pages/Categorys";
import AddNewProduct from "./Pages/AddNewProduct";
import Navbar from "./components/Navbar";


function App() {
  const [cuurentPage, setCurrentPage] = useState("LoginPage");

  const Reandering = () => {
    if (cuurentPage === "LoginPage") {
      return <LoginPage />;
    } else if (cuurentPage === "HomePage") {
      return <HomePage />;
    } else if (cuurentPage === "Categorys") {
      return <Categorys />;
    } else if (cuurentPage === "AddNewProduct") {
      return <AddNewProduct />;
    }
  };

  const navigatehandel = (pages) => {
    setCurrentPage(pages);
  };

  return (
    <>
      <div>
        <nav>
          <button onClick={() => navigatehandel("HomePage")}>Home</button>
          <button onClick={() => navigatehandel("Categorys")}>Categorys</button>
          <button onClick={() => navigatehandel("AddNewProduct")}>
            AddNewProduct
          </button>
        </nav>
        <Reandering />
      </div>
    </>
  );
}

export default App;
