import Axiosinstance from './AxiosInstance';
import { notify } from 'react-notify-toast';

const BASE_URL='http://localhost:5000/api/v1/blog'
const ADDBLOG = 'addblog'
export const GETBLOGS = 'getblogs'

// Action creators
const AddBlog=(response)=>{
    return{
        'type':ADDBLOG,
        'payload':response.data.message
    }
}

export const Getblogs=(response)=>{
    return{
        'type':GETBLOGS,
        'payload':response.data
    }
}
// post Action
export const AddBlogAction=(data)=>{
    return async (dispatch)=>{
        await Axiosinstance.post(`${BASE_URL}/blogs`, data)
        .then(response=>{
            dispatch(AddBlog(response));
            document.getElementById("CloseAddModal").click();
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.messages.artist, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });
    }
}

// Fetch action
export const FetchBlogAction=()=>{
    return async (dispatch)=>{
        await Axiosinstance.get(`${BASE_URL}/blogs`)
        .then(response=>{
            console.log(response)
            dispatch(Getblogs(response));
        }).catch(error=>{
            notify.show('error occured', 'error', 3000)
        });
    }
}

// Update action
export const EditBlogAction=(id, data)=>{
    return async (dispatch)=>{
        await Axiosinstance.put(`${BASE_URL}/blogs/${id}`, data)
        .then(response=>{
            document.getElementById(`closeEditModal${id}`).click();
            dispatch(Getblogs(response));
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            notify.show('error occured', 'error', 3000)
        });

    }

}

// delete action
export const DeleteBlogAction=(id)=>{
    return async (dispatch)=>{
        await Axiosinstance.delete(`${BASE_URL}/blogs/${id}`)
        .then(response=>{
            document.getElementById(`closeDeleteModal${id}`).click();
            dispatch(Getblogs(response));
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            notify.show('error occured', 'error', 3000)
        });
    }
}