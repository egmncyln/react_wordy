import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { KeyValue } from '../models/key-value.model';
import { WordList } from '../models/word-list.model';
import Dropdown from './Dropdown';
import Layout from './Layout';

function Wordy() {
    let navigate = useNavigate();
    let { userId } = useParams();

    if (!userId) navigate(`/`);
    let wordList: WordList[] = [];

    return (
        <Layout title={`Wordy is the best app in the world !`} layoutClasses="wordy-app">
            <Dropdown
                title={`Select a List !`}
                defaultOption={`Word Lists`}
                datas={(() => {
                    let datas: KeyValue[] = [];
                    wordList.forEach(list => datas.push({ key: list.userId, value: list.listName }));
                    return datas;
                })()}
                onSelectionChange={(userId: string) => console.log(`get words with userId: `, userId)}
            />
        </Layout>
    )
}

export default Wordy;
