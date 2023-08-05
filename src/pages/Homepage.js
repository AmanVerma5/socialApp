import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ItemContainer from "../Components/ItemContainer";
import { fetchPost } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";


const Homepage=()=>{
    const {loading,data,error}=useSelector((state)=>state)

    const dispatch=useDispatch();

    useEffect(
        ()=>{
            dispatch(fetchPost())
        },[]
    )
    return(
        <div>
            <Navbar />
            <h1>Social Media For Travellers</h1>
            <div className="search-bar">
                <svg className="search-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6.57 1A5.57 5.57 0 1 1 1 6.57 5.57 5.57 0 0 1 6.57 1m0-1a6.57 6.57 0 1 0 6.57 6.57A6.57 6.57 0 0 0 6.57 0z"/><path d="m10.031 11.447 1.415-1.414 4.193 4.193-1.415 1.414z"/></svg>
                <input type="text" placeholder="Search here" />
            </div>
            <div className="display-item">
                {
                  
                    data && data.map((item)=>(
                        <ItemContainer prop={item}/>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Homepage