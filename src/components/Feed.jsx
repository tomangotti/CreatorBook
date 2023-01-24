import React, {useEffect, useState} from "react";
import RenderPost from "./RenderPost";
import NewPost from "./NewPost";

function Feed({posts, profiles, handleNewPost}){
    // sorting post list in order of data //
    posts.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
    })

    // rendering posts in the renderpost component //
    const renderPost = posts.map((post, index) => {
        return <RenderPost key={index} post={post}  />
    })

    return(
        <div>
            <h3>Posts</h3>
            <NewPost profiles={profiles} handleNewPost={handleNewPost} />
            {renderPost}
        </div>
    )
}

export default Feed;