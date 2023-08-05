import React from "react";
import Navbar from "../Components/Navbar";
import ItemPoster from "../Components/ItemPoster";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import ItemContainer from "../Components/ItemContainer";





const Item=(props)=>{
    const { id } = useParams(); // Access the "id" from route parameters
    const {loading,data,error}=useSelector((state)=>state)
    
    let poster=data.filter((element)=>{
       
        return element.id==id
    })
    


    return(
        <div>
            <Navbar />
            <div className="heading">
                <h1>Post Number {poster[0].id}</h1>
            </div>
            <ItemPoster prop={poster[0]}/>
            <h1>More Posts</h1>
            <div className="display-item1">
                {
                  
                    data && data.map((item)=>(
                        <ItemContainer prop={item}/>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Item