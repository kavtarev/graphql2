import React from "react";
import "./TextArea.scss";

interface Props {
  inputRef: any;
  areaHeight: string;
  title: string;
  textValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setHeight: (value: string) => void;
}

export function ClassTextAreaContainer({
  inputRef,
  areaHeight,
  title,
  textValue,
  onInputChange,
}: Props) {
  const ROOT_CLASS = "textarea";
  return (
    <textarea
      className={`${ROOT_CLASS}__item`}
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
