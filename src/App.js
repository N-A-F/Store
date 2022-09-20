import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./componenet/Nav.js";
import Cards from "./componenet/Cards";
import Slidebar from "./componenet/Slidebar";
import Footer from "./componenet/Footer";
import { Routes, Route } from "react-router-dom";
import Setting from "./componenet/Setting";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slidebar />
              <Cards />{" "}
            </>
          }
        />
        <Route path="/Setting" element={<Setting />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
