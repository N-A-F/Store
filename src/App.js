import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./componenet/Nav.js";
import Cards from "./componenet/Cards";
import Slidebar from "./componenet/Slidebar";
import Footer from "./componenet/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Slidebar></Slidebar>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
