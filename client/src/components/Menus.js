import MenuItems from "./MenuItems";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import './Menus.css'
import { useState, useEffect, useRef } from "react";

const Menus = ({ menus }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3333;

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
      
      <div className="container">
        <h1 className="h1">Ruokalistat</h1>
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 5, md: 2 }}>
              <div className='slides'>
                {index === 0 && <MenuItems
                                    name='Ravintola Carelia'
                                    menu={menus.carelia.LunchMenu.SetMenus || 'Ei lounasta tarjolla tänään :-('}
                                />}
                {index === 1 && <MenuItems
                                    name='Kampus Bistro'
                                    menu={menus.bistro.LunchMenu.SetMenus || 'Ei lounasta tarjolla tänään :-('}
                                />}
                {index === 2 && <MenuItems
                                    name='Wicked Rabbit'
                                    menu={menus.rabbit.LunchMenu.SetMenus || 'Ei lounasta tarjolla tänään :-('}
                                />}
              </div>
          </Grid>
        </Box>  
      </div>  
    )
  }
  export default Menus