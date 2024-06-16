import React from 'react';

export default function Alert(props) {
    <>
        {
            <div style={{ margin: "50px" }}>

            </div>
        }
    </>
    if (!props.alert || !props.alert.type) {
        return (
            <>
                <div style={{ height: "50px" }}></div>
            </>
        );
    }

    return (
        <>
            <div style={{ height: "50px" }} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    );
}
