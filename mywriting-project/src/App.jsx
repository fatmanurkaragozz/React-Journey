import { useState } from 'react'
import './App.css'
import Header from './Header'
import { writes } from './Data'
import Writes from './Writes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        {
          writes?.map((write) => (
            <Writes key={write.id} write={write} />
            // Her bir blog yazısının farklı olduğunu belirtmek için key={write.id} yazdık.
            // write={write} ile her bir blog yazısının bilgilerini Writes component içerisine gönderdik.
          ))
        }
      </div>
    </>
  )
}

export default App
