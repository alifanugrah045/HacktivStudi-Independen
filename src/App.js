import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import AboutCompanyPage from "./pages/about-company/AboutCompanyPage";
import AboutMePage from "./pages/about-me/AboutMePage";
import MembersPage from "./pages/members/MembersPage";
import MembersDetailPage from "./pages/member-detail/MembersDetailPage";
import ItemsPage from "./pages/items/ItemsPage";
import ItemsDetailPage from "./pages/item-detail/ItemsDetailPage";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="about-company" element={<AboutCompanyPage />} />
          <Route path="about-me" element={<AboutMePage />} />
        </Route>
        <Route path="/members" element={<MembersPage />}>
          <Route path=":memberName" element={<MembersDetailPage />} />
        </Route>
        <Route path="/items" element={<ItemsPage />}>
          <Route path=":id" element={<ItemsDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
