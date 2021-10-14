import React from "react";
import { InputWithChoiceBehaviour } from "../InputWithChoice/InputWithChoiceBehavior";

interface Props {
  isAuthor: boolean;
  items: string[];
  title: string;
}

interface State {
  selectedTags: string[];
}

export class InputWithTagsBehaviour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedTags: [],
    };
    this.onEnterPressed = this.onEnterPressed.bind(this);
  }

  render() {
    let { title, items, isAuthor } = this.props;
    return (
      <div>
        <InputWithChoiceBehaviour
          title={title}
          items={items}
          isAuthor={isAuthor}
          onEnterPressed={this.onEnterPressed}
        />
        <div>with tags</div>
      </div>
    );
  }
  public onEnterPressed(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log(e.target);
    }
  }
}
