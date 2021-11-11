import * as React from 'react'
import { SliderTemplateAdmin } from './SliderTemplateAdmin'

interface Props {}
interface State {
    image: string
    sImage: string
    text: string
    textColor: string
    buttonText: string
    buttonTextColor: string
    buttonPosition: string
    isCreate: boolean
}
export class SliderBehaviourAdmin extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            image: '',
            sImage: '',
            text: '',
            textColor: '',
            buttonText: '',
            buttonTextColor: '',
            buttonPosition: '',
            isCreate: true,
        }
    }

    public render(): JSX.Element {
        const {
            image,
            sImage,
            text,
            textColor,
            buttonText,
            buttonTextColor,
            buttonPosition,
            isCreate,
        } = this.state
        return React.createElement(SliderTemplateAdmin, {
            isCreate,
            image,
            sImage,
            text,
            textColor,
            buttonText,
            buttonTextColor,
            buttonPosition,
            toggleType: this.toggleType,
        })
    }

    public toggleType = () => {
        this.setState({ isCreate: !this.state.isCreate })
    }
}
