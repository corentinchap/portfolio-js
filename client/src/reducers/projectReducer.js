import { RECEIVE_PROJECTS, REQUEST_PROJECTS } from '../actions/types';

var initState ={
    isLoading: true,
    projects: []
}
export default function(state = initState, action) {
    switch (action.type){
        case REQUEST_PROJECTS:
            return initState;

        case RECEIVE_PROJECTS:
            return {
                isLoading: false,
                projects: action.payload
            };
        default:
            return state;
    }
  
}