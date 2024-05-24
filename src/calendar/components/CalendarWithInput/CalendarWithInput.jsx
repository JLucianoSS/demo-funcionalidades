import React, { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/src/style.css';
import './calendar.css';
// Archivo CSS adicional para estilos personalizados

export const CalendarWithInput = () => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const calendarRef = useRef(null);


  const [fechas, setFechas] = useState(false)

  // Función para manejar la selección de una fecha
  const handleSelect = (range) => {
    setSelectedDay(range);
    // setIsOpen(false);
  };

  // Función para manejar el clic fuera del calendario
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target) && calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Agregar evento de clic fuera del calendario
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{
      border: "1px solid gray",
      borderRadius: "15px",
      padding: "1rem"

    }}>
      <span> -Cuando- </span> <br />
      <span>De: </span>
      <div ref={inputRef} className="calendar-container">
        <input
          type="text"
          placeholder="Fecha de inicio"
          value={selectedDay?.from ? selectedDay.from.toLocaleDateString() : ''}
          onFocus={() => setIsOpen(true)}
          readOnly
        />
        <span> ➡ </span>
        <input
          type="text"
          placeholder="Fecha de fin"
          value={selectedDay?.to ? selectedDay.to.toLocaleDateString() : ''}
          onFocus={() => setIsOpen(true)}
          readOnly
        />
        {isOpen && (
          <div ref={calendarRef} className="calendar-dropdown">
            <DayPicker
              mode="range"
              selected={selectedDay}
              onSelect={handleSelect}
              fromDate={today} // Desactiva meses y días anteriores al día actual
              disabled={{ before: today }} // Desactiva días antes de hoy
              defaultMonth={today} // Mostrar el mes actual por defecto
              numberOfMonths={2}
            />
          </div>
        )}
      </div>
      <button onClick={() => setFechas(true)}>🔎 Buscar</button>
      {
        fechas && (<> 
          <span>Desde {selectedDay?.from?.toLocaleDateString()}</span>
          <span>Hasta: {selectedDay?.to?.toLocaleDateString()}</span>
        </>)
      }
    </div>
  );
};

