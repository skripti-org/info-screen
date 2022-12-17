import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const MenuItems = (props) => {
    console.log(props)
    return (
        <div>
            <Box sx={{ minWidth: 700 }}>
            <Card variant="outlined" sx={{ backgroundColor: '#1a1a1a4f', boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .25), 0 8px 8px 0 rgba(0, 0, 0, .15)"}}>
                <CardContent>
                <Typography align="center" variant="h1" sx={{ fontSize: 30, mb: 2, fontWeight: 'light' }} color="white" gutterBottom>{props.name}<Divider textAlign="left" variant="fullWidth" /></Typography>
                <ul>
                    {props.SetMenus && !!props.SetMenus.length ? 
                        (props.SetMenus.map(menu => (
                            <div>
                                <Typography align="left" variant="subtitle1" color="white" sx={{ fontSize: 18, fontWeight: 'bold' }}> {menu.Name.toUpperCase()} </Typography>
                                <Typography align="left" variant="subtitle2" color="white" sx={{ fontSize: 12 }}> {menu.Price} <Divider textAlign="left" variant="fullWidth" /></Typography>
                                    {Object.values(menu.Meals).map((item) => {
                                        return <Typography align="left" variant="subtitle1" color="white" sx={{ fontSize: 18, mb: "5px" }} component="div"> 
                                                {item.Name} ({item.Diets.join(", ")})
                                </Typography>
                                })}
                            </div>
                        ))
                        )
                    : 
                        <div>
                            <Typography align="left" variant="subtitle1" color="white" sx={{ fontSize: 18, mb: 2 }} component="div">
                                <em>Ei ruokaa tänään :-(</em>
                            </Typography>
                        </div>
                    }
                </ul>
                </CardContent>
            </Card>
            </Box>
        </div>
        )   
    }
  
  export default MenuItems