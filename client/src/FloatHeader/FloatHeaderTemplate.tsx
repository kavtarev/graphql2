import React from 'react';
import './Float.scss';
import { HamburgerButtonTemplate } from './HamburgerButtonTemplate';
import { LogoTemplate } from './LogoTemplate';
import { SearchButtonTemplate } from './SearchButtonTemplate';

interface Props {
    isScrolled: boolean;
    isArticle: boolean;
}
export const FloatHeaderTemplate = ({ isScrolled, isArticle }: Props) => {
    return (
        <header
            className={`app-header ${
                isArticle && 'header-index'
            } header-rubric-post isWindows `}
        >
            <div className={`header-container `}>
                <div className="header-row">
                    <SearchButtonTemplate isArticle={isArticle}/>
                    <LogoTemplate isScrolled={isScrolled} isArticle={isArticle}/>
                    <HamburgerButtonTemplate isArticle={isArticle}/>
                </div>
            </div>
        </header>
    );
};
