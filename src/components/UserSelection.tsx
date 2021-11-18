import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyValue } from '../models/key.value';
import { User } from '../models/user';
import Dropdown from './Dropdown';

function UserSelection(props: any) {
    let navigate = useNavigate();
    let users: User[] = props.users;

    return (
        <React.Fragment>
            <Dropdown
                title={`Select a User !`}
                defaultOption={`Users`}
                datas={(() => {
                    let datas: KeyValue[] = [];
                    users.forEach(user => datas.push({ key: user.userId, value: user.userName }));
                    return datas;
                })()}
                onSelectionChange={(userId: string) => navigate(`/wordy/${userId}`)}
            />
        </React.Fragment>
    )
}

export default UserSelection;
