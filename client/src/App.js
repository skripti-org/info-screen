import { useEffect, useState, useRef} from 'react'
import Sponsors from './components/Sponsors'
import Menus from './components/Menus'
import fetch from './services/fetch'
import './App.css'
import EventMapper from './components/EventMapper'

const App = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState([])
  const [menus, setMenus] = useState({carelia: null, bistro: null, rabbit: null})
  const delay = 2500;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    setLoading(true)
    const fetchEvents = async () => {
        setLoading(false)
        const events = await fetch.fetchEvents()
        setEvents(events)
    }
    fetchEvents()
  }, [])

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === 2 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  

  useEffect(() => {
    setLoading(true)
    const fetchMenus = async () => {
        setLoading(false)
        const carelia = await fetch.fetchCarelia()
        const bistro = await fetch.fetchBistro()
        const rabbit = await fetch.fetchRabbit()
        setMenus(carelia, bistro, rabbit)
    }
    fetchMenus()
  }, [])

  return (

    <div>
      <div className="slideshow">
        {loading ? (
          <em>Ladataan :-)</em>
        ) : (
          <div
            className="slideshowSlider"
            //style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            <div className='slides'>
              {index === 2 && <EventMapper events={events}/>}
              {index === 0 && <Sponsors />}
              {index === 1 && <Menus />}
            </div>
          </div>
        )}
      </div>
  </div>
  );
}

export default App;
