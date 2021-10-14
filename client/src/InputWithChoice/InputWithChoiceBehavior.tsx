import React from "react";
import { InputWithChoiceTemplate } from "./InputWithChoiceTemplate";

interface Props {
  title: string;
  items: string[];
  isAuthor: boolean;
  onEnterPressed?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface State {
  textValue: string;
  selectedItems: string[];
}

export class InputWithChoiceBehaviour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textValue: "",
      selectedItems: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.itemOnClick = this.itemOnClick.bind(this);
  }

  render(): JSX.Element {
    const { textValue, selectedItems } = this.state;
    let { title, items, isAuthor, onEnterPressed } = this.props;

    return React.createElement(InputWithChoiceTemplate, {
      textValue,
      items,
      title,
      selectedItems,
      isAuthor,
      onEnterPressed,
      onInputChange: this.onInputChange,
      itemOnClick: this.itemOnClick,
    });
  }
  public onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let search = e.target.value;
    let len = search.length;
    this.setState({
      textValue: e.target.value,
      selectedItems: this.props.items.filter((item) => {
        return item.slice(0, len) === (search.length !== 0 && search);
      }),
    });
    console.log("selected ", this.state.selectedItems);
  }
  public itemOnClick(e: React.MouseEvent<HTMLElement>) {
    this.setState({
      textValue: e.currentTarget.textContent!,
      selectedItems: [],
    });
  }
}
