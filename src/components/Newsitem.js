/* eslint-disable react/style-prop-object */

import React from 'react'
import './Newsitem.css'
export default function Newsitem(props) {

    // console.log("hello");
    return (
        <div>
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={props.imgurl} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{props.title}</h5>
                    <p className ="card-text">{props.description}</p>
                    <a href={props.urlnews} id="b1s" className ="btn btn-sm btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
