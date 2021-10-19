import React from "react";
import style from "./newinputWithChoice.module.scss";

import "../inputs.scss";
const classNames = require("classnames");
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
  const ROOT_CLASS = "inputControl";
  const SUB_ROOT_CLASS = "inputWrapper";
  const wrapperClassNames = classNames(`${SUB_ROOT_CLASS}__suggestedWrapper`, {
    active: isItemsShown && isSelectedItems,
  });
  const suggestedClassNames = classNames(
    `${SUB_ROOT_CLASS}__suggestedWrapper`,
    "suggested",
    {
      active: isItemsShown && isSelectedItems,
    }
  );

  return (
    <div style={{ height: `36px` }} className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__title`}>
        <label htmlFor={`${title}`}>{title}</label>
      </div>
      <div className={SUB_ROOT_CLASS}>
        <div className={`${SUB_ROOT_CLASS}__textarea`}>
          <div className={`${SUB_ROOT_CLASS}__textarea inputWrapper`}>
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
            <div className="enterIcon">
              <div className="icon"></div>
            </div>
          </div>

          {isItemsShown && isSelectedItems && (
            <div className={wrapperClassNames}>
              <div className={suggestedClassNames}>
                {selectedItems.map((item) => {
                  return (
                    <div
                      key={item}
                      onMouseDown={itemOnClick}
                      className="suggestedItem"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`${ROOT_CLASS}__tagWrapper`}>
        {tags.map((item) => (
          <div key={item} className="main">
            <div className="tag">
              <div className="name">{item}</div>
              <div className="iconWrapper">
                <div
                  onClick={() => onDeleteTag(item)}
                  className="tagIcon"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
