import React from "react";
import { InputWithChoiceTemplate } from "./InputWithChoiceTemplate";

interface Props {
  textValue: string;
  title: string;
  items: string[];
  isAuthor: boolean;
  onEnterPressed?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface State {
  textValue: string;
  selectedItems: string[];
  isItemsShown: boolean;
}

export class InputWithChoiceBehaviour extends React.Component<Props, State> {
  inputRef = React.createRef<HTMLInputElement>();
  constructor(props: Props) {
    super(props);
    this.state = {
      textValue: this.props.textValue,
      selectedItems: [],
      isItemsShown: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.itemOnClick = this.itemOnClick.bind(this);
    this.toggleItemsVisibility = this.toggleItemsVisibility.bind(this);
  }
  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log("update", prevProps, this.state);
    if (prevProps.textValue !== this.state.textValue) {
    }
  }
  render(): JSX.Element {
    const { textValue, selectedItems, isItemsShown } = this.state;
    let { title, items, isAuthor, onEnterPressed } = this.props;

    return React.createElement(InputWithChoiceTemplate, {
      inputRef: this.inputRef,
      textValue,
      items,
      title,
      selectedItems,
      isAuthor,
      isItemsShown,
      onEnterPressed,

      onInputChange: this.onInputChange,
      itemOnClick: this.itemOnClick,
      toggleItemsVisibility: this.toggleItemsVisibility,
    });
  }

  public onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let search = e.target.value;
    let len = search.length;
    this.setState({
      textValue: e.target.value,
      selectedItems: this.props.items
        .filter((item) => {
          return item.slice(0, len) === (search.length !== 0 && search);
        })
        .slice(0, 5),
    });
    console.log("text value ", this.state.textValue);
    console.log("selected ", this.state.selectedItems);
  }
  public itemOnClick(e: React.MouseEvent<HTMLElement>) {
    this.setState({
      textValue: e.currentTarget.textContent!,
      selectedItems: [],
    });
    console.log("text value ", this.state.textValue);
  }
  toggleItemsVisibility() {
    this.setState({ isItemsShown: !this.state.isItemsShown });
    console.log("is shown ", this.state.isItemsShown);
  }
}
