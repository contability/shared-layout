import TextVersion01 from "./pages/Text/Version01";
import "./styles/base.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import TextPage from "./pages/Text";
import ImagesPage from "./pages/Image";
import ImageVersion01 from "./pages/Image/Version01";
import ImageVersion02 from "./pages/Image/Version02";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/text" element={<TextPage/>}>
          <Route path="version01" element={<TextVersion01/>}/>
        </Route>
        <Route path="/image" element={<ImagesPage/>}>
          <Route path="version01" element={<ImageVersion01/>}/>
          <Route path="version02" element={<ImageVersion02/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  ) 
};

export default App;