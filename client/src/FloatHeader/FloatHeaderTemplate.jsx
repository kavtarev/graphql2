import React from 'react';
import './Float.scss';

export const FloatHeaderTemplate = () => {
    return (
        <header className="app-header header-rubric-post isWindows">
            <div className="header-container">
                <div className="header-row">
                    <a href="#" className="header-row-search">
                        <svg viewBox="0 0 20 20" className="origin">
                            <g fill="none" stroke="#000">
                                <circle cx="8" cy="9" r="7.25"></circle>
                                <path d="M13 14l4 4"></path>
                            </g>
                        </svg>{' '}
                        <svg viewBox="0 0 20 20" className="doubled">
                            <g fill="none" stroke="#000">
                                <circle cx="8" cy="9" r="7.25"></circle>
                                <path d="M13 14l4 4"></path>
                            </g>
                        </svg>
                    </a>{' '}
                    <div className="header-logo-wrap">
                        <a href="/" className="header-logo nuxt-link-active">
                            <svg viewBox="0 0 151 30">
                                <path
                                    d="M.082.361h10.08V4.6H4.513v7.692h4.471v4.435h-4.47v12.834H.082zm31.141 0v24.686h5.412v4.514h-9.844V.36zM57.735 19.71h2.314L58.873 8.917 57.735 19.71zm2.785 4.356h-3.256l-.549 5.495h-3.961l3.57-29.2h5.255l3.804 29.2h-4.275l-.588-5.495zm28.2-7.221h4.353v6.75c0 3.14-1.059 6.319-5.295 6.319h-.98c-4.51 0-5.452-3.218-5.452-6.162V5.934c0-2.983 1.294-5.848 5.295-5.848h1.02c4.863 0 5.412 3.218 5.412 6.083v5.22H88.72V6.25c0-1.257-.393-1.924-1.491-1.924s-1.373.628-1.373 1.923v17.347c0 1.334.471 2.002 1.412 2.002 1.06 0 1.452-.746 1.452-1.963v-6.79zm28.748-10.283c0-1.491-.51-2.237-1.53-2.237-1.137 0-1.568.706-1.568 2.237v16.797c0 1.257.353 2.238 1.608 2.238 1.216 0 1.49-.981 1.49-2.238V6.562zm4.51 16.484c0 4.081-1.372 6.868-5.647 6.868h-.745c-4.236 0-5.727-2.787-5.727-6.868V6.798c0-4.082 1.49-6.712 5.687-6.712h.746c4.314 0 5.687 2.669 5.687 6.672v16.288zM142.697.361l3.805 15.66V.36h4.04v29.2h-3.609l-4.236-16.798V29.56h-4V.36z"
                                    fill="#231F20"
                                ></path>
                            </svg>
                        </a>
                    </div>{' '}
                    <div class="header-logo-wrap">
                        <a
                            href="/"
                            aria-current="page"
                            class="header-logo nuxt-link-exact-active nuxt-link-active"
                        >
                            <svg
                                viewBox="0 0 22 40"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 40V0h22v6.17H6.582v10.31h11.63v6.17H6.582V40z"
                                    fill="#000"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="hamburger">
                        <svg viewBox="0 0 20 20" className="origin">
                            <path d="M0 3h20v1.5H0zm0 12.5h20V17H0z"></path>
                        </svg>{' '}
                        <svg viewBox="0 0 20 20" className="doubled">
                            <path d="M0 3h20v1.5H0zm0 12.5h20V17H0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};
