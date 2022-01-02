import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalTypes } from '../enums/modal-types.enum';
import { KeyValue } from '../models/key-value.model';
import { List } from '../models/list.model';
import { ModalOutput } from '../models/modal-output.model';
import { User } from '../models/user.model';
import Dropdown, { VALUE_DEFAULT_OPTION } from './Dropdown';
import Layout from './Layout';
import WordyModal from './WordyModal';

function Wordy() {
    const PREFIX_LIST = "lists";

    let windowObj: any = window;
    let users: User[] = windowObj.users;
    let { userId } = useParams();
    let navigate = useNavigate();

    let isPageInitialsValid = () => userId && users && users.length > 0 && users.findIndex(u => u.userId === userId) > -1 && windowObj.BASE_URI;

    useEffect(() => {
        if (!isPageInitialsValid()) {
            navigate(`/`);
        }
    }, [userId, users, windowObj.BASE_URI, navigate])

    let usersDefaultState: List[] = [];
    let [showModal, setShowModal] = useState(false);
    let [lists, setLists] = useState(usersDefaultState);
    let [disableEDButtons, setDisableEDButtons] = useState(true);

    let getListsByUserId = async () => {
        await axios.get(`${windowObj.BASE_URI}/${PREFIX_LIST}${userId}.json`)
            .then(response => {
                if (response && response.data) {
                    let wordList: List[] = [];
                    let listsObj = response.data;
                    for (let listsObjId in listsObj) {
                        wordList.push({
                            listId: listsObjId,
                            listName: listsObj[listsObjId].listName
                        });
                    }
                    setLists(wordList);
                }
            }).catch(() => null);
    }

    useEffect(() => {
        if (isPageInitialsValid()) {
            getListsByUserId();
        }
    }, [userId, windowObj.BASE_URI])

    if (!isPageInitialsValid()) {
        return null;
    }

    let getDropdownDatas = () => {
        let datas: KeyValue[] = [];
        lists.forEach(list => datas.push({ key: list.listId, value: list.listName }));
        return datas;
    }

    let onDropdownSelectionChange = (listId: string) => {
        setDisableEDButtons(!lists || lists.length < 1 || listId === VALUE_DEFAULT_OPTION);
        getWordsByListId(listId);
    }

    let getWordsByListId = (listId: string) => {

    }

    let onModalCreate = async (output: ModalOutput) => {
        if (output.type === ModalTypes.User) {

        }
        else if (output.type === ModalTypes.Word) {

        }
        else if (output.type === ModalTypes.List) {
            await axios.post(`${windowObj.BASE_URI}/${PREFIX_LIST}${userId}.json`, output.data)
                .then(response => getListsByUserId())
                .catch(error => null)
        }
    }

    return (
        <Layout title={`Wordy is the best app in the world !`} layoutClasses="wordy-app">
            <Dropdown
                title={`Select a List !`}
                defaultOption={`Word Lists`}
                datas={getDropdownDatas()}
                showCrudIcons={true}
                disableEDButtons={disableEDButtons}
                onAddClicked={() => setShowModal(true)}
                onEditClicked={() => console.log(`Wordy onEditClicked`)}
                onDeleteClicked={() => console.log(`Wordy onDeleteClicked`)}
                onSelectionChange={onDropdownSelectionChange}
            />
            <WordyModal show={showModal} type={ModalTypes.List} onClose={() => setShowModal(false)} onCreate={onModalCreate} />
        </Layout>
    )
}

export default Wordy;
