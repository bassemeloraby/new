import Header from "./components/Header";
import "./styles.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Medicine from "./pages/medicine/Medicine";
import DrugCard from "./pages/medicine/DrugCard";
import ScientificName from "./pages/medicine/ScientificName";
export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/drugCard/:_id" element={<DrugCard />} />
          <Route
            path="/ScientificName/:ScientificName"
            element={<ScientificName />}
          />
        </Routes>
      </div>
    </div>
  );
}
