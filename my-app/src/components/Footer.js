import React from "react"

const Footer = (props) => {
    const {username, email} = props

    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
            <small>
                <span className="text-danger">Name:</span> {username} <span className="text-muted">| Contact: </span>{email}
            </small>
            </div>
        </div>
    )
}

export default Footer;