import { useParams, useNavigate } from "react-router-dom";
import cars from "../data/cars.json";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <div>Car no encontrado</div>;
  }

  return (
    <div>
      <h1>{car.nombre}</h1>
      <p>Precio: ${car.precio}</p>
      <p>Marca: {car.marca}</p>
      <p>Modelo: {car.modelo}</p>
      <p>Año: {car.año}</p>
      <p>Ubicación: {car.ubicacion}</p>
      <button onClick={() => navigate("/")}>Volver a la lista</button>
    </div>
  );
};

export default CarDetail;
