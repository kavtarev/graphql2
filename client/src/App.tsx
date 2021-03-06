import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './App.css';
import { InputBehaviour } from './Input/InputBehavior';
import { InputWithChoiceBehaviour } from './InputWithChoice/InputWithChoiceBehavior';
import { DebouncedInput } from './tryDebouce/TryDebounce';
import { NewInputWithTagsBehaviour } from './NewInputWithTags/NewInputWithTagsBehaviour';
import { PulseButtonTemplate } from './PulseButton/PulseButtonTemplate';
import { TotopButtonTemplate } from './TotopButton/TotopButtonTemplate';
import { FloatHeaderTemplate } from './FloatHeader/FloatHeaderTemplate';
import { UnmountBehaviour2 } from './tryUnmount/UnmountBehaviour';
import { Parent } from './Cheat/Cheat';

let items = [
  'ab',
  'df',
  'aa',
  'asd',
  'asds',
  'asdfge',
  'aaaaa',
  'abdfg',
  'bfd',
  'bdsf',
  'hfgfdg',
  'dfg',
  'sdf',
  'sdfsdfsd',
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

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const {
    data: newsUser,
    loading: lodf,
    error: df,
  } = useQuery(GET_USER, { variables: { id: 1 } });
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState<any[]>([]);
  const [username, setusername] = useState<string>('');
  const [age, setage] = useState<number>();
  const [trash, setTrash] = useState('trash');
  const [state, setstate] = useState<string | null>();
  const [show,setShow]=useState(true)
  console.log(data);
  console.log('newOne: ', newsUser);
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
    <div>
       <div className="post__title-interest">
        <span className="bold-string ticker">
          <span>?????? ?????????? ??????????????????</span>
          <span>?????? ?????????? ??????????????????</span>
          <span>?????? ?????????? ??????????????????</span>
          <span>?????? ?????????? ??????????????????</span>
          <span>?????? ?????????? ??????????????????</span>
        </span>
      </div>
    <div className="App">
     
      <FloatHeaderTemplate />
      {/* <div>
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
      </div> */}
      {/*   <div className="forinput">
        <InputBehaviour
          title="??????????????????"
          error={true}
          isRequired={false}
          charactersLimit={50}
        />
        <InputBehaviour
          title="????????????????????????"
          error={false}
          isRequired={true}
          charactersLimit={70}
        />
        <InputBehaviour title="Title SEO" error={false} isRequired={false} />
        <InputWithChoiceBehaviour items={items} title="??????????" />
        <NewInputWithTagsBehaviour title={"???????????????? ????????"} items={items} />
        <DebouncedInput />
        
      </div> */}
      <Parent/>
      <PulseButtonTemplate />
      <TotopButtonTemplate />
      <button onClick={()=>{setShow(!show)}}>toggle button</button>
      <UnmountBehaviour2/>
    </div>
    </div>
  );
}

export default App;
