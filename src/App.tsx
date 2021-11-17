import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import UserSelection from './components/UserSelection';
import { User } from './models/user';

function App() {
  const windowObj: any = window;
  const usersDefaultState: User[] = [];
  let [users, setUsers] = useState(usersDefaultState);

  useEffect(() => {
    if (windowObj.BASE_URI) {
      let getUsers = () => {
        axios.get(`${windowObj.BASE_URI}/users.json`)
          .then(response => {
            if (response && response.data) {
              let userList: User[] = [];
              let usersObj = response.data;
              for (let usersObjId in usersObj) {
                let user = new User();
                user.userId = usersObjId;
                user.userName = usersObj[usersObjId].userName;
                userList.push(user);
              }
              setUsers(userList);
            }
          })
          .catch(error => console.log(error));
      }
      getUsers();
    }
  }, [])

  return (
    <div className="container p-5 d-flex justify-content-center align-items-center">
      {users && users.length > 0 ? <UserSelection users={users} /> : <Spinner />}
    </div>
  );
}

export default App;
