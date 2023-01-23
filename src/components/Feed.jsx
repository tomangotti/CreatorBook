import React, {useEffect, useState} from "react";
import RenderPost from "./RenderPost";

function Feed({posts}){


posts.sort((a,b) => {
    return new Date(b.date) - new Date(a.date)
})

const renderPost = posts.map((post) => {
    console.log(post)
    return <RenderPost key={post.id} post={post}/>
})
console.log(posts[0])
    
    return(
        <div>
            <h3>Posts</h3>
            {renderPost}
        </div>
    )
}

export default Feed;