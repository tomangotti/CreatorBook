import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import Feed from './components/Feed'
import Support from './components/Support'
import NewProfileForm from './components/NewProfileForm'
import ProfilePage from './components/ProfilePage'


function App() {
  
  const [profiles, setProfiles] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/profile')
    .then(r => r.json())
    .then(data => {
      setProfiles(data)
      createPostList(data)
    })
  },[])

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

  return (
    <div className="App">
      <NavBar />
      
        <Routes>
          <Route path='/' element={<Feed posts={posts}/>} />
          <Route path='/newprofile' element={<NewProfileForm />} />
          <Route path='/support' element={<Support />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>

    </div>
  )
}

export default App
