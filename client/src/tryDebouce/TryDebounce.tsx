import React, { useEffect, useState } from 'react'
import style from './input.module.scss'
export const DebouncedInput: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const useDebounce = (value: any, delay: number) => {
        const [debounceValue, setDebounceValue] = useState(value)
        useEffect(() => {
            let handler = setTimeout(() => {
                setDebounceValue(value)
            }, delay)
            return () => clearTimeout(handler)
        }, [value])

        return debounceValue
    }
    const debounce = useDebounce(value, 500)

    useEffect(() => {
        console.log(debounce)
    }, [debounce])
    return <input className={style.input} onChange={handleChange} value={value} type='text' />
}
