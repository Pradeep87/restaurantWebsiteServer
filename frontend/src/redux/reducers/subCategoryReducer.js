import {GET_SUBCATEGORY_FAIL,CLEAR_ERROR,GET_SUBCATEGORY_REQUEST,GET_SUBCATEGORY_SUCCESS} from '../constants/subCategoryConstant'



export const SubCategoryReducereFunction=(state={subCategoryData:[]},action)=>{  

    switch (action.type) {
        case GET_SUBCATEGORY_REQUEST:
            return{
                loading:true,
                subCategoryData:[]
            }
            case GET_SUBCATEGORY_SUCCESS:
            return{
                  loading:false,
                  subCategoryData:action.payload.subcategory
            }

            case GET_SUBCATEGORY_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }

                case CLEAR_ERROR:
                    return{
                        ...state,error:null
                    }
    
        default:
            return state
    }

}