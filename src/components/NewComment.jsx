import React, { useState, useContext } from 'react'
import { useDatabasePush, AuthContext } from '../auth'
import firebase from '../firebase'

function NewComment() {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)

    if(auth.user === null) return null

    const { displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    const onChange = evt => setComment(evt.target.value)
    const onClick = () => {
      if (comment !== '') {
        save({
            content: comment,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            user: {
              id: auth.user.uid,
              name: displayName || alternativeDisplayName,
            },
        })
        setComment('')
      }
    }

    return (
      <div>
        <textarea
          cols="30"
          rows="10"
          value={comment}
          {...{ onChange }}/>
          <br/>
        <button {...{ onClick }}>Comentar</button>
      </div>
    )
}

export default NewComment