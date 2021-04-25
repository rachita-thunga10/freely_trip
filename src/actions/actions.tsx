import { PULL_TRIPLIST } from "./actionTypes";

var data = require('../assets/trip_list.json');

export const triplist_pull = () => {
  return async (dispatch: any, getState: any, client: any) => {
    console.log(data);
    dispatch(fetchtriplistInfoSuccess(data));    
  }
};

export const fetchtriplistInfoSuccess = (data: any) => {
  console.log(data);
  return {
    type: PULL_TRIPLIST,
    state: "PULL_TRIPLIST",
    payload: data
  };

  
};



