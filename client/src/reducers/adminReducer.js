import { ADMIN_UPDATE_PREVIEW } from '../actions/types';


export default function(state = false, action) {
    switch (action.type){
        case ADMIN_UPDATE_PREVIEW:
            return {
                lastest: action.payload
            }
        default:
            return state;
    }
  
}