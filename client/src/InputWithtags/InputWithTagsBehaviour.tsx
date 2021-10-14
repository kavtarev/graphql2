import React from 'react'
import { InputWithChoiceBehaviour } from '../InputWithChoice/InputWithChoiceBehavior'
import style from './withTags.module.scss'

interface Props {
    isAuthor: boolean
    items: string[]
    title: string
}

interface State {
    selectedTags: string[]
}

export class InputWithTagsBehaviour extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            selectedTags: [],
        }
        this.onEnterPressed = this.onEnterPressed.bind(this)
    }

    render() {
        let { title, items, isAuthor } = this.props
        return (
            <div>
                <InputWithChoiceBehaviour
                    title={title}
                    items={items}
                    isAuthor={isAuthor}
                    onEnterPressed={this.onEnterPressed}
                />
                <div className={style.tagWrapper}>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.name}>name</div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}>x</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    public onEnterPressed(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            console.log(e.target)
        }
    }
}
