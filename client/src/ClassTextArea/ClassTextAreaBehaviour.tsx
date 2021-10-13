import React from "react";
import { ClassTextAreaContainer } from "./ClassTextAreaContainer";

interface Props {
  textValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
interface State {
  areaHeight: string;
  title: string;
  textValue: string;
}

export class ClassTextAreaBehaviour extends React.Component<Props, State> {
  inputRef = React.createRef<HTMLInputElement>();
  constructor(props: Props) {
    super(props);
    this.state = {
      areaHeight: "36px",
      title: "nazvanie",
      textValue: "",
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.textValue !== prevProps.textValue) {
      this.setState({ areaHeight: `${this.inputRef.current?.scrollHeight}px` });
    }
  }

  render(): JSX.Element {
    const { title, areaHeight, textValue } = this.state;
    return React.createElement(ClassTextAreaContainer, {
      title,
      areaHeight,
      textValue,
      inputRef: this.inputRef,
      onInputChange: this.onInputChange,
      setHeight: this.setHeight,
    });
  }
  onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ textValue: e.target.value, areaHeight: "auto" });
    this.props.inputOnChange(e);
  }
  setHeight(value: string) {
    this.setState({ areaHeight: value });
  }
}
