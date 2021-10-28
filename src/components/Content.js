import React from 'react'
import "./Content.css"
const Content = (props) => {
    return (
        <div className="box">
            <div height={props.offset}>
                <br />
            </div>
            <div className="content"><p>{props.text}</p></div>
        </div>
    )
}

export default Content
