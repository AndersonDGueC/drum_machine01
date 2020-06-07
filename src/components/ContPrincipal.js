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
            switchBank:false,
            nameBank:'Heater Kit',
            audios: audio.bankOne
        }
        this.changeBanFunc=this.changeBanFunc.bind(this)
        this.powerFunc=this.powerFunc.bind(this)
    }
    powerFunc=()=>{
        this.setState({
            powerOn:!this.state.powerOn
            
        }) 
    }
    changeBanFunc=()=>{
        
        this.setState({
            switchBank:!this.state.switchBank
        })
        
        if(this.state.switchBank){
            this.setState({
                audios:audio.bankOne,
                nameBank:'Heater Kit'
            })
        }
        else{
            this.setState({
                audios:audio.bankTwo,
                nameBank:'Smooth Piano Kit'
            })
        }
    }
    
        
    

    componentDidMount(){
        if(this.state.powerOn){
        this.changeBanFunc();
        }
        else{
            this.setState({
                audios:audio.bankZero
            })
        }
    }
    render(){
        const{powerOn, nameBank, audios}=this.state
       console.log(this.state.audios)
      
        return(
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center ">
                <Display/>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-6 col-md-4">
                {
            audios.map((ind,exp)=>{
                return(
                  
                <ButtonPad key={`btnP-${exp}`} letter={ind.keyTrigger} sonido={ind.url}/>
                  
                      
                )
            })
            
            }
            </div>
            <div className="col-6">
            <Switchs key="1" onClick={this.powerFunc}  ids="power" onOff={true} />
            <Switchs key="2" onClick={this.changeBanFunc}  ids="selectBank" onOff={powerOn}/>
            
            <BarraVol key="barraVolumen" act={powerOn}/>
            
            </div>
            
            </div>
            </div>
        )
       
       
    }
}
export default ContPrincipal