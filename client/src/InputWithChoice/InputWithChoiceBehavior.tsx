import React from 'react'
import { InputWithChoiceTemplate } from './InputWithChoiceTemplate'

interface Props {
    title: string
    items: string[]
}
interface State {
    textValue: string
    selectedItems: string[]
    isItemsShown: boolean
}

export class InputWithChoiceBehaviour extends React.Component<Props, State> {
    inputRef = React.createRef<HTMLInputElement>()
    constructor(props: Props) {
        super(props)
        this.state = {
            textValue: '',
            selectedItems: [],
            isItemsShown: false,
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.itemOnClick = this.itemOnClick.bind(this)
        this.toggleItemsVisibility = this.toggleItemsVisibility.bind(this)
    }

    render(): JSX.Element {
        const { textValue, selectedItems, isItemsShown } = this.state
        let { title, items } = this.props

        return React.createElement(InputWithChoiceTemplate, {
            inputRef: this.inputRef,
            textValue,
            items,
            title,
            selectedItems,
            isItemsShown,
            onInputChange: this.onInputChange,
            itemOnClick: this.itemOnClick,
            toggleItemsVisibility: this.toggleItemsVisibility,
        })
    }

    public onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        let search = e.target.value
        this.setState({
            textValue: e.target.value,
            selectedItems: this.props.items
                .filter((item) => {
                    return (
                        item.slice(0, search.length) ===
                        (search.length !== 0 && search)
                    )
                })
                .slice(0, 5),
        })
    }
    public itemOnClick(e: React.MouseEvent<HTMLElement>) {
        this.setState({
            textValue: e.currentTarget.textContent!,
            selectedItems: [],
        })
    }
    toggleItemsVisibility() {
        this.setState({ isItemsShown: !this.state.isItemsShown })
    }
}
