import React from 'react'
import { ClassTextAreaTemplate } from './ClassTextAreaTemplate'

interface Props {
    textValue: string
    inputOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    title: string
    isRequired: boolean
    charactersLimit: number
}
interface State {
    areaHeight: string
    textValue: string
}

export class ClassTextAreaBehaviour extends React.Component<Props, State> {
    inputRef = React.createRef<HTMLInputElement>()

    constructor(props: Props) {
        super(props)
        this.state = {
            areaHeight: '36px',

            textValue: '',
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.props.textValue !== prevProps.textValue) {
            this.setState({ areaHeight: `${this.inputRef.current?.scrollHeight}px` })
        }
    }

    render(): JSX.Element {
        const { areaHeight, textValue } = this.state
        const { title, isRequired, charactersLimit } = this.props
        return React.createElement(ClassTextAreaTemplate, {
            title,
            charactersLimit,
            areaHeight,
            textValue,
            inputRef: this.inputRef,
            isRequired,
            onInputChange: this.onInputChange,
        })
    }

    public onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ textValue: e.target.value, areaHeight: 'auto' })
        this.props.inputOnChange(e)
    }
}
