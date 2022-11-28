import MenuItems from "./MenuItems";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState, useEffect, useRef } from "react";

const Menus = ({ menus }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3333;

  const date = new Date();
  const today = date.toLocaleDateString("fi-FI");

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
      <Box>
        <h1 className="h1">Ruokalistat {today}</h1>
        <Grid container rowSpacing={2} sx={{marginTop: "10px", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
            <div className='slides'>
              {index === 0 && <MenuItems
                                  name='Ravintola Carelia'
                                  menu={menus.carelia.LunchMenu.SetMenus}
                              />}
              {index === 1 && <MenuItems
                                  name='Kampus Bistro'
                                  menu={menus.bistro.LunchMenu.SetMenus}
                              />}
              {index === 2 && <MenuItems
                                  name='Wicked Rabbit'
                                  menu={menus.rabbit.LunchMenu.SetMenus}
                              />}
            </div>
        </Grid>
      </Box>  
    )
  }
  export default Menus