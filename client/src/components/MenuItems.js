import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const MenuItems = (props) => {

    return (
        <div>
            <Box sx={{ minWidth: 700}}>
            <Card variant="outlined">
                <CardContent>
                <Typography align="center" variant="h1" sx={{ fontSize: 30, mb: 0 }} color="black" gutterBottom>{props.name}<Divider textAlign="left" variant="fullWidth" /></Typography>
                <ul>
                    {props.menu.length ? 
                    (props.menu.map(menu => (
                    <div>
                        <Typography align="left" variant="subtitle1" sx={{ fontSize: 18, fontWeight: 'bold' }}> {menu.Name.toUpperCase()} </Typography>
                        <Typography align="left" variant="subtitle2" sx={{ fontSize: 12 }}> {menu.Price} <Divider textAlign="left" variant="fullWidth" /></Typography>
                            {Object.values(menu.Meals).map((item) => {
                                return <Typography align="left" variant="subtitle1" sx={{ fontSize: 18, mb: "5px" }} component="div"> 
                                        {item.Name} ({item.Diets.join(", ")})
                        </Typography>
                        })}
                    </div>
                    ))
                    )
                    : 
                    <div>
                        <Typography align="left" variant="subtitle1" sx={{ fontSize: 18, mb: 2 }} component="div">
                            <em>Ei ruokaa tänään :-(</em>
                        <Divider textAlign="left" variant="fullWidth" />
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