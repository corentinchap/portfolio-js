import { RECEIVE_SKILLSETS, REQUEST_SKILLSETS } from '../actions/types';

var initState ={
    isLoading: true,
    skillsets: []
}
export default function(state = initState, action) {
    switch (action.type){
        case REQUEST_SKILLSETS:
            return initState;

        case RECEIVE_SKILLSETS:
            return {
                isLoading: false,
                skillsets: action.payload
            };
        default:
            return state;
    }
  
}