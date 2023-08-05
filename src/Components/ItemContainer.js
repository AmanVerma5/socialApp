import React from "react";
import { Link } from "react-router-dom";


const ItemContainer=({prop})=>{

    
    return(
            <div className="item-container">
            <div className="img"><img src={prop.imgsrc} alt="pic"/></div>
                <div className="descriptions">
                    <div className="title">{prop.title}</div>
                    <div className="details">
                        <div className="read-more">{prop.body}</div>
                        <div><Link to={{pathname:`/item/${prop.id}`, state: { itemProp: prop } }} className="item-link"><button className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#FFFFFF" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button></Link>
                        </div>
                    </div>    
                </div>
            </div>
        
    )
}

export default ItemContainer
