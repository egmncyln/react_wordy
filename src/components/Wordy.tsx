import React from 'react';
import { useParams } from 'react-router-dom';
import { KeyValue } from '../models/key.value';
import { WordList } from '../models/word.list';
import Dropdown from './Dropdown';
import Layout from './Layout';

function Wordy() {
    let { userId: string } = useParams();
    let wordList: WordList[] = [];

    return (
        <Layout title={`Wordy is the best app in the world !`}>
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
