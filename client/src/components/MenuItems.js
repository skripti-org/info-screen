import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const MenuItems = (props) => {

    return (
        <div>
            <Box sx={{ minWidth: 450, minHeight: 600}}>
            <Card variant="outlined">
                <CardContent>
                <Typography align="center" variant="h1" sx={{ fontSize: 30, mb: 10 }} color="black" gutterBottom>{props.name}<Divider textAlign="left" variant="fullWidth" /></Typography>
                <ul>
                    {props.menu.length ? 
                    (props.menu.map(menu => (
                    <div>
                        <Typography align="left" variant="subtitle1" sx={{ fontSize: 18, fontWeight: 'bold' }}> {menu.Name} <Divider textAlign="left" variant="fullWidth" /></Typography>
                        {props.filter ? (
                        Object.values(menu.Meals.filter(meal => meal.Diets.includes(props.filter))).map((item) => {
                            return <Typography align="left" variant="subtitle1" sx={{ fontSize: 18, mb: 2 }} component="div">
                            {item.Name} ({item.Diets.join(", ")})
                            </Typography>
                        }))
                        : Object.values(menu.Meals).map((item) => {
                            return <Typography align="left" variant="subtitle1" sx={{ fontSize: 18, mb: 1 }} component="div"> 
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