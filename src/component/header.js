// import logo from './logo.svg';
import './header.css';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/material';
import { TickerTape } from 'react-ts-tradingview-widgets';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box className="box">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6} md={1} container className='headerleft'>
          <Typography gutterBottom variant="subtitle1" component="div" className='headerTypography'>
            BNB:$542.5
          </Typography>
          {/* <Typography gutterBottom variant="subtitle1" component="div">
            HOT PAIRS 
          </Typography> */}
        </Grid>
        <Grid item xs={6} md={10}>
          <TickerTape colorTheme="dark" isTransparent></TickerTape>
        </Grid>
        <Grid item xs={6} md={1}>
          {/* <Button variant='text' size='small'>right</Button> */}
          <Button variant='contained' color='warning' size='small'>trading</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
