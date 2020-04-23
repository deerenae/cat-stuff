import React from 'react'

function Cat(props){
    return(
        <div>
            <li>Name: {props.cat.name} Location: {props.cat.place}</li>
        </div>
    )
}
export default Cat