// Import Component
import NavbarComp from "./Component/Navbar/NavbarComp";
import Content1 from "./Component/Content/Content1";
import Content2 from "./Component/Content/Content2";
import Content3 from "./Component/Content/Content3";
import Content4 from "./Component/Content/Content4";
import Footer from "./Component/Footer/Footer";

// Library Loader
import HashLoader from "react-spinners/HashLoader";

import { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    document.title = "Porto - Dimas Frans S";
  }, []);

  return (
    <>
      <div className="App">
        {isLoading ? (
          <HashLoader color="#49a6bf"
            size={30}
            className="page-loader"
          />
        ) : (
          <>
            <NavbarComp />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
