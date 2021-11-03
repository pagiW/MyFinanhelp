import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import { myContext } from '../myContext';
import '../style/form.scss';

const Login = ({history, getUser, users}) => {
    let [myUser, setUser] = useState({
        user: '',
        password: '',
        email: ''
    });
    const {setSite} = useContext(myContext);
    useEffect(() => setSite('Go to the Home'), []);
    const change = (e) => {
        setUser({
            ...myUser,
            [e.target.name]: e.target.value
        });
    }
    return (
        <main className='main-form'>
            <h2>Log in</h2>
            <form className='login'>
                <label htmlFor='user'>User:</label>
                <input onChange={change} name='user' id='user' type='text' placeholder='Enter your user' />
                <label htmlFor='password'>Password:</label>
                <input onChange={change} name='password' id='password' type='password' placeholder='Enter your password' />
                <label htmlFor='email'>Email:</label>
                <input onChange={change} name='email' id='email' type='email' placeholder='Enter your email' />
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    console.log(myUser)
                    if (users.length > 0) {
                        const find = users.some(user => user.user === myUser.user && user.password === myUser.password && user.email === myUser.email);
                        console.log(find);
                        getUser(myUser); history.push('/home')
                    }
                }}>Log in</button>
            </form>
        </main>
    );
}

const mapState = state => ({
    users: state.users
})

const mapDispatch = {
    getUser
}

export default connect(mapState, mapDispatch)(Login);