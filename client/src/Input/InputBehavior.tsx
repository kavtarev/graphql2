import React from "react";
import { InputTemplate } from "./InputTemplate";

interface Props {
  charactersLimit?: number;
  title: string;
  error?: boolean;
  isRequired: boolean;
}

interface State {
  textValue: string;
  howManyLeft: number;
  charactersLimit: number;
  areaHeight: number;
}

export class InputBehaviour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textValue: "",
      howManyLeft: this.props.charactersLimit || 0,
      charactersLimit: this.props.charactersLimit || 0,
      areaHeight: 36,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render(): JSX.Element {
    const { textValue, howManyLeft, areaHeight, charactersLimit } = this.state;
    let { title, error, isRequired } = this.props;
    error = error ? error : false;
    return React.createElement(InputTemplate, {
      textValue,
      title,
      howManyLeft,
      error,
      areaHeight,
      isRequired,
      charactersLimit,
      onInputChange: this.onInputChange,
      setText: this.setText,
    });
  }
  public onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      textValue: e.target.value,
      howManyLeft: this.props.charactersLimit
        ? this.state.charactersLimit - e.target.value.length
        : this.state.charactersLimit + e.target.value.length,

      areaHeight: e.target.scrollHeight,
    });
  }
  public setText() {}
}
