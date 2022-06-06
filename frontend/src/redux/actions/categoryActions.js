import axios from 'axios'
import { GET_ALL_CATEGORY,GET_ALL_CATEGORY_SUCCESS,GET_ALL_CATEGORY_FAIL,
CLEAR_ERROR,
} from "../constants/categoryConstant";

export const getCategory=()=>async (dispatch)=>{
    try {
        dispatch({
            type:GET_ALL_CATEGORY })
        const {data}=await axios.get('/api/admin/category');

dispatch({type:GET_ALL_CATEGORY_SUCCESS,
payload:data,
})

    } catch (error) {
        dispatch({
            type:GET_ALL_CATEGORY_FAIL,
            payload:error.response.data.message,
        })
    }
}


export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    })
}

