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
  const [menus, setMenus] = useState({carelia: [], bistro: [], rabbit: []})
  const [fileNames, setFileNames] = useState([])
  const delay = 2000;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  function importAll(r) {
    return r.keys().map(r);
  }
  
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const bistroMenu = await fetch.fetchBistro();
        const careliaMenu = await fetch.fetchCarelia(); 
        const rabbitMenu = await fetch.fetchRabbit();
        setMenus({ carelia: careliaMenu , bistro: bistroMenu, rabbit: rabbitMenu });
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    };
    const fetchEvents = async () => {
      try {
        const events = await fetch.fetchEvents()
        setEvents(events)
      } catch (error) {
        console.log(error)
      }
    }
    const getFileNames = async () => {
      const filenames = importAll(require.context('../public/sponsors', false, /\.(png|jpe?g|svg)$/))
      setFileNames(filenames)
   } 
    fetchMenus();
    fetchEvents();
    getFileNames();
  }, []);

  
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
  

  return (
    <div className='App'>
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
              {index === 0 && <Sponsors filenames={fileNames}/>}
              {index === 1 && <Menus menus={menus}/>}
            </div>
          </div>
        )}
      </div>
  </div>
  );
}

export default App;
