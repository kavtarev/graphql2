import React from "react";
import { InputWithChoiceBehaviour } from "../InputWithChoice/InputWithChoiceBehavior";
import style from "./withTags.module.scss";

interface Props {
  isAuthor: boolean;
  items: string[];
  title: string;
}

interface State {
  selectedTags: string[];
  textValue: string;
}

export class InputWithTagsBehaviour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textValue: "",
      selectedTags: [],
    };
    this.onEnterPressed = this.onEnterPressed.bind(this);
  }

  render() {
    let { title, items } = this.props;
    return (
      <div>
        <InputWithChoiceBehaviour title={title} items={items} />
        <div className={style.tagWrapper}>
          {this.state.selectedTags.map((item) => (
            <div className={style.main}>
              <div className={style.tag}>
                <div className={style.name}>{item}</div>
                <div className={style.iconWrapper}>
                  <div
                    onClick={() => this.onDeleteItem(item)}
                    className={style.icon}
                  >
                    x
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  public onEnterPressed(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      this.setState({
        selectedTags: [...this.state.selectedTags, e.currentTarget.value],
        textValue: "",
      });
    }
  }
  public onDeleteItem = (item: string) => {
    this.setState({
      selectedTags: this.state.selectedTags.filter((name) => name !== item),
    });
  };
}
