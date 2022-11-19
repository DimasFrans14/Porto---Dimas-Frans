// Import Component
import NavbarComp from "./Component/Navbar/NavbarComp"
import Content1 from "./Component/Content/Content1";
import Content2 from "./Component/Content/Content2";
import Content3 from "./Component/Content/Content3";
import Content4 from "./Component/Content/Content4";
import Footer from "./Component/Footer/Footer";

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Porto - Dimas Frans S';
  }, []);

  return (
    <>
        <NavbarComp/>
        <Content1/>
        <Content2/>
        <Content3/>
        <Content4/>
        <Footer/>
    </>
  );
}

export default App;
