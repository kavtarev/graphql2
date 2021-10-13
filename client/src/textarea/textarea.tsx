import { useRef, useState, useEffect } from "react";
import "./Textarea.scss";

interface IPropsTextarea {
  className?: string;
  label?: string;
  defaultValue?: string | null;
  setSolution: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({
  label,
  className,
  defaultValue,
  setSolution,
}: IPropsTextarea) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [defaultValue]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setSolution(event);
  };

  const ROOT_CLASS = "textarea";

  return (
    <div className={`${ROOT_CLASS} ${className}`}>
      <textarea
        className={`${ROOT_CLASS}__item`}
        ref={textAreaRef}
        style={{ height: textAreaHeight }}
        rows={1}
        id="textarea"
        defaultValue={defaultValue || ""}
        onChange={onChangeHandler}
        required
      ></textarea>
      <label className={`${ROOT_CLASS}__label`} htmlFor="textarea">
        {label}
      </label>
    </div>
  );
}
