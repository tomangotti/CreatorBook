import React from "react";

function NewProfileForm({handleNewUser}){

    function handleSubmit(e){
        e.preventDefault()
        const newUser = {
            name: e.target.name.value,
            age: e.target.age.value,
            age: e.target.age.value,
            location: e.target.location.value,
            bio: e.target.bio.value,
            image: e.target.image.value,
            posts:[]
        }

        fetch('http://localhost:3000/profile', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then(user => handleNewUser(user))

        e.target.reset()
    }

    return(
        <>
        <h3>New Profile</h3>
        
        <form onSubmit={handleSubmit}>
        <button>Submit</button><br></br>
            <label>Name</label>
            <br></br>
            <input type="text" name="name"/>
            <br></br>
            <label>Age</label>
            <br></br>
            <input type="number" name="age"/>
            <br></br>
            <label>Location</label>
            <br></br>
            <input type="text" name="location"/>
            <br></br>
            <label>bio</label>
            <br></br>
            <input type="text" name="bio"/>
            <br></br>
            <label>image</label>
            <br></br>
            <input type="text" name="image"/>
            
        </form>
        </>
    )
}

export default NewProfileForm