import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import About from "./About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={
          <HomePage></HomePage>
        } />
        <Route path={"/about/"} element={
          <About></About>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
