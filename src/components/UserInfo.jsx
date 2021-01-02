import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth'

function UserInfo() {
    const auth = useContext(AuthContext)
    
    if(auth.user === null) return null
    
    const { displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName
    const onClick = () => auth.signout()
    //setNewDisplayName(dn)
    return (
        <>
          <p>Olá { dn }!</p>
          <FormDisplayName {...{ displayName, user: auth.user}} />
          <button {...{ onClick }}>Sair</button>
        </>
    )
}

function FormDisplayName({ displayName, user }) {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const onChange = evt => setNewDisplayName(evt.target.value)
    const onClick = () => {
        if(newDisplayName !== '') {
            user.updateProfile({ displayName: newDisplayName })
        }
    }

    return (
        <>
            <input type="text" value={newDisplayName} {...{ onChange }} />
            <button {...{ onClick }}>Salvar Nome</button>
        </>
    )
}

export default UserInfo