import React from 'react'
import style from './input.module.scss'

interface Props {
    textValue: string
    howManyLeft: number
    title?: string
    error: boolean

    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export function InputTemplate({ title, textValue, howManyLeft, error, onInputChange }: Props) {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>{title}</div>
            <div className={style.textarea}>
                <div className={style.textarea__admin}>
                    <textarea
                        value={textValue}
                        onChange={onInputChange}
                        placeholder='Обязательно для заполнения'
                        name=''
                        id=''
                    ></textarea>
                    <div className={style.textarea__admin__textdiv}>im here</div>
                    <div className={style.textarea__admin__counter__wrapper}>
                        <div
                            className={`${style.textarea__admin_counter} ${
                                howManyLeft < 0 && style.alert
                            }`}
                        >
                            {howManyLeft}
                        </div>
                    </div>
                    <div className={`${style.textarea__admin__error} ${error && style.error}`}>
                        Обязательно к заполнению
                    </div>
                </div>
            </div>
        </div>
    )
}
