import * as React from 'react';
import './search.scss';

/* interface Props {
    searchValue: string;
    isShowSpinner: boolean;
    isFixed: boolean;
    onToggleSearchBar(): void;
    onChangeInput(event: React.ChangeEvent<HTMLInputElement>): void;
    onSubmit(): void;
} */

export function SearchBarTemplate(/* {
    searchValue,
    isShowSpinner,
    onChangeInput,
    onToggleSearchBar,
    onSubmit,
    isFixed,
}: Props */): JSX.Element {
    const ROOT_CLASS = '';
    const first = true;
    return (
        <div className="popup Search">
            <div className="popup-container">
                <div className="search-popup">
                    {first ? (
                        <div className="search-popup-container">
                            <div className="search-popup-body scrollable-el">
                                <form action="" className="search-area">
                                    <textarea
                                        name="search-text"
                                        placeholder="Поиск"
                                        className=""
                                        aria-required="true"
                                        aria-invalid="false"
                                    ></textarea>{' '}
                                    <button className="search-area-btn cursor-pointer">
                                        <svg viewBox="0 0 20 20">
                                            <g fill="none">
                                                <path
                                                    stroke="#000"
                                                    stroke-width="1.5"
                                                    d="M.5 10h17"
                                                ></path>
                                                <g fill="#000">
                                                    <path d="M10.585 1.515L19.071 10l-1.06 1.06-8.486-8.484z"></path>
                                                    <path d="M18.01 8.94L19.072 10l-8.485 8.485-1.06-1.06z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </form>{' '}
                                <div className="search-empty">
                                    <div className="emoji">
                                        <span>😔</span>
                                    </div>{' '}
                                    <span>поиск не дал результата</span>
                                </div>
                                <div className="search-popular">
                                    <div className="search-popular-title">
                                        <span>популярные запросы</span>
                                    </div>{' '}
                                    <ul>
                                        <li>
                                            <a href="#">макияж</a>
                                        </li>
                                        <li>
                                            <a href="#">face</a>
                                        </li>
                                        <li>
                                            <a href="#">косметичка</a>
                                        </li>
                                        <li>
                                            <a href="#">лисовец</a>
                                        </li>
                                        <li>
                                            <a href="#">божена</a>
                                        </li>
                                        <li>
                                            <a href="#">парфюмерия</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="result set-gradient">
                            <div className="result-container">
                                <form action="" className="search-area">
                                    <textarea
                                        name="search-text-copy"
                                        placeholder="Поиск"
                                        aria-required="true"
                                        aria-invalid="false"
                                    ></textarea>{' '}
                                    <button className="search-area-btn cursor-pointer">
                                        <svg viewBox="0 0 20 20">
                                            <path
                                                d="M2 18L18 2m0 16L2 2"
                                                fill="none"
                                                stroke="#000"
                                                stroke-width="2"
                                            ></path>
                                        </svg>
                                    </button>
                                </form>
                                <div className="result-count-table">
                                    <div className="result-item">
                                        <span className="default-string">
                                            15
                                        </span>{' '}
                                        <span className="default-string">
                                            cтатьи
                                        </span>
                                    </div>{' '}
                                    <div className="result-item">
                                        <span className="default-string">
                                            0
                                        </span>{' '}
                                        <span className="default-string">
                                            авторы
                                        </span>
                                    </div>{' '}
                                    <div className="result-item">
                                        <span className="default-string">
                                            0
                                        </span>{' '}
                                        <span className="default-string">
                                            истории
                                        </span>
                                    </div>
                                </div>
                                <div className="result-section">
                                    <div className="posts-grid"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
