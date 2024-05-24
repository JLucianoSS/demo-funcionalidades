import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetail";
import Map from "./components/Map";
import { Calendar, CalendarWithInput } from "./calendar";

const Home = () => (
  <>
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%" }}>
        <CarList />
      </div>
      <div style={{ width: "70%" }}>
        <Map />
      </div>
    </div>

    <div style={{ margin:"5rem 2rem" }}>
      <h2>Gestión de calendario</h2>
      <CalendarWithInput/>
      <div style={{ display:"flex", justifyContent:"center", marginTop:"3rem" }}>
        <Calendar/>
      </div>
    </div>
  </>

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
