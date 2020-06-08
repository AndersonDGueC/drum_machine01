import React, {Component} from 'react'

class BottonPad extends Component{
    constructor(props){
        super(props)
       
        
            this.audio=React.createRef();
            
        this.sendDataParent=this.sendDataParent.bind(this)
       this.playClick=this.playClick.bind(this)
       this.playTecla=this.playTecla.bind(this)
    }
    playClick=()=>{
        this.audio.current.play(); 
        document.getElementById(this.props.letter).volume=this.props.vol; 
        this.sendDataParent()
    }
    sendDataParent=()=>{
        this.props.funcTono(this.props.tonoId)
    }

    playTecla=(e)=>{
        
        const id=e.key.toUpperCase();
        const audio=document.getElementById(id);
       
        if(id===this.props.letter){
            
            const fond=audio.parentNode;
            fond.classList.add('active')
            setTimeout(()=>{fond.classList.remove('active')},300);
            audio.volume=this.props.vol;
            audio.play();
            this.sendDataParent()
        }
        
        
    }

    componentDidMount(){
    
        document.addEventListener('keydown',this.playTecla);
           
    }
   
    render(){
        //console.log(this.props.letter)
        
        if(this.props.actb){
return(
    
    <button className="btn btn-outline-secondary drum-pad" id={`bt-${this.props.letter}`}
    onClick={this.playClick} 
    >
        <audio id={this.props.letter} ref={this.audio}  className="clip" id={`${this.props.letter}`} src={this.props.sonido}>{this.props.tonoId
        }</audio>
    {this.props.letter}
    
    </button>
)}
else{
    return(
    
        <button className="btn btn-outline-secondary drum-pad" id={`bt-${this.props.letter}`}
        onClick={this.playClick} disabled
        >
            <audio id={this.props.letter} ref={this.audio}  className="clip" id={`${this.props.letter}`} src={this.props.sonido}></audio>
        {this.props.letter}
        
        </button>
    )
}
    }

}

export default BottonPad;