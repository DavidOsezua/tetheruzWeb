import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Policy from "./pages/Policy";
import TandC from "./pages/TandC";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="policy" element={<Policy />} />
        <Route path="termsandcondition" element={<TandC />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
