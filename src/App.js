import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backlist from "./pages/Backlist";
import Markshit from "./pages/Mark";
import Header from "./Component/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
         {/* <Route path="/" element={<Dashboard></Dashboard>}></Route> */}
          <Route path="/" element={<Backlist/>}></Route>
          <Route  path="/MarkShit"  element={<Markshit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
