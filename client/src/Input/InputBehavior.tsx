import React from 'react'
import { InputTemplate } from './InputTemplate'

interface Props {
    charactersLimit?: number
    title: string
    error?: boolean
}

interface State {
    textValue: string
    howManyLeft: number
    charactersLimit: number
}

//how many left ???

export class InputBehaviour extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            textValue: '',
            howManyLeft: this.props.charactersLimit || 0,
            charactersLimit: this.props.charactersLimit || 0,
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    render(): JSX.Element {
        const { textValue, howManyLeft } = this.state
        let { title, error } = this.props
        error = error ? error : false
        return React.createElement(InputTemplate, {
            textValue,
            title,
            howManyLeft,
            error,
            onInputChange: this.onInputChange,
        })
    }
    public onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            textValue: e.target.value,
            howManyLeft: this.props.charactersLimit
                ? this.state.charactersLimit - e.target.value.length
                : this.state.charactersLimit + e.target.value.length,
        })
    }
}
