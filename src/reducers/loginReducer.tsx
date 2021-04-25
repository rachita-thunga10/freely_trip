import {PULL_TRIPLIST} from "../actions/actionTypes";


const initialState: any = {
};

export default function loginReducer(state = initialState, action: any) {
  switch (action.type) {
    case PULL_TRIPLIST:
      const check_tripdata = action.payload;
      action.payload = { check_tripdata};
      console.log("payload",action.payload);

      return {
        ...state,
        ...action.payload
      };
      
 default:
      return state;
  }
}

