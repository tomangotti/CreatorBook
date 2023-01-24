import React, {useState} from "react";
import { NavLink } from "react-router-dom";




function RenderPost({post }) {

    const [countLikes, setCountLikes] = useState(post.likes)
    const [countDislikes, setCountDislikes] = useState(post.dislikes)

    function handleLike(){
        setCountLikes((prevCount) => prevCount + 1)
    }
    
    function handleDislike(){
        setCountDislikes((prevCount) => prevCount + 1)
    }
    

    return(
        <div className="card mb-3" style={{width: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <NavLink
                    to={`/profile/${post.id}`}
                    exact>
                    <img src={post.image} className="img-fluid rounded-start" alt="image of profile" />
                    </NavLink>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{post.name}</h5>
                        <p className="card-text">{post.post}</p>
                        <p className="card-text">{post.date}</p>
                        <button onClick={handleLike}>{countLikes}👍</button>
                        <button onClick={handleDislike} >{countDislikes}👎</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderPost;