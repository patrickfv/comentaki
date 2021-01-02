import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth'

function SigninUser() {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', passwd: '' })
    const onClick = () => auth.signinUser.signinUser(form.email, form.passwd)
    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value,
        })
    }
    return (
        <>
            <h3>Entrar na sua conta:</h3>
            {
                auth.signinUser.signinUserState.error !== '' &&
                <p>{auth.signinUser.signinUserState.error}</p>
            }
            <input type="text" placeholder="e-mail" value={form.email} onChange={onChange('email')}/>
            <input type="password" placeholder="senha" value={form.passwd} onChange={onChange('passwd')}/>
            <button {...{ onClick }}>
                Entrar
            </button>
        </>
    )
}

export default SigninUser