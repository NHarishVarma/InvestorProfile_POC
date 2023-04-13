import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UserProfile13 from "./pages/UserProfile13";
import UserProfile12 from "./pages/UserProfile12";
import UserProfile11 from "./pages/UserProfile11";
import UserProfile1 from "./pages/UserProfile1";
import { useEffect } from "react";

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
      case "/user-profile-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile-1-1":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile-1":
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
      <Route path="/" element={<UserProfile13 />} />
      <Route path="/user-profile-1-2" element={<UserProfile12 />} />
      <Route path="/user-profile-1-1" element={<UserProfile11 />} />
      <Route path="/user-profile-1" element={<UserProfile1 />} />
    </Routes>
  );
}
export default App;
