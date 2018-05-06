import { GETBLOGS} from '../Actions/BlogActions';

export default (state={}, action)=>{
    switch(action.type) {
        case GETBLOGS:
        return {
            ...action.payload
        }
        default:
            return state;
    }
}