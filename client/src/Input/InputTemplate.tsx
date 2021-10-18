import React from "react";
import { ClassTextAreaBehaviour } from "../ClassTextArea/ClassTextAreaBehaviour";
import style from "./input.module.scss";

interface Props {
  textValue: string;
  howManyLeft: number;
  title: string;
  error: boolean;
  areaHeight: number;
  isRequired: boolean;
  charactersLimit: number;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export function InputTemplate({
  title,
  textValue,
  howManyLeft,
  areaHeight,
  error,
  isRequired,
  charactersLimit,
  onInputChange,
}: Props) {
  return (
    <div style={{ height: `${areaHeight}px` }} className={style.inputControl}>
      <div className={style.inputControl__title}>
        <label htmlFor={`${title}`}>{title}</label>
      </div>
      <div className={style.inputControl__textareaWrapper}>
        <div className={style.inputControl__textarea}>
          <ClassTextAreaBehaviour
            title={title}
            inputOnChange={onInputChange}
            textValue={textValue}
            isRequired={isRequired}
            charactersLimit={charactersLimit}
          />
          <div
            style={{ height: `${areaHeight}px` }}
            className={style.inputControl__textdiv}
          >
            {textValue}
          </div>
          <div className={style.inputControl__counterWrapper}>
            {!!charactersLimit ? (
              <div
                className={`${style.inputControl__counter} 
              ${howManyLeft < 0 && style.alert}`}
              >
                {howManyLeft}
              </div>
            ) : (
              <div
                className={`${style.inputControl__counter} 
              ${howManyLeft < 25 && howManyLeft !== 0 && style.alert}
              ${howManyLeft >= 25 && style.nolimit}
              `}
              >
                {howManyLeft}
              </div>
            )}
          </div>
          {isRequired && (
            <div
              className={`${style.inputControl__error} ${error && style.error}`}
            >
              Обязательно к заполнению
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
