import Header from "./components/Header";
import "./styles.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Medicine from "./pages/medicine/Medicine";
export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicine" element={<Medicine />} />
        </Routes>
      </div>
    </div>
  );
}
