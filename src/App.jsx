import React from 'react'

import { AuthProvider } from './auth'
import Comments from './components/Comments'
import NewComment from './components/NewComment'
import CreateUser from './components/CreateUser'
import UserInfo from './components/UserInfo'
import SigninUser from './components/SigninUser'
/*
firebase.auth().createUserWithEmailAndPassword('user1@email.com', '123456')
  .then(user => {
    user.displayName = 'patrick'
  })
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      user.updateProfile({ displayName: 'patrickfv' })
    }
  })
*/

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <CreateUser/>
        <Comments />
        <UserInfo />
        <SigninUser />
      </div>
    </AuthProvider>
  )
}

export default App
