import React from "react";
import { InputTemplate } from "./InputTemplate";

interface Props {
  charactersLimit: number;
  title: string;
  isLimit: boolean;
}

interface State {
  textValue: string;
  textValuelength: number;
  reachedTheLimit: boolean;
  howManyLeft: number;
}

export class InputBehaviour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textValue: "",
      textValuelength: 0,
      reachedTheLimit: false,
      howManyLeft: this.props.charactersLimit,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render(): JSX.Element {
    const { textValue, textValuelength } = this.state;
    const { charactersLimit, isLimit, title } = this.props;
    return React.createElement(InputTemplate, {
      textValue,
      textValuelength,
      title,
      charactersLimit,
      isLimit,
      onInputChange: this.onInputChange,
    });
  }
  private onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (this.props.isLimit) {
    }
    this.setState({ textValue: e.target.value });
  }
}
