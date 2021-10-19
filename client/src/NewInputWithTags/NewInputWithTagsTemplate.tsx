import React from "react";
import style from "./newinputWithChoice.module.scss";

interface Props {
  isItemsShown: boolean;
  items: string[];
  textValue: string;
  title: string;
  selectedItems: string[];
  tags: string[];
  inputRef: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemOnClick: (e: React.MouseEvent<HTMLElement>) => void;
  onEnterPressed?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  toggleItemsVisibility: () => void;
  onDeleteTag: (ites: string) => void;
}
export function NewInputWithChoiceTemplate({
  title,
  tags,
  selectedItems,
  isItemsShown,
  textValue,
  inputRef,
  itemOnClick,
  onInputChange,
  onEnterPressed,
  toggleItemsVisibility,
  onDeleteTag,
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
                ref={inputRef}
                id={title}
                value={textValue}
                onChange={onInputChange}
                onKeyDown={onEnterPressed}
                onBlur={toggleItemsVisibility}
                onFocus={toggleItemsVisibility}
                placeholder="добавить тэги"
                type="text"
              />
              {
                <div className={style.enterIcon}>
                  <div className={style.icon}></div>
                </div>
              }
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
      <div className={style.tagWrapper}>
        {tags.map((item) => (
          <div key={item} className={style.main}>
            <div className={style.tag}>
              <div className={style.name}>{item}</div>
              <div className={style.iconWrapper}>
                <div
                  onClick={() => onDeleteTag(item)}
                  className={style.tagIcon}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
