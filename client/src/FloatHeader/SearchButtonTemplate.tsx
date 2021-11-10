import React from 'react'
 interface Props {
     isArticle:boolean
 }
export const SearchButtonTemplate = ({isArticle}:Props) =>{
    return <span className="header-row-search">
    <svg viewBox="0 0 20 20" className="origin">
        <g
            fill="none"
            stroke={`${!isArticle ? '#fff' : '#000'}`}
        >
            <circle cx="8" cy="9" r="7.25"></circle>
            <path
                fill={`${!isArticle ? '#fff' : ''}`}
                d="M13 14l4 4"
            ></path>
        </g>
    </svg>{' '}
    <svg viewBox="0 0 20 20" className="doubled">
        <g
            fill="none"
            stroke={`${!isArticle ? '#fff' : '#000'}`}
        >
            <circle cx="8" cy="9" r="7.25"></circle>
            <path
                fill={`${!isArticle ? '#fff' : ''}`}
                d="M13 14l4 4"
            ></path>
        </g>
    </svg>
</span>
}