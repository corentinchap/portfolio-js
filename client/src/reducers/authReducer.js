import { FETCH_USER, CHECK_AUTH } from '../actions/types';

export default function(state = null, action) {
    //console.log(action);
    switch (action.type){
        case FETCH_USER:
            return action.payload || false;
        
        case CHECK_AUTH:
            return action.payload || false;

        default:
            return state;
    }
  
}