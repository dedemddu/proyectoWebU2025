import React from 'react'

const CircleColor = ({color = '#ffffff'}) => {
    if(!color){
        return (<p>No tiene color</p>)
    }
  return (
    <div 
        style = {{
            borderRadius: "50%",
            botder: "1px solid gray",
            backgroundColor:color,
            width: "30px",
            height: "30px"
        }}
    >
        
    </div>
  )
}

export default CircleColor