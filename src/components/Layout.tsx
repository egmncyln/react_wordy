import React from 'react';

function Layout(props: any) {
    let windowObj: any = window;
    let { title, children } = props;

    return (
        <div className="container p-5 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
                {title && <h1 className="mb-5">{title}</h1>}
                {children ? children : windowObj.GENERAL_ERROR}
            </div>
        </div>
    )
}

export default Layout;
