import React,{Component} from 'react'
//import { render } from 'react-dom';
class Welcome extends Component{
    constructor() {
        super();
        var today=new Date();
        var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        this.state = {
    
          currentTime: time
    
        }
    
      }
    render(){
        return(
            <div id="txt">{ this.state.currentTime }</div>
        )
    }
}
export default Welcome