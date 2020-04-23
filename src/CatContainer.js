import React from 'react'
import Cat from './Cat'

function CatContainer(props){
    console.log(props.cats)

   

    return(
        <div>
            {props.cats.map(cat =>{
                return <Cat cat={cat}/>
            })}

        </div>
        
        
    )



}
export default CatContainer