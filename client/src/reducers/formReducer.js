import { MAIL_SENT } from '../actions/types';

export default function(state = false, action) {
    switch (action.type){

        case MAIL_SENT:
            return true;

        default:
            return state;
    }
  
}