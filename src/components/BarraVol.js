import React from 'react'

const BarraVol=({act,val,chang})=>{
    return(
        <div>
           <h6> Volumen</h6>
        {act ? <input type="range" className="custom-range" id="customRange1" onChange={chang} value={val} min="0" max="1" step="0.01"/>:
        <input type="range" className="custom-range" id="customRange1" disabled/>}
        </div>
    )
}
export default BarraVol