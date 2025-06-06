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
import FilePage from "./pages/file";
import FileVersion01 from "./pages/file/version01";
import FileVersion02 from "./pages/file/version02";
import PinchZoomImage from "./pages/Image/pinch-zoom";
import InViewPage from "./pages/in-view";
import InViewVersion01 from "./pages/in-view/version01";
import ScrollFadeNavigation from "./pages/navigation/scroll-fade";
import NavigationPage from "./pages/navigation";
import FieldsPage from "./pages/fields";
import InputInteractionPlaceHolder from "./pages/fields/input/interaction-placeholder";
import ProgressPage from "./pages/fields/progress";
import ProgressVersion01 from "./pages/fields/progress/version01";
import InputPage from "./pages/fields/input";
import SelectBoxPage from "./pages/fields/select-box";
import SelectBoxVersion01 from "./pages/fields/select-box/version01";
import TablePage from "./pages/table";
import ScrollableTable from "./pages/table/scrollable";

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
          <Route path="pinch-zoom" element={<PinchZoomImage />} />
        </Route>
        <Route path="/layout" element={<LayoutsPage />}>
          <Route path="content" element={<ContentLayout />} />
        </Route>
        <Route path="/modal" element={<ModalsPage />}>
          <Route path="version01" element={<ModalVersion01 />} />
        </Route>
        <Route path="/file" element={<FilePage />}>
          <Route path="version01" element={<FileVersion01 />} />
          <Route path="version02" element={<FileVersion02 />} />
        </Route>
        <Route path="/in-view" element={<InViewPage />}>
          <Route path="version01" element={<InViewVersion01 />} />
        </Route>
        <Route path="/navigation" element={<NavigationPage />}>
          <Route path="scroll-fade" element={<ScrollFadeNavigation />} />
        </Route>
        <Route path="/fields" element={<FieldsPage />}>
          <Route path="/fields/input" element={<InputPage />}>
            <Route
              path="interaction-placeholder"
              element={<InputInteractionPlaceHolder />}
            />
          </Route>
          <Route path="/fields/progress" element={<ProgressPage />}>
            <Route path="version01" element={<ProgressVersion01 />} />
          </Route>
          <Route path="/fields/select-box" element={<SelectBoxPage />}>
            <Route path="version01" element={<SelectBoxVersion01 />} />
          </Route>
        </Route>
        <Route path="/table" element={<TablePage />}>
          <Route path="scrollable" element={<ScrollableTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
