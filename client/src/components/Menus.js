import { useState, useEffect } from 'react'
import fetch from '../services/fetch'

const Menus = (props) => {
    const [menus, setMenus] = useState({carelia: null, bistro: null, rabbit: null})
    const [loading, setLoading] = useState(true)

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
        <div>
            {loading ? (
                <em>Lataa lataa lataa</em>
            ) : (
                <div>
                    Moro
                </div>
            )}
        </div>
      )
}

export default Menus