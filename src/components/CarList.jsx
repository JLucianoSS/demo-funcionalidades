import { Link } from "react-router-dom";
import { useCarContext } from "../context/CarContext";

const CarList = () => {
  const { search, setSearch, filteredCars } = useCarContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>
              {car.nombre} - ${car.precio}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
