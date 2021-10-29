import React from 'react';
import { CarouselTemplate } from './CarouselTemplate';


interface Props{

}
interface State{

}
export class CarouselBehaviour extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={

        }
    }
    
    render():JSX.Element{
        return <CarouselTemplate/>
    }
}