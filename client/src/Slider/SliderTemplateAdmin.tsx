import * as React from 'react'

interface Props {
    image: string
    sImage: string
    text: string
    textColor: string
    buttonText: string
    buttonTextColor: string
    buttonPosition: string
    isCreate: boolean
    toggleType(): void
}

export const SliderTemplateAdmin = (props: Props) => {
    const {
        isCreate,
        image,
        sImage,
        text,
        textColor,
        buttonText,
        buttonTextColor,
        buttonPosition,
        toggleType,
    } = props
    return (
        <div>
            <button onClick={toggleType} disabled={!isCreate}>
                create
            </button>
            <button onClick={toggleType} disabled={isCreate}>
                delete
            </button>
        </div>
    )
}
