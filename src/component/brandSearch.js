// import logo from './logo.svg';
import './brandSearch.css';
import { Button, Grid, IconButton } from '@mui/material';
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TokenIcon from '@mui/icons-material/Token';
import ContactsIcon from '@mui/icons-material/Contacts';


function BrandSearch() {
  const [values, setValues] = useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box className='brandSearch'>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} md={4} direction='colum' spacing={2}>
          <Grid item container alignItems="center" justifyContent="flex-start">
            <Grid item>
              <Typography gutterBottom variant="h5" component="div" style={{ color: "#cacedb" }}>
                WBNB/DEXT
              </Typography>
            </Grid>
            <Grid item>
              <IconButton >
                <TokenIcon style={{ color: "#808da1" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <ContactsIcon style={{ color: "#808da1" }} />
              </IconButton>
            </Grid>
            <Grid item >
              <IconButton style={{ color: "#808da1" }}>
                <TelegramIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton style={{ color: "#808da1" }} >
                <TwitterIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton style={{ color: "#808da1" }}>
                <DesktopMacIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton style={{ color: "#808da1" }}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container spacing={1} alignItems="center" >
            <Typography gutterBottom variant="caption" component="div" style={{ color: "#cacedb" }}>
              (DEXTools)
            </Typography>
            <Typography gutterBottom variant="caption" component="div" style={{ color: "#cacedb" }}>
              Token contract: Oxdfee3940fj
            </Typography>
            <IconButton >
              <FileCopyIcon style={{ color: "#5f697f" }} />
            </IconButton>
            <Typography gutterBottom variant="caption" component="div" style={{ color: "#cacedb" }}>
              WBNB/DEXT
            </Typography>
            <IconButton>
              <FileCopyIcon style={{ color: "#5f697f" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid justifyContent='flex-end' container item xs={6} md={8}>
          <Box className='box' height="9ch" >
            <Grid container alignItems="center" className='search'>
              <GoogleIcon />
              <FormControl sx={{ m: 1, width: '60ch' }}>
                <InputLabel htmlFor="outlined-adornment-amount" style={{ color: '#cacedb' }} >Search</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  startAdornment={<SearchIcon style={{ color: '#cacedb' }} />}
                  label="Amount"
                  size='small'
                />
              </FormControl>
              <IconButton>
                <FilterAltIcon style={{ color:'#00b8d8'}}/>
              </IconButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BrandSearch;
