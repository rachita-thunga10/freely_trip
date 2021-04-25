import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import palette from '../../assets/colors';
import {Namecss, Datecss,Destinationcss,Statuscss} from "./cards";
import Box from "@material-ui/core/Box";
import firebase from 'firebase/app';
import 'firebase/analytics';

const Usestyles = (theme:any) => ({

  cardroot: {
    minWidth: 275,
    marginLeft:"20px",
    background: palette.TRIP_CARD_BACKGROUND,
    
  },  
  
});
  


const mapStateToProps = (state: any) => ({
  data:state
});

function handleClick(item: any) {
  console.log("data in handleclick",item);
  const config = {
    measurementId:"G-PQSLT193C8",
  };
    
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    const analytics = firebase.analytics();
    analytics.logEvent('start_game')
  }else {
    firebase.app(); // if already initialized, use that one
    console.log(firebase);
    firebase.analytics.EventName.VIEW_ITEM.charAt(item.name);
    firebase.analytics.EventName.VIEW_ITEM.charAt(item.startDate);
    firebase.analytics.EventName.VIEW_ITEM.charAt(item.endDate);       
  }
}

class Cards extends Component<any, any> {
  render () {
    const { classes } = this.props as any;
    const data = this.props?.data?.loginReducer?.check_tripdata;
      return (
        <Box marginLeft="25%" marginTop="2%" display="flex" flexDirection="row">
          {data.map((item:any) => (
            <Card 
              className={classes.cardroot} 
              variant="outlined" 
              key={item.id}
              style={{
                background: `${item.status}` === "NOT_STARTED" ? palette.TRIP_CARD_BACKGROUND_HIGHLIGHTED : palette.TRIP_CARD_BACKGROUND 
              }}       
              onClick={() => handleClick({ item })}
            >
              <CardContent>
                <Typography>
                  <Namecss>
                    <b>Trip Id:</b>{item.id} 
                  </Namecss>
                </Typography>
                <Typography >
                  <Namecss>
                    <b>Name:</b>{item.name} 
                  </Namecss>
                </Typography>
                <Typography >
                  <Datecss>
                    <b>Start Date:</b>{item.startDate} 
                  </Datecss>
                </Typography>
                <Typography >
                  <Datecss>
                    <b>End Date:</b> {item.endDate} 
                  </Datecss>
                </Typography>
                <Typography data-status={item.status} className="status">
                  <Statuscss>
                    <b>Status:</b>{item.status} 
                  </Statuscss>
                </Typography>
              <span>
                <Typography>
                  <Destinationcss>
                    <b>Destinations:</b>
                  </Destinationcss>
                </Typography> 
                {item.destinations.map((des:any) => (
                  <Typography key={des}>
                    <Destinationcss>
                      {des}
                    </Destinationcss>
                  </Typography>
                ))}
              </span>
            </CardContent>
        </Card>
        ))}
      </Box>
    )
  }
}               
    
export default connect(
    mapStateToProps,
)(withStyles(Usestyles as any)(Cards));



