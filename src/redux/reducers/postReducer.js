import { FETCH_POSTS_FAILURE,FETCH_POSTS_REQUESTS,FETCH_POSTS_SUCCESS } from "../actions/actionTypes"


let initialState={
    loading:false,
    data:[],
    error:null
}

const postReducer=(state=initialState,action)=>{

    switch(action.type){
        case FETCH_POSTS_REQUESTS:
            return(
                {
                    ...state,
                    loading:true
                }
            )
        case FETCH_POSTS_SUCCESS:
            return(
                {
                    ...state,
                    loading:false,
                    data:action.payload,
                    error:null
                }
            )    
        case FETCH_POSTS_FAILURE:
            return(
                {
                    ...state,
                    loading:false,
                    data:[],
                    error:action.payload
                }
            )    
        default:
            return state;    
    }

}


export default postReducer