import { useState, useEffect } from 'react'
import fetch from './services/fetch'

const App = () => {

  const [careliaMenu, setCareliaMenu] = useState([])

  useEffect(() => {
    const fetchMenus = async () => {
      const data = await fetch.fetchCarelia()
    }
    fetchMenus()
  }, [])
  
  return (
    <div className="App">
      moro
    </div>
  );
}

export default App;
