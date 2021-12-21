import React from 'react';
import { useNavigate } from 'react-router';
import { KeyValue } from '../models/key-value.model';
import CrudIcons from './CrudIcons';
import './Dropdown.css';

function Dropdown(props: any) {
    let navigate = useNavigate();
    let { title, defaultOption, datas } = props;
    defaultOption = !!defaultOption ? defaultOption : `Select !`;
    if (!datas) navigate(`/`);

    return (
        <div className="w-100 d-flex flex-column wordy-dropdown">
            <div className="w-100 d-flex justify-content-between align-items-center">
                {title && <h5>{title}</h5>}
                <CrudIcons
                    onAddClicked={() => console.log("onAddClicked")}
                    onEditClicked={() => console.log("onEditClicked")}
                    onDeleteClicked={() => console.log("onDeleteClicked")}
                    onRefreshClicked={() => console.log("onRefreshClicked")}
                />
            </div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                onChange={event => event.target.value ? props.onSelectionChange(event.target.value) : null}>
                <option value="">{`--- `}{defaultOption}{` ---`}</option>
                {datas.map((data: KeyValue) => <option key={data.key} value={data.key}>{data.value}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;
