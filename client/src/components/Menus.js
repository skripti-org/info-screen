import MenuItems from "./MenuItems";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState, useEffect, useRef } from "react";
import './Menus.css';

const Menus = ({ menus }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const date = new Date();
  const today = date.toLocaleDateString("fi-FI");
  const slides = [
    <MenuItems name={menus.carelia.RestaurantName} menu={menus.carelia.MenusForDays}/>,
    <MenuItems name={menus.bistro.RestaurantName} menu={menus.bistro.MenusForDays}/>
  ];
  
  useEffect(() => {
    // the interval that switches between slides
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === 1 ? 0 : prevIndex + 1
      )
    }, 3000);

    // clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const styles = {
    // the container for the slides
    menuscontainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      
    },
    // the styles for the individual slides
    menu: {
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
      <Box>
        <h1 className="h1">Ruokalistat {today}</h1>
        <Grid container rowSpacing={2} sx={{marginTop: "10px", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
            <div className='menuscontainer'>
              {slides.map((slide, index) => (
              <div className='menu'
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
        </Grid>
      </Box>  
    )
  }
  export default Menus