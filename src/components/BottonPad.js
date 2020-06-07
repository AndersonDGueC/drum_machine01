import React, {Component} from 'react'

class BottonPad extends Component{
    constructor(props){
        super(props)
        
            this.audio=React.createRef();
        
       this.playClick=this.playClick.bind(this)
    }
    playClick=()=>{
        this.audio.current.play();   
        
    }
    
    componentDidMount(){
        document.addEventListener('keydown',(e)=>{
           
            const id=e.key.toUpperCase();
            const audio=document.getElementById(id);
            if(audio){
                const fond=audio.parentNode;
                fond.classList.add('active')
                setTimeout(()=>{fond.classList.remove('active')},300)
                audio.play();
            }
           });
    }

    render(){
        //console.log(this.props.letter)
return(
    
    <button className="btn btn-outline-secondary drum-pad" id={`bt-${this.props.letter}`}
    onClick={this.playClick}
    >
        <audio id={this.props.letter} ref={this.audio}  className="clip" id={`${this.props.letter}`} src={this.props.sonido}></audio>
    {this.props.letter}
    
    </button>
)
    }

}

export default BottonPad;