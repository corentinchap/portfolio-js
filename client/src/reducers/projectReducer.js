import { RECEIVE_PROJECTS, REQUEST_PROJECTS } from '../actions/types';

var initState ={
    list: undefined,
    isLoading: true
}
export default function(state = initState, action) {
    switch (action.type){
        case REQUEST_PROJECTS:
            return initState;

        case RECEIVE_PROJECTS:
            return {
                list: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
  
}