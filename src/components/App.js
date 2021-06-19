import '../App.css';
import React from 'react'
import Button from 'react-bootstrap/Button'
import Users from '../store/usersSrore'
import { observer } from 'mobx-react-lite';
import Counter from './Counter';

const App = observer(() => {

  const { users, getUsers } = Users

  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Button
          onClick={getUsers}
        >get users</Button>
        {users.length > 0 && users.map((user, index)=>(
          <div key={index}>{`${user.id}. ${user.name}`}</div>
        ))}
      </header>
    </div>
  );
})

export default App;
