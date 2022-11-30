import React, { useState } from "react";
import List1 from "./List1";
const Todo = () => {
    const [oldval1, setval1] = useState()
    const [oldval2, setval2] = useState([])
    const Event1 = (e) => {
        setval1(e.target.value)
    }
    const Event2 = () => {
        setval2((oldItems) => {
            return [...oldItems, oldval1]
        })
        setval1("")
    }
    const Event3 = (id) => {
        console.log("deleted")
        setval2((oldItems) => {
            return oldItems.filter((currele, index) => {
                return index != id
            })
        })
    }
    return (<>
        <div className="box">
            <h1 className="heading">ToDo List</h1>
            <input type="text" className="in" placeholder="Add a Items" onChange={Event1} value={oldval1}></input>
            <button className="but" onClick={Event2}>+</button>
            <ul>

                {
                    oldval2.map((currval, index) => {
                        return <List1 value={currval} id={index} key={index} fun={Event3} />
                    })
                }

            </ul>
        </div>
    </>)
}
export default Todo

