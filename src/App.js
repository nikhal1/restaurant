import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import { MenuList } from './data/data';
import React, { createContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DynamicPage from "./pages/DynamicPage";

export const UserContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <UserContext.Provider value={{ isLogin  }}>
      {children}
    </UserContext.Provider>
  );
}

function App() {
  const [menuData, setMenuData] = useState(MenuList);

  useEffect(() => {
    setMenuData(MenuList);
  }, []);

  

  return (
    <AppProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu menuData={menuData}  />} />
            <Route path="/item/:id" element={<DynamicPage />} />

            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;