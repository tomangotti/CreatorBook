import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import RenderPost from "./RenderPost";



function ProfilePage({handleDelete}){
    const [profile, setProfile] = useState([])
    const [posts, setPosts] = useState([])

    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`http://localhost:3000/profile/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setProfile(data)
            createPostList(data.posts)
        })
    }, [params.id])

    const imageSize = {
        height: "400px",
        width: "400px"
    }

    let userPosts = [];
    function createPostList(posts){
        let postList = posts.map((post) => {
            return <div className="card mb-3" style={{width: "540px"}}> 
                        <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{profile.name}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <p className="card-text">{post.date}</p>
                                    <button >👍</button>
                                    <button >👎</button>
                                </div>
                            </div>
                            </div>
        })
        userPosts.push(postList)
        setPosts(userPosts)
    }
    
    function handleClick(e){
        let deleteId = profile.id
        handleDelete(profile.id)
        fetch(`http://localhost:3000/profile/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(r => r.json())
        
    }
    

    return(
        <>
        <div class="card mb-3">
            <img src={profile.image} className="card-img-top" alt="user image" style={imageSize}/>
            <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">Location: {profile.location}</p>
                <p className="card-text">Age: {profile.age}</p>
                <p className="card-text">BIO: {profile.bio}</p>
            </div>
            <NavLink 
            to="/"
            exact
            ><button onClick={handleClick}>Delete Profile</button>
            </NavLink>
        </div>
        {posts}
        </>
    )
}

export default ProfilePage