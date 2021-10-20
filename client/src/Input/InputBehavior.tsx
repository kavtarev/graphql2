import React from "react";
import { InputTemplate } from "./InputTemplate";

interface Props {
  characterLimit?: number;
  title: string;
  error?: boolean;
  isRequired: boolean;
}

interface State {
  textValue: string;
  howManyLeft: number;
  characterLimit: number;
  areaHeight: number;
}

export class InputBehaviour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textValue: "",
      howManyLeft: this.props.characterLimit || 0,
      characterLimit: this.props.characterLimit || 0,
      areaHeight: 36,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render(): JSX.Element {
    const { textValue, howManyLeft, areaHeight, characterLimit } = this.state;
    let { title, error, isRequired } = this.props;
    error = error ? error : false;
    return React.createElement(InputTemplate, {
      textValue,
      title,
      howManyLeft,
      error,
      areaHeight,
      isRequired,
      characterLimit,
      onInputChange: this.onInputChange,
    });
  }
  public onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      textValue: e.target.value,
      howManyLeft: this.props.characterLimit
        ? this.state.characterLimit - e.target.value.length
        : this.state.characterLimit + e.target.value.length,

      areaHeight: e.target.scrollHeight,
    });
  }
}
