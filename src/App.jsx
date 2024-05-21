import { useState } from 'react'
import { cars } from './data/dbcars';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <h1>Cars: </h1>
      <p>
        {
          JSON.stringify(cars)
        }


      </p>
    </>
  )
}

export default App
