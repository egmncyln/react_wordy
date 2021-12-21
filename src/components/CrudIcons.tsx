import React from 'react';
import Add from '../icons/Add';
import Delete from '../icons/Delete';
import Edit from '../icons/Edit';
// import Refresh from '../icons/Refresh';
import './CrudIcons.css';

function CrudIcons(props: any) {
    return (
        <div className="d-flex wordy-crudicons">
            <Add onClick={() => props.onAddClicked()} />
            <Edit disabled={props.disableEDButtons} onClick={() => props.onEditClicked()} />
            <Delete disabled={props.disableEDButtons} onClick={() => props.onDeleteClicked()} />
            {/* <Refresh disabled={props.isRefreshDisabled} onClick={() => props.onRefreshClicked()} /> */}
        </div>
    )
}

export default CrudIcons;
