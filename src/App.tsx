import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Layout from './components/Layout';
import Spinner from './components/Spinner';
import { KeyValue } from './models/key-value.model';
import { User } from './models/user.model';

function App() {
  let windowObj: any = window;
  let usersDefaultState: User[] = [];
  let navigate = useNavigate();
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
      {users && users.length > 0
        ? <Dropdown
          title={`Select a User !`}
          defaultOption={`Users`}
          datas={(() => {
            let datas: KeyValue[] = [];
            users.forEach(user => datas.push({ key: user.userId, value: user.userName }));
            return datas;
          })()}
          onSelectionChange={(userId: string) => navigate(`/wordy/${userId}`)}
        />
        : <Spinner />
      }
    </Layout>
  );
}

export default App;
