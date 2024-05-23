import { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../context/CarContext";

const key = import.meta.env.VITE_API_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 34.052235,
  lng: -118.243683,
};

const Map = () => {
  const { filteredCars } = useCarContext();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: key,
  });
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();

  const [carData, setCarData] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setCarData(filteredCars);
  }, [filteredCars]);

  useEffect(() => {
    if (isLoaded) {
      setMapLoaded(true);
    }
  }, [isLoaded]);

  if (loadError) {
    console.error("Error al cargar mapa:", loadError);
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Cargando Mapa...</div>;
  }

  const handleMarkerClick = (id) => {
    navigate(`/car/${id}`);
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {mapLoaded &&
        carData.length > 0 &&
        carData.map((car) => {
          const [lat, lng] = car.ubicacion.split(",").map(Number);
          if (!isNaN(lat) && !isNaN(lng)) {
            return (
              <Marker
                key={car.id}
                position={{ lat, lng }}
                onClick={() => handleMarkerClick(car.id)}
                onMouseOver={() => setSelectedCar(car)}
                onMouseOut={() => setSelectedCar(null)}
              >
                {selectedCar && selectedCar.id === car.id && (
                  <InfoWindow position={{ lat, lng }}>
                    <div>{car.nombre}</div>
                  </InfoWindow>
                )}
              </Marker>
            );
          } else {
            console.warn("Locacion invalida:", car);
            return null;
          }
        })}
    </GoogleMap>
  );
};

export default Map;
