// import logo from './logo.svg';
import './tradingHistory.css';
import { Button, Grid, Icon, IconButton, TableCell } from '@mui/material';
import TradedHistory from './history';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';

function TradingHistory() {
  return (
    <Box className='tradingHistory'>
      <Grid container>
        <Grid item xs={6} md={2} container direction="column" spacing={2}>
          <Grid item container direction="column">
            <Box>
              <Box style={{ backgroundColor: '#21272b', color:"white" ,padding:"10px"}}>
                <Grid item justifyContent="flex-end" container>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Top Sponsor
                  </Typography>
                </Grid>
              </Box>
              <Box style={{ backgroundColor: 'black', paddingTop:"10px"}}>
                <Grid item container>
                  <Grid item xs={6} md={2}>
                    <Stack direction="row" spacing={0} style={{marginLeft:'20px'}}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={10} container direction="column" style={{ color: "white" , paddingLeft:"40px"}}>
                    <Grid item container justifyContent="flex-start" alignItems="center">
                      <Typography gutterBottom variant="h5" component="div" style={{color:"#45d4df"}}>
                        METAV
                      </Typography>
                      <IconButton>
                        <HomeIcon style={{color:"#45d4df"}}/>
                      </IconButton>
                    </Grid>
                    <Grid item container justifyContent="flex-start" alignItems="center">
                      <Typography gutterBottom variant="subtitle1" component="div">
                        METAVPAD
                      </Typography>
                      <IconButton>
                        <HomeIcon style={{color:"#45d4df"}}/>
                      </IconButton>
                      <IconButton>
                        <TwitterIcon style={{color:"#45d4df"}} />
                      </IconButton>
                      <IconButton>
                        <TelegramIcon style={{color:"#45d4df"}}/>
                      </IconButton>
                    </Grid>                    
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="caption" component="div" style={{color:"white"}} >
                      METAVPAD-BUILDING THE METAVERSE, ONE BLOCK AT A TIME
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Grid item></Grid>
          </Grid>
          <Grid item>
            <Box style={{ background: "#606ddf", padding:"15px" }}>
              <Typography gutterBottom variant="h4" component="div">
                Hero
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Box style={{ backgroundColor: '#21272b', color: "white", padding: "10px" }}>
                <Grid item justifyContent="flex-end" container>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    TOKEN NEWS
                  </Typography>
                </Grid>
              </Box>
              <Box style={{ backgroundColor: 'black', paddingTop: "10px" }}>
                <Grid item container direction="column">
                  <Grid item>
                    <TableCell>fefe</TableCell>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={6} md={10} direction="column" container className='history'>
          <Grid item>
            <Grid container justifyContent="flex-start" alignItems="center" className='tradhistory'>
              <Grid item>
                <Button variant='contained'>Trade History</Button>
              </Grid>
              <Grid item>
                <Button variant='contained' disabled className='myPosition'>My Position</Button>
              </Grid>
              <Grid item className='historyTitle'>
                <Typography gutterBottom variant="subtitle1" component="div">
                  DEXT (last 524 trades)
                </Typography>
              </Grid>
              <Grid item>
                <IconButton>
                  <FilterAltIcon style={{ color: '#00b8d8' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TradedHistory />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TradingHistory;
