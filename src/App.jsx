import { useState } from 'react'

import Carrito from './components/Carrito'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Carrito/>
    </>
  )
}

export default App
