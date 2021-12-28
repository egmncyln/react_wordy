import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalTypes } from '../enums/modal-types.enum';
import { KeyValue } from '../models/key-value.model';
import { List } from '../models/list.model';
import { ModalOutput } from '../models/modal-output.model';
import Dropdown from './Dropdown';
import Layout from './Layout';
import WordyModal from './WordyModal';

function Wordy() {
    let [showModal, setShowModal] = useState(false);
    let navigate = useNavigate();
    let { userId } = useParams();

    //#region Component validation
    useEffect(() => {
        if (!userId) navigate(`/`);
    }, [userId, navigate])

    if (!userId) return null;
    //#endregion

    let wordList: List[] = [];

    let getDropdownDatas = () => {
        let datas: KeyValue[] = [];
        wordList.forEach(list => datas.push({ key: list.userId, value: list.listName }));
        return datas;
    }

    let onModalCreate = (output: ModalOutput) => {
        if (output.type === ModalTypes.User) {

        }
        else if (output.type === ModalTypes.Word) {

        }
        else if (output.type === ModalTypes.List) {

        }
    }

    return (
        <Layout title={`Wordy is the best app in the world !`} layoutClasses="wordy-app">
            <Dropdown
                title={`Select a List !`}
                defaultOption={`Word Lists`}
                datas={getDropdownDatas()}
                showCrudIcons={true}
                disableEDButtons={!wordList || wordList.length < 1}
                onAddClicked={() => setShowModal(true)}
                onEditClicked={() => console.log(`Wordy onEditClicked`)}
                onDeleteClicked={() => console.log(`Wordy onDeleteClicked`)}
                onSelectionChange={(userId: string) => console.log(`get words with userId: `, userId)}
            />
            <WordyModal show={showModal} type={ModalTypes.List} onClose={() => setShowModal(false)} onCreate={onModalCreate} />
        </Layout>
    )
}

export default Wordy;
