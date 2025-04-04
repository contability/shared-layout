import TextVersion01 from "./pages/Text/Version01";
import "./styles/base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TextPage from "./pages/Text";
import ImagesPage from "./pages/Image";
import LayoutsPage from "./pages/layout";
import ContentLayout from "./pages/layout/ContentLayout";
import PulseImage from "./pages/Image/Pulse";
import ModalsPage from "./pages/Modal";
import ModalVersion01 from "./pages/Modal/Version01";
import ShimmerImage from "./pages/Image/Shimmer";
import AddressDaumPostcodeEmbed from "./pages/address/daum-postcode/embed";
import AddressPage from "./pages/address";
import AddressDaumPostcodePopup from "./pages/address/daum-postcode/popup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text" element={<TextPage />}>
          <Route path="version01" element={<TextVersion01 />} />
        </Route>
        <Route path="/image" element={<ImagesPage />}>
          <Route path="pulse" element={<PulseImage />} />
          <Route path="shimmer" element={<ShimmerImage />} />
        </Route>
        <Route path="/layout" element={<LayoutsPage />}>
          <Route path="content" element={<ContentLayout />} />
        </Route>
        <Route path="/modal" element={<ModalsPage />}>
          <Route path="version01" element={<ModalVersion01 />} />
        </Route>
        <Route path="/address" element={<AddressPage />}>
          <Route
            path="daum-postcode/embed"
            element={<AddressDaumPostcodeEmbed />}
          />
          <Route
            path="daum-postcode/popup"
            element={<AddressDaumPostcodePopup />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
