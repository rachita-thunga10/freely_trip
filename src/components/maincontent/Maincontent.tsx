import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { triplist_pull } from '../../actions/actions';
import Box from "@material-ui/core/Box";
import { Button } from '@material-ui/core';
import palette from '../../assets/colors';
import Cards from '../cards/Cards';

const Usestyles = (theme:any) => ({
  root: {
    flexGrow: 1,
    display: "inline",
    marginTop: "20px",
    background: palette.SCREEN_BACKGROUND,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  BoxSpanstyles: {
    marginTop:"20px",
    marginLeft:"35%",
    fontSize: "54px"
  },
  BoxButtonstyles: {
    marginTop:"20px",
    marginLeft:"35%",
    fontSize: "54px"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  loader: {
    position: "absolute",
    zIndex: 99999999,
    top: "calc(50% - 4em)",
    left: "calc(50% - 4em)",
    width: "10em",
    height: "10em",
    border: "1.1em solid rgba(0, 0, 0, 0.2)",
    borderLeft: "1.1em solid #000000",
    borderRadius: "50%",
    animationDuration: "2s",
    animation: `$load8 3000ms linear infinite`,
    transition: "opacity 0.3s"
  },
    
  overlay: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "999999"
  },
  circularprogresscolor: {
    color:"#e2e9ec",
    textAlign:"center",
    align: "center"
  },
  overlayOpacity: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "999999",
    background: "gray",
    opacity: 0.5
  },
    
  loaderHide: {
    opacity: "0"
  },

  "@keyframes load8": {
    "0%": {
    transform: "rotate(0deg)"
    },  
    "100%": {
      transform: "rotate(360deg)"
    }
  },    
});
  

const mapStateToProps = (state: any) => ({
  data:state
});
  
const mapDispatchToProps = (dispatch: any) => {
  return {
    triplist_pull: () =>
    dispatch(triplist_pull()),
  }
}
  
class Maincontent extends Component<any, any> {
  state = {
    tripsdata: false,
    showStartupSpinner: false,
  }
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    
  async loadtrips(data:any) {
    this.setState({ showStartupSpinner: true });
    await this.sleep(1000).then(() => {console.log("in sleep timer");});
    const { triplist_pull } = this.props;
    await triplist_pull();
    console.log(this.props);
    if (this.props?.data?.loginReducer?.check_tripdata?.length !== 0) {
      this.setState({tripsdata: true});
      this.setState({showStartupSpinner: false})
    }
    console.log(this.state);
  }
  render () {
    const { classes } = this.props as any;
      return (      
        <div className={classes.root}>
          <div className={this.state.showStartupSpinner ? classes.overlay : ""}>
            <div
              className={
                this.state.showStartupSpinner ? classes.overlayOpacity : ""
              }
            >
            <div
              className={
                this.state.showStartupSpinner
                  ? classes.loader
                  : classes.loaderHide
                }
            ></div>
          </div>
        </div>
        <Box display="flex" flexDirection="row">
          <span className = {classes.BoxSpanstyles}> 
            <b>Welcome to Freely Trip</b>
          </span>
        </Box>
        <Box display="flex" flexDirection="row">
          <Button 
            className= {classes.BoxButtonstyle}
            size="large" 
            style= {{ 
              'background': "darkslateblue",
              'marginLeft': "44%",
              'marginTop': "23px",
              'fontSize': "24px",
              'color': palette.TEXT,
            }} 
            variant="contained"
            onClick={this.loadtrips.bind(this)}
          >
            Load Trips
          </Button>
        </Box>
        <Box display="flex" flexDirection="row">
          {this.state.tripsdata === true ? (
            <Cards/>
          ) : (
            <></>
          )}
        </Box>
      </div>
      )
    }
}               
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(Usestyles as any)(Maincontent));
