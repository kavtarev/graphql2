import React from 'react'
import { NewInputWithChoiceTemplate } from './NewInputWithTagsTemplate'

interface Props {
    title: string
    items: string[]
}

interface State {
    textValue: string
    selectedItems: string[]
    tags: string[]
    isItemsShown: boolean
}

export class NewInputWithTagsBehaviour extends React.Component<Props, State> {
    inputRef = React.createRef<HTMLInputElement>()
    constructor(props: Props) {
        super(props)
        this.state = {
            tags: [],
            textValue: '',
            selectedItems: [],
            isItemsShown: false,
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.itemOnClick = this.itemOnClick.bind(this)
        this.toggleItemsVisibility = this.toggleItemsVisibility.bind(this)
        this.onEnterPressed = this.onEnterPressed.bind(this)
        this.onDeleteTag = this.onDeleteTag.bind(this)
    }

    render(): JSX.Element {
        const { textValue, selectedItems, isItemsShown, tags } = this.state
        let { title, items } = this.props

        return React.createElement(NewInputWithChoiceTemplate, {
            inputRef: this.inputRef,
            textValue,
            items,
            title,
            selectedItems,
            isItemsShown,
            tags,
            onEnterPressed: this.onEnterPressed,
            onInputChange: this.onInputChange,
            itemOnClick: this.itemOnClick,
            toggleItemsVisibility: this.toggleItemsVisibility,
            onDeleteTag: this.onDeleteTag,
        })
    }

    componentDidUpdate() {
        console.log('updated')
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
        // no, just this.inputRef.current!.focus() not working
        console.log('click was made ', this.state.isItemsShown)
        setTimeout(() => this.inputRef.current!.focus(), 0)
        // this.inputRef.current!.focus()
    }

    public toggleItemsVisibility() {
        this.setState({ isItemsShown: !this.state.isItemsShown })
        console.log('blur was effected ', this.state.isItemsShown)
    }

    public onEnterPressed(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' && e.currentTarget.value !== '') {
            this.setState({
                tags: [...this.state.tags, e.currentTarget.value],
                textValue: '',
            })
            this.inputRef.current?.blur()
        }
    }

    public onDeleteTag = (item: string) => {
        this.setState({
            tags: this.state.tags.filter((name) => name !== item),
        })
    }
}
