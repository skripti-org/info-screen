import { useEffect, useState, useRef} from 'react'
import Sponsors from './components/Sponsors'
import Menus from './components/Menus'
import fetch from './services/fetch'
import './App.css'
import EventMapper from './components/EventMapper'
import Event from './components/Events'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState([])
  const [menus, setMenus] = useState({carelia: [], bistro: [], rabbit: []})
  const [fileNames, setFileNames] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<Sponsors filenames={fileNames}/>, <EventMapper events={events}/>, <Menus menus={menus}/>];
  const delay = 10000;
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
    // the interval that switches between slides
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      )
    }, delay);

    // clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);


  const styles = {
    // the container for the slides
    container: {
      position: "relative",
      width: "100%",
      height: "100%",
      
    },
    // the styles for the individual slides
    slide: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // add the transition property to make the slides slide to the left
      transition: "left 0.5s",
    }
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {loading ? 
          <em>Ladataan :-)</em>
        : 
        <div className='slide-container'>
          {slides.map((slide, index) => (
            <div className='slide'
              key={index}
              style={{
                ...styles.slide,
                left: index === currentSlide ? 0 : "-100%"
              }}
            >
              {slide}
            </div>
          ))}
        </div>
        }
      </div>
      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${currentSlide === idx ? " active":""}`}
            onClick={() => {
              setCurrentSlide(idx);
            }}
          ></div>
        ))}
      </div>
  </div>
  );
}

export default App;
