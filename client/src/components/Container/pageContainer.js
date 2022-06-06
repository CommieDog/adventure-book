import React, { useState } from "react";
import Nav from "../Navbar/navbar";
import Foot from "../Footer/footer";
import Home from "../../pages/Home";
import Dashboard from "../../pages/Dashboard";
import Explore from "../../pages/Explore";
import AddPost from "../../pages/AddPost";
import Contact from '../../pages/Contact';
import About from '../../pages/About';
import Login from '../../pages/Login';
import Signup from "../../pages/Signup";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Explore") {
      return <Explore />;
    }
    if(currentPage === "Dashboard") {
        return <Dashboard />
    }
    if(currentPage === "AddPost") {
        return <AddPost />
    }
    if(currentPage === "Contact") {
      return <Contact />
    }
    if(currentPage === "About") {
      return <About />
    if (currentPage === "Login") {
      return <Login />
    }
    if (currentPage === "Signup") {
      return <Signup />
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      

      <Foot currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
