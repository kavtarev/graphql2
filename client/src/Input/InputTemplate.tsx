import React from "react";
import { ClassTextAreaBehaviour } from "../ClassTextArea/ClassTextAreaBehaviour";
import "../inputs.scss";
const classNames = require("classnames");

interface Props {
  textValue: string;
  howManyLeft: number;
  title: string;
  error: boolean;
  areaHeight: number;
  isRequired: boolean;
  characterLimit: number;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export function InputTemplate({
  title,
  textValue,
  howManyLeft,
  areaHeight,
  error,
  isRequired,
  characterLimit,
  onInputChange,
}: Props) {
  const ROOT_CLASS = "inputControl";
  const SUB_ROOT_CLASS = "textareaWrapper";

  const limitClassNames = classNames("counter", { alert: howManyLeft < 0 });
  const noLimitClassNames = classNames("counter", {
    alert: howManyLeft < 25 && howManyLeft !== 0,
    nolimit: howManyLeft >= 25,
  });
  const hintClassName = classNames("hint", "error");

  return (
    <div style={{ height: `${areaHeight}px` }} className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__title`}>
        <label htmlFor={`${title}`}>{title}</label>
      </div>
      <div className={SUB_ROOT_CLASS}>
        <div className={`${SUB_ROOT_CLASS}__textarea`}>
          <ClassTextAreaBehaviour
            title={title}
            inputOnChange={onInputChange}
            textValue={textValue}
            isRequired={isRequired}
            characterLimit={characterLimit}
          />
          <div
            style={{ height: `${areaHeight}px` }}
            className={`${SUB_ROOT_CLASS}__textdiv`}
          >
            {textValue}
          </div>
          <div className={`${SUB_ROOT_CLASS}__counterWrapper`}>
            {!!characterLimit ? (
              <div className={`${limitClassNames}`}>{howManyLeft}</div>
            ) : (
              <div className={`${noLimitClassNames}`}>{howManyLeft}</div>
            )}
          </div>
          {isRequired && error && (
            <div className={`${hintClassName}`}>Обязательно к заполнению</div>
          )}
        </div>
      </div>
    </div>
  );
}
