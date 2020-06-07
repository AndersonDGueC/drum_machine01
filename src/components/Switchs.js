import React from 'react'


const Switchs=({ids,onClick,onOff})=>{
    
    return (
        <div className={ids}>
            <h6>{ids}</h6>
        <label className="switch">
           {onOff && (ids==='power')? <input type="checkbox" onClick={onClick} defaultChecked/>:
            onOff? <input type="checkbox" onClick={onClick}/>:
           <input type="checkbox" onClick={onClick} disabled/>}
            <span className="slider round"></span>
        </label>
      </div>
    )
}

export default Switchs