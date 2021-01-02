import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth'

function CreateUser() {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', passwd: '' })
    const onClick = () => auth.createUser.createUser(form.email, form.passwd)
    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value,
        })
    }
    return (
        <>
            <h3>Criar nova conta:</h3>
            <input type="text" placeholder="e-mail" value={form.email} onChange={onChange('email')}/>
            <input type="password" placeholder="senha" value={form.passwd} onChange={onChange('passwd')}/>
            <button {...{ onClick }}>
                Criar Usuário
            </button>
        </>
    )
}

export default CreateUser