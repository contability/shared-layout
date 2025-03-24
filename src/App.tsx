import TextVersion01 from "./pages/Text/Version01";
import "./styles/base.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import TextPage from "./pages/Text";
import ImagesPage from "./pages/Image";
import LayoutsPage from "./pages/layout";
import ContentLayout from "./pages/layout/ContentLayout";
import PulseImage from "./pages/Image/Pulse";
import ShimmerImage from "./pages/Image/shimmer";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/text" element={<TextPage/>}>
          <Route path="version01" element={<TextVersion01/>}/>
        </Route>
        <Route path="/image" element={<ImagesPage/>}>
          <Route path="pulse" element={<PulseImage/>}/>
          <Route path="shimmer" element={<ShimmerImage/>}/>
        </Route>
        <Route path="/layout" element={<LayoutsPage/>}>
          <Route path="content" element={<ContentLayout/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  ) 
};

export default App;