import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import "./App.css";
import { InputBehaviour } from "./Input/InputBehavior";
import { Textarea } from "./textarea/Textarea";
import { InputWithChoiceBehaviour } from "./InputWithChoice/InputWithChoiceBehavior";
import { InputWithTagsBehaviour } from "./InputWithtags/InputWithTagsBehaviour";
import { DebouncedInput } from "./tryDebouce/TryDebounce";
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
interface User {
  username: string;
  age: number;
  id: number;
}

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`;
// mutation can be named whatever???

const CREATE_USER = gql`
  mutation createUserHuinaMilo($input: UserInput) {
    createUser(input: $input) {
      id
      username
      age
    }
  }
`;
const GET_USER = gql`
  query getUser2333($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

//let users: User[] = [{ username: 'dg', age: 23, id: 1 }]

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const {
    data: newsUser,
    loading: lodf,
    error: df,
  } = useQuery(GET_USER, { variables: { id: 1 } });
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState<any[]>([]);
  const [username, setusername] = useState<string>("");
  const [age, setage] = useState<number>();
  const [trash, setTrash] = useState("trash");
  const [state, setstate] = useState<string | null>();
  console.log(data);
  console.log("newOne: ", newsUser);
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  if (loading) {
    return <h1>'LOADING...'</h1>;
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(34);
  };

  /*   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.name === 'username' ? setusername(e.target.value) : setage(e.target.value)
    } */
  const addUser = () => {
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            name="username"
            value={username}
          />
          <input
            onChange={(e) => {
              setage(Number(e.target.value));
            }}
            type="number"
            name="age"
            value={age}
          />
          <button name="send">send user</button>
          <button
            name="create"
            onClick={() => {
              addUser();
            }}
          >
            create user
          </button>
        </form>
        <input
          type="text"
          value={trash}
          onChange={(e) => {
            setTrash(e.target.value);
          }}
        />
        <div className="users">
          {users.map((item) => (
            <li>
              {item.username}, {item.age}, {item.id}
            </li>
          ))}
        </div>
      </div>
      <div className="forinput">
        <InputBehaviour
          title="Заголовок"
          error={true}
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
      </div>

      <div className="inputWithChoiceWrapper">
        <InputWithChoiceBehaviour
          textValue=""
          isAuthor={true}
          items={items}
          title="выбрать автора"
        />
        <InputWithTagsBehaviour title="se" items={items} isAuthor={false} />
      </div>
      <DebouncedInput />
    </div>
  );
  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            name="username"
            value={username}
          />
          <input
            onChange={(e) => {
              setage(Number(e.target.value));
            }}
            type="number"
            name="age"
            value={age}
          />
          <button name="send">send user</button>
          <button
            name="create"
            onClick={() => {
              addUser();
            }}
          >
            create user
          </button>
        </form>
        <input
          type="text"
          value={trash}
          onChange={(e) => {
            setTrash(e.target.value);
          }}
        />
        <div className="users">
          {users.map((item) => (
            <li>
              {item.username}, {item.age}, {item.id}
            </li>
          ))}
        </div>
      </div>
      <div className="forinput">
        <InputBehaviour
          title="Заголовок"
          error={true}
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
        <InputWithChoiceBehaviour
          textValue=""
          isAuthor={true}
          items={items}
          title="Выбрать автора"
        />
        <InputWithTagsBehaviour
          title="Выбрать тэги"
          items={items}
          isAuthor={false}
        />
      </div>
    </div>
  );
}

export default App;
