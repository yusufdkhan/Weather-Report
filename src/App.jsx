import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import Moredays from "./moredays";
import { useContext } from "react";
import { DataContext } from "./context/dataContext";

const App = () => {
  const { data } = useContext(DataContext);
  const id = data?.location?.name;
  // console.log(id);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={id} element={<Moredays />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
