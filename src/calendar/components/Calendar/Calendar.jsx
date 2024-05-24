



import { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/src/style.css';
import styles from './Calendar.module.css';


// import './estilos.css';


export const Calendar = () => {

  // Obtener la fecha actual
  const today = new Date();
  const [selected, setSelected] = useState(null);
  const [month, setMonth] = useState(today);

  // Función para manejar la selección de rango de fechas
  const handleSelect = (range) => {
    setSelected(range);
  };


  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '15px' }}>

      <div style={{ display: "flex", gap: '15px' }}>

        {/* Probado reglas con el siguiente calendario */}
        <div className={styles.largeCalendarContainer}>
          <DayPicker
            className={styles.rdp}
            mode="range"
            selected={selected}
            onSelect={handleSelect}
            fromDate={today} // Desactiva meses y días anteriores al día actual
            disabled={{ before: today }} // Desactiva días antes de hoy
            defaultMonth={today}
            captionLayout="buttons"
            month={month}
            onMonthChange={setMonth}
            
            footer={
              <div style={{display:"flex", gap:"10px"}}>
                <p>Calendario independiente</p>
                <button onClick={() => setSelected(null)}>Clear</button>
              </div>
          
            }
          />
        <button className={ styles.button } onClick={() => setMonth(today)}>Hoy</button>
        </div>

        <div style={{ 
          width:"20vw",
          border:"1px solid gray", 
          borderRadius:"25px", 
          padding:"1rem"
          }}
        >
          {
            <div>
              <h3>Fechas Seleccionadas</h3>
              <p>Fecha de inicio: {selected?.from?.toLocaleDateString()}</p>
              <p>Fecha de fin: {selected?.to?.toLocaleDateString()}</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}


{/* <DayPicker
  // styles={{ month_caption: monthCaptionStyle }}
  mode="single"
  selected={selected1}
  onSelect={setSelected1}
  captionLayout="dropdown-buttons"
  fromYear={2022}
  toYear={2025}
  showOutsideDays={true}
  fixedWeeks={true}
  hideWeekdayRow={true}
  pagedNavigation={true}
  defaultMonth={today}
  numberOfMonths={2}
  footer={<p>Footer del calendario</p>}
/>  */}
