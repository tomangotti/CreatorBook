// data // 
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

// components //
import NavBar from './components/NavBar'
import Feed from './components/Feed'
import Support from './components/Support'
import NewProfileForm from './components/NewProfileForm'
import ProfilePage from './components/ProfilePage'


function App() {
  // states //
  const [profiles, setProfiles] = useState([])
  const [posts, setPosts] = useState([])

  // initial fetch //
  useEffect(() => {
    fetch('http://localhost:3000/profile')
    .then(r => r.json())
    .then(data => {
      setProfiles(data)
      createPostList(data)
    })
  },[])

  // creating the post list from from get data//
  function createPostList(data){
    let postList = []
    for(const key1 of data){
      for(const key2 of key1.posts){
          const postObj = {
            name: key1.name,
            id: key1.id,
            image: key1.image,
            post: key2.description,
            date: key2.date
          }
        postList.push(postObj)
      }
    }
    setPosts(postList)
  }

  // creating new post both localling and patching //
  function handleNewPost(id, newPost, image, name, key){
    //creating date//
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth()+1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let date = mm + '/' + dd + '/' + yyyy;

    // updating posts localling //
    let keyId = profiles.indexOf(key)
    console.log(profiles[keyId].posts)
    const postObj = {
      name: name,
      image: image,
      post: newPost,
      id: id,
      date: date
    }
    setPosts([...posts, postObj])
    
    // creating patch locally //
    const patchObj = {
      posts: [ ...profiles[keyId].posts, {
        description: newPost,
        date: date,
        likes: 0,
        dislikes: 0
      }
      ]
    }

    fetch(`http://localhost:3000/profile/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(patchObj)
    })
    .then(r => r.json())
    .then(update => console.log(update))

  }

  // function to add new user after FETCH // 
  function handleNewUser(user){
    setProfiles([...profiles, user])
  }

 
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Feed posts={posts} profiles={profiles} handleNewPost={handleNewPost}  />} />
          <Route exact path='/newprofile' element={<NewProfileForm handleNewUser={handleNewUser}/>} />
          <Route exact path='/support' element={<Support />} />
          <Route exact path='/profile' element={<ProfilePage />} />
        </Routes>

    </div>
  )
}

export default App
