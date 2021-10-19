import React from "react";
import "../inputs.scss";
const classNames = require("classnames");

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
          <input
            id={title}
            value={textValue}
            onChange={onInputChange}
            onBlur={toggleItemsVisibility}
            onFocus={toggleItemsVisibility}
            type="text"
            placeholder="выбрать автора"
          />

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
    </div>
  );
}
