import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import palette from '../../assets/colors';
import {Namecss, Datecss,Destinationcss,Statuscss} from "./cards";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';

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



class Cards extends Component<any, any> {
  render () {
    const { classes } = this.props as any;
    const data = this.props?.data?.loginReducer?.check_tripdata;
      return (
        <Box marginLeft="10px" marginTop="2%" display="flex" flexDirection="row" >
          <Grid container >
            
          {data.map((item:any) => (
            
            <Grid item xs={6}>
            <Card 
              className={classes.cardroot} 
              variant="outlined" 
              key={item.id}
              style={{
              
              }}       
            
              
            >
              <CardContent>
             {/*   <Typography>
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
                </span>*/}
              <Typography >
                  <Datecss>
                  <iframe src={item.link} width="480" height="480" frameBorder="0" allowFullScreen></iframe> 
                  </Datecss>
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        
        ))}

        </Grid>
      </Box>
    )
  }
}               
    
export default connect(
    mapStateToProps,
)(withStyles(Usestyles as any)(Cards));



