import React, {Component} from 'react'
import ButtonPad from './BottonPad'
import Display from './Display'
import Switchs from './Switchs'
import BarraVol from './BarraVol'
import audio from '../bankAudio/audios'

  
class ContPrincipal extends Component{
    constructor(props){
        super(props)
        this.state={
            powerOn:true,
            switchBank:true,
            nameBank:'Heater Kit',
            audios: audio.bankOne,
            tono:' ',
            volume: 0.5
            
        }
        this.changeBanFunc=this.changeBanFunc.bind(this)
        this.powerFunc=this.powerFunc.bind(this)
        this.banFunc=this.banFunc.bind(this)
        this.receivedData=this.receivedData.bind(this)
        this.changeVolume=this.changeVolume.bind(this)
    }
    powerFunc=()=>{
      
            this.setState({
                powerOn:!this.state.powerOn
                
                })
                
    }
   
    changeBanFunc=()=>{
        
        this.setState({
            switchBank:!this.state.switchBank,
            
        })
        this.banFunc()
        
    }
    banFunc=()=>{
        
   
        if(this.state.switchBank){
          
            this.setState({
                audios:audio.bankTwo,
                nameBank:'Smooth Piano Kit',
                tono:'Smooth Piano Kit'
            })
       
        }
        
           else{ 
                this.setState({
                    audios:audio.bankOne,
                    nameBank:'Heater Kit',
                    tono:'Heater Kit'
                })
            
            
        }
        
    
       
    }
    receivedData=(dataChild)=>{
        
        this.setState({
            tono:dataChild
        }
        )
        
    }
    changeVolume=(e)=>{
        this.setState({
            volume:e.target.value,
            tono:Math.round(e.target.value*100)
        })
    }
   componentDidMount(){

   }
           
    render(){
       
             console.log(this.state.tono)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        const{powerOn, audios,tono}=this.state
       
      
        return(
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center ">
                <Display pintar={tono}/>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-6 col-md-4">
                {
            audios.map((ind,exp)=>{
                
                return(
                  
                <ButtonPad key={`btnP-${exp}`} letter={ind.keyTrigger} sonido={ind.url} actb={powerOn}
                tonoId={ind.id} funcTono={this.receivedData} vol={this.state.volume}/>
                  
                      
                )
            })
            
            
            }
            </div>
            <div className="col-6">
            <Switchs key="1" onClick={this.powerFunc}  ids="power" onOff={true} />
            <Switchs key="2" onClick={this.changeBanFunc}  ids="selectBank" onOff={powerOn}/>
            
            <BarraVol key="barraVolumen" act={powerOn} val={this.state.volume} chang={this.changeVolume}/>
            
            </div>
            
            </div>
            </div>
        )
       
       
    }
}
export default ContPrincipal