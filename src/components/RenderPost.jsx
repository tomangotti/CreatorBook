import React, {useState} from "react";
import { Navigate } from "react-router-dom";



function RenderPost({post}) {

    console.log(post)
    return(
        <div className="card mb-3" style={{width: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={post.image} className="img-fluid rounded-start" alt="image of profile"  />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{post.name}</h5>
                        <p className="card-text">{post.post}</p>
                        <p className="card-text">{post.date}</p>
                        <button>👍</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderPost;