import React from 'react';
import './Layout.css';

function Layout(props: any) {
    let windowObj: any = window;
    let { title, children, layoutClasses } = props;

    return (
        <div className={`container p-5 d-flex flex-column wordy-layout ${layoutClasses}`}>
            {title && <h1 className="w-100 d-flex justify-content-center mb-5">{title}</h1>}
            <div className="w-100 d-flex justify-content-center">{children ? children : windowObj.GENERAL_ERROR}</div>
        </div>
    )
}

export default Layout;
