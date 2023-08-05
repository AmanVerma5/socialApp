import { FETCH_POSTS_REQUESTS,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "./actionTypes";
import axios from "axios";

export const postFetching=()=>{
    return {
        type:FETCH_POSTS_REQUESTS
    }
}

export const postFetchSuccess=(data)=>{
    return{
        type:FETCH_POSTS_SUCCESS,
        payload:data
    }
}

export const postFetchFailure=(error)=>{
    return{
        type:FETCH_POSTS_FAILURE,
        payload:error
    }
}

export function fetchPost(){
    return function(dispatch){
        dispatch(postFetching())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            let arr=response.data.map((element)=>{
                return{
                    ...element,
                    imgsrc:`https://picsum.photos/200?random=${element.id}`
                }
            })
            dispatch(postFetchSuccess(arr))
        })
        .catch((error)=>{
            dispatch(postFetchFailure(error))
        })
    }
}