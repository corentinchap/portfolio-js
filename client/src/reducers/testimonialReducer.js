import { RECEIVE_TESTIMONIALS, REQUEST_TESTIMONIALS } from '../actions/types';

const initState = {
    isLoading: true,
    testimonials: []
}
export default function(state = initState, action) {
    switch (action.type){

        case REQUEST_TESTIMONIALS:
            return state;
        case RECEIVE_TESTIMONIALS:
            return {
                isLoading: false,
                testimonials: action.payload
            };
        default:
            return state;
    }
  
}