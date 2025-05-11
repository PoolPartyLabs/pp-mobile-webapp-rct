import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeMyAssets from "./pages/HomeMyAssets";
import Onboard1 from "./pages/Onboard1";
import Invest from "./pages/Invest";
import HomeEmpty from "./pages/HomeEmpty";
import Onboard from "./pages/Onboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboard":
        title = "";
        metaDescription = "";
        break;
      case "/invest":
        title = "";
        metaDescription = "";
        break;
      case "/home-empty":
        title = "";
        metaDescription = "";
        break;
      case "/onboard1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeMyAssets />} />
      <Route path="/onboard" element={<Onboard1 />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/home-empty" element={<HomeEmpty />} />
      <Route path="/onboard1" element={<Onboard />} />
    </Routes>
  );
}
export default App;
