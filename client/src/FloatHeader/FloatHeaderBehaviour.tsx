import * as React from 'react'
import { FloatHeaderTemplate } from './FloatHeaderTemplate'


interface Props{
    isArticle:boolean
}

interface State{
    isScroll:boolean
    lastScroll:number
}

export class FloatHeaderBehaviour extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)

        this.state={
            isScroll:false,
            lastScroll:0
        }
    }
    // https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
    
    public componentDidMount() {
        window.addEventListener('scroll', this.scrollhandler)
        window.addEventListener("scroll", this.moveHeader);
    }
    public componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollhandler)
        window.removeEventListener('scroll',this.moveHeader)
    }
    public render():JSX.Element {
        const {isScroll} = this.state
        const {isArticle} = this.props
        return <FloatHeaderTemplate isScroll={isScroll} isArticle={isArticle}/>
    }
    public scrollhandler = () => {
       this.setState({isScroll : !!window.scrollY})
    }
    public moveHeader = () => {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove(scrollUp);
            return;
        }

        if (currentScroll > this.state.lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        
        } else if (
            currentScroll < this.state.lastScroll &&
            body.classList.contains(scrollDown)
        ) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
            
        }
            this.setState({lastScroll:currentScroll});
        }
}