import React, { ChangeEvent } from 'react';
import { User } from '../models/user';
import Wordy from './Wordy';

function UserSelection(props: any) {
    let users: User[] = props.users;
    let onUserSelected = (e: any) => {
        e.preventDefault();
        if (e.target.value) {
            let userId: string = e.target.value;
            console.log(userId);
            // TODO: route to wordy comp with userId
        }
    }
    return (
        <div>
            <h1>Select a User !</h1>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => onUserSelected(e)}>
                <option value="">Users</option>
                {users.map(user => <option key={user.userId} value={user.userId}>{user.userName}</option>)}
            </select>
        </div>
    )
}

export default UserSelection;
