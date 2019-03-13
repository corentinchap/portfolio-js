import { FETCH_PROJECTS } from '../actions/types';



export default function(state = null, action) {
    console.log('called reducer project')
    switch (action.type){
        case FETCH_PROJECTS:
            return action.payload || false;

        default:
            return state;
    }
  
}