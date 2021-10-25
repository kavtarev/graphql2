import React from 'react'
import './pulse.scss'

export const PulseButtonTemplate = () => {
    return (
        <div id='fix-button-sticker' className='fix-button fix-button--no-image'>
            <div className='fix-button__panel'>
                <a
                    href='https://flacon-magazine.com/rubric/people/kakaa-vy-necist-goroskop-oktabr'
                    target='_blank'
                    className='fix-button__img'
                >
                    hi
                    {/*   <img src="/img/svg/lightning.svg" alt="" title=""> */}
                </a>{' '}
                <a
                    href='https://flacon-magazine.com/rubric/people/kakaa-vy-necist-goroskop-oktabr'
                    target='_blank'
                    className='fix-button__text'
                >
                    Какая вы нечисть?
                </a>
            </div>
        </div>
    )
}
