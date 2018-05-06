import { GETBLOGS, PUBLICBLOGS} from '../Actions/BlogActions';

export default (state={}, action)=>{
    switch(action.type) {
        case GETBLOGS:
        return {
            ...action.payload
        }
        case PUBLICBLOGS:
        return {
            ...action.payload
        }
        default:
            return state;
    }
}