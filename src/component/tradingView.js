// import logo from './logo.svg';
import './tradingView.css';
import { Button, Grid, IconButton, Link } from '@mui/material';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import InfoIcon from '@mui/icons-material/Info';
import LinearProgressWithLabel from './linearProgressWithLabel';
import { useState, useEffect} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LockIcon from '@mui/icons-material/Lock';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MoneyIcon from '@mui/icons-material/Money';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LinearProgress from '@mui/material/LinearProgress';

function TradingView() {
  const [progress, setProgress] = useState(10);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box className='tradingView'>
      <Grid container>
        <Grid item xs={6} md={3} >
          <Box className='infoView'>
            <Grid container direction='column' spacing={1}>
              <Grid item container spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Button variant='contained' size="small" width="4px">
                    <ShareIcon />
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color="warning">Buy/Sell</Button>
                </Grid>
              </Grid>
              <Grid item container direction='column' alignItems="flex-end" className='showValue'>
                <Grid item >
                  <Grid container alignItems="center">
                    <Grid item>
                      <ArrowCircleUpIcon  />
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="div">
                        $0.43202776
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={1}> 
                    <Grid item style={{color: "red"}}>
                      <Typography gutterBottom variant="caption" component="div">
                        (24h: -2.69%)
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="caption" component="div">
                        0.00081143 BNB
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container className='valuechange'>
                <Grid item md={6} direction='column' container alignItems="flex-end">
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                       Total liquidity:
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                       Daily volume:
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                       Pooled WBNB:
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      Total tx:
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      Holders:
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      Total Market Cap:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item md={6} direction='column' container alignItems="flex-end">
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      $000000
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      $00000000
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      0000000
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      00000
                    </Typography>
                  </Grid>
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      00000
                    </Typography>
                  </Grid>                  
                  <Grid tiem>
                    <Typography gutterBottom variant="caption" component="div">
                      $00000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Button variant="contained" size="small" className='viewInfoMoreBtn'>
                  <Grid container alignItems="center" spacing={1} className='viewInfoMoreGrid' >
                    <Grid item>
                      <InfoIcon />
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="caption" component="div">
                        View more info
                      </Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
              <Grid item spacing={2} container>
                <Grid item md={6}  >
                  <Box className='DextScore'>
                    <Grid container className='dext'>
                      <Grid item xs={6} md={6} >
                        <Grid item container direction="column" spacing={0}>
                          <Grid item>
                            <LinearProgressWithLabel value={progress} color="success" />
                          </Grid>
                          <Grid item>
                            <LinearProgressWithLabel value={progress} />
                          </Grid>
                          <Grid item>
                            <LinearProgressWithLabel value={progress} />
                          </Grid>
                          <Grid item>
                            <LinearProgressWithLabel value={progress} />
                          </Grid>
                          <Grid item>
                            <LinearProgressWithLabel value={progress} />
                          </Grid>                          
                        </Grid>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Grid item container direction="column" >
                          <Grid item className='dextValue'>
                            <Typography gutterBottom variant="caption" component="div">
                              DEXT Score
                            </Typography>
                          </Grid>
                          <Grid item className='percentageValue'>
                            <Typography gutterBottom variant="h4" component="div">
                              99
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item md={6} >
                  <Box className='ContractDetails'>
                    <Grid container direction="column" justifyContent="center">
                      <Grid item className='contractlabel'> 
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Contract Details
                        </Typography>
                      </Grid>
                      <Grid item container justifyContent="center" >
                        <Grid item className='first'>
                          <AddBoxIcon />
                        </Grid>
                        <Grid item className='second'>
                          <LockIcon />
                        </Grid>
                        <Grid item className='second'>
                          <ViewInArIcon />
                        </Grid>
                        <Grid item className='second'>
                          <MoneyIcon />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center" spacing={1} className='viewInfoMoreGrid' justifyContent="center">
                  <Grid item>
                    <IconButton className='IconInfoBtn'>
                      <InfoIcon style={{ color: "#00b8d8" }}/>
                    </IconButton>
                  </Grid>
                  <Grid item className='IconInfoLabel'>
                    <Typography gutterBottom variant="caption" component="div">
                      Community trust (389 votes)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item xs={6} md={2}>
                  <ThumbUpOffAltIcon  style={{color:'#cacedb'}}/>
                  <Typography gutterBottom variant="caption" component="div" style={{color:"#17c671"}}>
                    90%
                  </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <ThumbDownOffAltIcon style={{color:'#cacedb'}}/>
                  <Typography gutterBottom variant="caption" component="div" style={{color:"#be1c3e"}}>
                    10%
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} md={9} className='RealTimeChart'>
          <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TradingView;
