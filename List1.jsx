import React from "react";
const List1=(props)=>{
    return(<>
        <div className="div1">
         <button className="butt" 
                onClick={()=>{
                    props.fun(props.id)
         }}>x</button>
        <li>{props.value}</li>
        </div>
    </>)
}
export default List1