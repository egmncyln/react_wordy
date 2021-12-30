import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { KeyValue } from '../models/key-value.model';
import CrudIcons from './CrudIcons';
import './Dropdown.css';

export const VALUE_DEFAULT_OPTION = "VALUE_DEFAULT_OPTION";

function Dropdown(props: any) {
    let navigate = useNavigate();
    let { datas } = props;

    //#region Component validation
    useEffect(() => {
        if (!datas) navigate(`/`);
    }, [datas, navigate]);

    if (!datas) return null;
    //#endregion

    let { title, defaultOption, showCrudIcons = false } = props;
    defaultOption = !!defaultOption ? defaultOption : `Select !`;

    return (
        <div className="w-100 d-flex flex-column wordy-dropdown">
            <div className="w-100 d-flex justify-content-between align-items-center">
                {title && <h5>{title}</h5>}
                {showCrudIcons
                    ? <CrudIcons
                        disableEDButtons={props.disableEDButtons}
                        onAddClicked={() => props.onAddClicked()}
                        onEditClicked={() => props.onAddClicked()}
                        onDeleteClicked={() => props.onAddClicked()} />
                    : null
                }
            </div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                onChange={event => event.target.value ? props.onSelectionChange(event.target.value) : null}>
                <option value={VALUE_DEFAULT_OPTION}>{`--- `}{defaultOption}{` ---`}</option>
                {datas.map((data: KeyValue) => <option key={data.key} value={data.key}>{data.value}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;
