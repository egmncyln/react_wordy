import React from 'react'
import { useNavigate } from 'react-router';
import { KeyValue } from '../models/key.value';

function Dropdown(props: any) {
    let navigate = useNavigate();
    let { title, defaultOption, datas } = props;
    defaultOption = !!defaultOption ? defaultOption : `Select !`;
    if (!datas) navigate(`/`);

    return (
        <React.Fragment>
            {title && <h5>{title}</h5>}
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                onChange={event => event.target.value ? props.onSelectionChange(event.target.value) : null}>
                <option value="">{`--- `}{defaultOption}{` ---`}</option>
                {datas.map((data: KeyValue) => <option key={data.key} value={data.key}>{data.value}</option>)}
            </select>
        </React.Fragment>
    )
}

export default Dropdown;
