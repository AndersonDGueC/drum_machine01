import React from 'react'

const BarraVol=({act})=>{
    return(
        <div>
           <h6> Volumen</h6>
        {act ? <input type="range" className="custom-range" id="customRange1"/>:
        <input type="range" className="custom-range" id="customRange1" disabled/>}
        </div>
    )
}
export default BarraVol