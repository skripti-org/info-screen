import { useState, useEffect } from 'react'
import fetch from './services/fetch'

const App = () => {

  const [menus, setMenus] = useState({carelia: null, bistro: null, rabbit: null})
  const [loading, setLoading] = useState(true)

  console.log(menus)

  useEffect(() => {
    setLoading(true)
    const fetchMenus = async () => {
      setLoading(false)
      const carelia = await fetch.fetchCarelia()
      const bistro = await fetch.fetchBistro()
      const rabbit = await fetch.fetchRabbit()
      setMenus({carelia, bistro, rabbit})
    }
    fetchMenus()
  }, [])

  return (
    <div className="App">
      {loading ? (
        <em>Lataa lataa lataa</em>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
}

export default App;
