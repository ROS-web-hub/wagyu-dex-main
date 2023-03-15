// import logo from './logo.svg';
import './footer.css';
import { Button, Grid, IconButton } from '@mui/material';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import BalconyIcon from '@mui/icons-material/Balcony';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from '@mui/material/Link';


function Footer() {
  return (
    <Box className="box">
      <Grid container alignItems="center">
        <Grid item xs={6} md={6} container justifyContent="flex-start" className='footerIcon'>
          <Grid item>
            <IconButton style={{ color: "#808da1" }} >
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "#808da1" }} >
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "#808da1" }} >
              <TelegramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "#808da1" }} >
              <BalconyIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "#808da1" }} >
              <BalconyIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "#808da1" }} >
              <YouTubeIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6} container justifyContent="flex-end" alignItems="center" spacing={1} className='footerInfo'>
          <Grid item >
            <CopyrightIcon style={{ color: "#808da1" }} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="caption" component="div" style={{ color: "#808da1" }}>
              DEXTools.io 2021-
            </Typography>
          </Grid> 
          <Grid item>
            <Link href="#" underline='none' className ="footerVersion">1.23.0</Link>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="caption" component="div" style={{ color: "#808da1" }}>
              -
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" underline='none'>info@dextools.io</Link>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="caption" component="div" style={{ color: "#808da1" }}>
              | Ads & Marketing:
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" underline='none'>marketing@dextools.io</Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
