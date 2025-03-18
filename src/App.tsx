import Version01 from "./pages/Text/Version01";
import "./styles/base.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import TextPage from "./pages/Text";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/text" element={<TextPage/>}>
          <Route path="version01" element={<Version01/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  ) 
};

export default App;