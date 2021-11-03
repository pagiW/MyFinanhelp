import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import { myContext } from '../myContext';
import '../style/form.scss';

const Signup = ({history, createUser}) => {
    let [newUser, setUser] = useState({
        user: '',
        password: '',
        email: ''
    });
    const {setSite} = useContext(myContext);
    useEffect(() => setSite('Go to the Home'), []);
    const change = (e) => {
        setUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    }
    return (
        <main className='main-form'>
            <h2>Sign up</h2>
            <form className='signup'>
                <label htmlFor='user'>User:</label>
                <input onChange={change} name='user' id='user' type='text' placeholder='Enter your user' />
                <label htmlFor='password'>Password:</label>
                <input onChange={change} name='password' id='password' type='password' placeholder='Enter your password' />
                <label htmlFor='email'>Email:</label>
                <input onChange={change} name='email' id='email' type='email' placeholder='Enter your email' />
                <button type='submit' onClick={(e) => {
                    const passwork = newUser.password.includes('0') || newUser.password.includes('1') || newUser.password.includes('2') || newUser.password.includes('3') || newUser.password.includes('4') || newUser.password.includes('5') || newUser.password.includes('6') || newUser.password.includes('7') || newUser.password.includes('8') || newUser.password.includes('9');
                    e.preventDefault();
                    if (newUser.email.includes('@') && newUser.user !== '' &&  newUser.password.length > 7 && passwork) {
                        createUser(newUser); history.push('/home')
                    }
                }}>Sign up</button>
            </form>
        </main>
    );
}

const mapDispatch = {
    createUser
}

export default connect(null, mapDispatch)(Signup);