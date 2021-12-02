import React, { useContext, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import { myContext } from '../myContext';
import '../style/form.scss';

const Login = ({history, getUser, users}) => {
    const form = useRef(null);
    const {setSite} = useContext(myContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            user: formData.get('user'),
            password: formData.get('password'),
            email: formData.get('email')
        }
        const isThere = users.some(user => user.user === data.user && user.password === data.password && user.email === data.email);
        if (isThere) {
            const myUser = users.find(user => user.user === data.user && user.password === data.password && user.email === data.email);
            getUser(myUser);
            history.push('/home');
        }
    }
    useEffect(() => setSite('Go to the Home'), []);
    return (
        <main className='main-form'>
            <h2>Log in</h2>
            <form className='login' ref={form}>
                <label htmlFor='user'>User:</label>
                <input required name='user' id='user' type='text' placeholder='Enter your user' />
                <label htmlFor='password'>Password:</label>
                <input required name='password' id='password' type='password' placeholder='Enter your password' />
                <label htmlFor='email'>Email:</label>
                <input required name='email' id='email' type='email' placeholder='Enter your email' />
                <button type='submit' onClick={handleSubmit}>Log in</button>
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