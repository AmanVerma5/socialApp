import React, { useState } from "react";


const ItemPoster=({prop})=>{
    let [click,setClick]=useState(true)
    console.log(prop)
    return(
        <div className="item-poster">
            <div className="image">
                <img src={prop.imgsrc} alt="pic" />
                <div className="poster-title">{prop.title}</div>
            </div>
            <div className="left">
                <div className="buttons">
                    <button onClick={()=>setClick(true)}>Detail</button>
                    <button onClick={()=>setClick(false)}>User Info</button>
                </div>
                <div className="poster-desc">
                    {
                        click?
                        (
                            prop.body
                        ):(
                            `Post was posted by ${prop.userId}`
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemPoster;