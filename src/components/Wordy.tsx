import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { KeyValue } from '../models/key-value.model';
import { WordList } from '../models/word-list.model';
import Dropdown from './Dropdown';
import Layout from './Layout';

function Wordy() {
    let navigate = useNavigate();
    let { userId } = useParams();

    //#region Component validation
    useEffect(() => {
        if (!userId) navigate(`/`);
    }, [userId, navigate])

    if (!userId) return null;
    //#endregion

    let wordList: WordList[] = [];

    let getDropdownDatas = () => {
        let datas: KeyValue[] = [];
        wordList.forEach(list => datas.push({ key: list.userId, value: list.listName }));
        return datas;
    }

    let addWordList = () => {
        console.log(`add word list`);
    }

    return (
        <Layout title={`Wordy is the best app in the world !`} layoutClasses="wordy-app">
            <Dropdown
                title={`Select a List !`}
                defaultOption={`Word Lists`}
                datas={getDropdownDatas()}
                showCrudIcons={true}
                disableEDButtons={!wordList || wordList.length < 1}
                onAddClicked={() => addWordList()}
                onEditClicked={() => console.log(`Wordy onEditClicked`)}
                onDeleteClicked={() => console.log(`Wordy onDeleteClicked`)}
                onSelectionChange={(userId: string) => console.log(`get words with userId: `, userId)}
            />
        </Layout>
    )
}

export default Wordy;
