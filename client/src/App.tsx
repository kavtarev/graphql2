import "./App.css";
import { InputBehaviour } from "./Input/InputBehavior";
import { InputWithChoiceBehaviour } from "./InputWithChoice/InputWithChoiceBehavior";

import { NewInputWithTagsBehaviour } from "./NewInputWithTags/NewInputWithTagsBehaviour";

let items = [
  "ab",
  "aa",
  "asd",
  "asds",
  "asdfge",
  "aaaaa",
  "abdfg",
  "bfd",
  "bdsf",
  "hfgfdg",
  "dfg",
  "sdf",
  "sdfsdfsd",
];

// mutation can be named whatever???

function App() {
  return (
    <div className="App">
      <div className="forinput">
        <InputBehaviour
          title="Заголовок"
          error={false}
          isRequired={false}
          charactersLimit={50}
        />
        <InputBehaviour
          title="Подзаголовок"
          error={false}
          isRequired={true}
          charactersLimit={70}
        />
        <InputBehaviour title="Title SEO" error={false} isRequired={false} />
        <InputWithChoiceBehaviour items={items} title="автор" />
        <NewInputWithTagsBehaviour title={"добавить тэги"} items={items} />
      </div>
    </div>
  );
}

export default App;
