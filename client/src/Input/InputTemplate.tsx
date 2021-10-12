import React from "react";
import style from "./input.module.scss";

interface Props {
  textValue: string;
  textValuelength: number;
  charactersLimit?: number;
  title?: string;
  isLimit?: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export function InputTemplate({
  title,
  isLimit,
  textValue,
  charactersLimit,
  onInputChange,
}: Props) {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.textarea}>
        <div className={style.textarea__admin}>
          <textarea
            value={textValue}
            onChange={onInputChange}
            placeholder="Обязательно для заполнения"
            name=""
            id=""
          ></textarea>
          <div className={style.textarea__admin__textdiv}>im here</div>
          <div className={style.textarea__admin__counter__wrapper}>
            <div className={style.textarea__admin_counter}>
              {charactersLimit}
            </div>
          </div>
          <div className={style.textarea__admin__error}>
            Обязательно к заполнению
          </div>
        </div>
      </div>
    </div>
  );
}
