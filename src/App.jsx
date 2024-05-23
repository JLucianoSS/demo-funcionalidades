import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetail";
import Map from "./components/Map";

const Home = () => (
  <div style={{ display: "flex" }}>
    <div style={{ width: "30%" }}>
      <CarList />
    </div>
    <div style={{ width: "70%" }}>
      <Map />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
