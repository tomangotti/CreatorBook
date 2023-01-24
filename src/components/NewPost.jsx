import React, { useEffect, useState } from "react";

function NewPost({profiles, handleNewPost}) {
    const [nameList, setNameList] = useState([])

    useEffect(() => {
        let dropList = [];
        for(const key of profiles){
            dropList.push(key.name) 
        }
        setNameList(dropList)
    }, [profiles])
    
    const nameDrop = nameList.map((user) => {
        return <option value={user}>{user}</option>
    })


    function handleSubmit(e){
        e.preventDefault();
        let userName = e.target.select.value;
        let newPost = e.target.text.value;
        
        if(userName === "Choose User") return alert('PLEASE SELECT USER')
        
        for(const key of profiles){
            if(key.name === userName){
                handleNewPost(key.id, newPost, key.image, key.name, key)
            }
        }
        e.target.reset();
    }

    return(
        <div>
            <form className="mb-3" onSubmit={handleSubmit}>
                <label for="exampleFormControlTextarea1" className="form-label" style={{width: "100px"}}>New Post</label>
                <select name="select">
                    <option>Choose User</option>
                    {nameDrop}
                </select>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{width: "700px"}} name="text"></textarea>
                <button>Post</button>
            </form>
        </div>
        
    )
}

export default NewPost;