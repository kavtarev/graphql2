import { useRef, useState, useEffect } from "react";
import "./Textarea.scss";

interface IPropsTextarea {
  className?: string;
  label?: string;
  defaultValue?: string | null;
  setSolution: any;
  id?: string;
}

export function Textarea({
  id,
  label,
  className,
  defaultValue,
  setSolution,
}: // setSolution,
IPropsTextarea) {
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
    <textarea
      className={`${ROOT_CLASS}__item`}
      ref={textAreaRef}
      style={{ height: textAreaHeight }}
      rows={1}
      id={id}
      defaultValue={defaultValue || ""}
      onChange={onChangeHandler}
      required
    ></textarea>
  );
}
