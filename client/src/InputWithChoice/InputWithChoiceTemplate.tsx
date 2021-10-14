import React from "react";

import style from "./inputWithChoice.module.scss";

interface Props {
  isAuthor: boolean;
  items: string[];
  textValue: string;
  title: string;
  selectedItems: string[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemOnClick: (e: React.MouseEvent<HTMLElement>) => void;
  onEnterPressed?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export function InputWithChoiceTemplate({
  title,
  isAuthor,
  selectedItems,
  textValue,
  itemOnClick,
  onInputChange,
  onEnterPressed,
}: Props) {
  let isOpened = !!selectedItems.length;

  console.log("template selected items ", selectedItems);
  console.log("isOpened ", isOpened);

  return (
    <div style={{ height: `${36}px` }} className={style.inputControl}>
      <div className={style.inputControl__title}>
        <label htmlFor={`${title}`}>{title}</label>
      </div>
      <div className={style.inputControl__textareaWrapper}>
        <div className={style.inputControl__textarea}>
          <div>
            <div className={style.inputWrapper}>
              <input
                id={title}
                value={textValue}
                onChange={onInputChange}
                onKeyPress={onEnterPressed ? onEnterPressed : () => {}}
                type="text"
              />
              {!isAuthor && (
                <div className={style.enterIcon}>
                  <div className={style.icon}>e</div>
                </div>
              )}
              <div className={style.hint}></div>
            </div>
          </div>
          <div
            className={`${style.suggestedWrapper} ${isOpened && style.active}`}
          >
            <div className={`${style.suggested} ${isOpened && style.active}`}>
              {selectedItems.map((item) => {
                return (
                  <div onClick={itemOnClick} className={style.suggestedItem}>
                    {item}
                  </div>
                );
              })}
              {/* <div className={style.suggestedItem}>
                <span>stalin</span>
              </div>
              <div className={style.suggestedItem}>
                <span>lenin</span>
              </div>
              <div className={style.suggestedItem}>
                <span>mao</span>
              </div>
              <div className={style.suggestedItem}>
                <span>yao</span>
              </div>
              <div className={style.suggestedItem}>
                <span>yao</span>
              </div>
              <div className={style.suggestedItem}>
                <span>gggg</span>
            </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
