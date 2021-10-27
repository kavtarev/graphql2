import React from 'react'
import './Unmount.scss'

interface State {
flag:boolean
}
interface Props{

}
export class UnmountBehaviour2 extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={
            flag:true
        }
    }

    componentWillUnmount(){
        console.log('unmount')
    }

   
    render(){
        return this.state.flag && <button onClick={()=>this.setState({flag:false})} className={this.state.flag ?`btn`:'unmount'}>click on me</button>
    }
}

