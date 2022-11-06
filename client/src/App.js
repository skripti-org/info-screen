import { useEffect, useState, useRef} from 'react'
import Sponsors from './components/Sponsors'
import Menus from './components/Menus'
import Events from './components/Events'
import './App.css'

const App = () => {
  const [page, setPage] = useState(1)
  const [index, setIndex] = useState(0);
  const delay = 2500;
  const timeoutRef = useRef(null);
  console.log(index)
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  
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
    <div className="slideshow">
      <div
        className="slideshowSlider"
        //style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
      <div className='slides'>
        {index === 0 && <Sponsors />}
        {index === 1 && <Menus />}
        {index === 2 && <Events />}
      </div>
      </div>

    </div>
  );
}

export default App;
