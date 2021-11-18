import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
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
                userList.push({
                  userId: usersObjId,
                  userName: usersObj[usersObjId].userName
                });
              }
              setUsers(userList);
            }
          }).catch(() => null);
      }
      getUsers();
    }
  }, [])

  return (
    <Layout title="Welcome to Wordy !">
      {users && users.length > 0 ? <UserSelection users={users} /> : <Spinner />}
    </Layout>
  );
}

export default App;
