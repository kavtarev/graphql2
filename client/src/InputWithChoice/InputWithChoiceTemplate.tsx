import React from "react";
import style from "./inputWithChoice.module.scss";
interface Props {
  isItemsShown: boolean;
  items: string[];
  textValue: string;
  title: string;
  selectedItems: string[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemOnClick: (e: React.MouseEvent<HTMLElement>) => void;
  toggleItemsVisibility: () => void;
}

export function InputWithChoiceTemplate({
  title,
  selectedItems,
  isItemsShown,
  textValue,
  itemOnClick,
  onInputChange,
  toggleItemsVisibility,
}: Props) {
  let isSelectedItems = !!selectedItems.length;

  return (
    <div style={{ height: `36px` }} className={style.inputControl}>
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
                onBlur={toggleItemsVisibility}
                onFocus={toggleItemsVisibility}
                type="text"
                placeholder="выбрать автора"
              />
              <div className={style.hint}></div>
            </div>
          </div>
          <div
            className={`${style.suggestedWrapper} ${
              isItemsShown && isSelectedItems && style.active
            }`}
          >
            <div
              className={`${style.suggested} ${
                isItemsShown && isSelectedItems && style.active
              }`}
            >
              {selectedItems.map((item) => {
                return (
                  <div
                    key={item}
                    onMouseDown={itemOnClick}
                    className={style.suggestedItem}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
