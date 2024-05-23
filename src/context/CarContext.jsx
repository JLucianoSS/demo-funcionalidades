import { createContext, useContext, useState } from "react";
import cars from "../data/cars.json";

const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter(
    (car) =>
      car.nombre.toLowerCase().includes(search.toLowerCase()) ||
      car.marca.toLowerCase().includes(search.toLowerCase()) ||
      car.modelo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CarContext.Provider value={{ search, setSearch, filteredCars }}>
      {children}
    </CarContext.Provider>
  );
};
