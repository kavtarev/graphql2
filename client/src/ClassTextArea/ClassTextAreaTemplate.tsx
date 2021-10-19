import React from "react";
import "./TextArea.scss";

interface Props {
  inputRef: any;
  areaHeight: string;
  title: string;
  textValue: string;
  isRequired: boolean;
  charactersLimit: number;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function ClassTextAreaTemplate({
  inputRef,
  areaHeight,
  title,
  textValue,
  onInputChange,
  isRequired,
  charactersLimit,
}: Props) {
  // const ROOT_CLASS = "textarea";
  return (
    <textarea
      placeholder={
        isRequired
          ? "Обязательно для заполнения"
          : charactersLimit
          ? "Не обязательно для заполнения"
          : "Введите ключевые слова"
      }
      ref={inputRef}
      style={{ height: areaHeight }}
      rows={1}
      id={title}
      defaultValue={textValue || ""}
      onChange={onInputChange}
      required
    ></textarea>
  );
}
