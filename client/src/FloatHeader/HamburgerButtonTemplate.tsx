import React from 'react'

interface Props {
    isArticle:boolean
}

export const HamburgerButtonTemplate = ({isArticle}:Props) =>{
    return  <div className="hamburger">
    <svg viewBox="0 0 20 20" className="origin">
        <path
            fill={`${!isArticle ? '#fff' : ''}`}
            d="M0 3h20v1.5H0zm0 12.5h20V17H0z"
        ></path>
    </svg>{' '}
    <svg viewBox="0 0 20 20" className="doubled">
        <path
            fill={`${!isArticle ? '#fff' : ''}`}
            d="M0 3h20v1.5H0zm0 12.5h20V17H0z"
        ></path>
    </svg>
</div>
}