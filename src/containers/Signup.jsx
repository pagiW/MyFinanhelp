import React, { useContext, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import { myContext } from '../myContext';
import '../style/form.scss';

const Signup = ({history, createUser}) => {
    let form = useRef(null);
    const {setSite} = useContext(myContext);
    useEffect(() => setSite('Go to the Home'), []);
    return (
        <main className='main-form'>
            <h2>Sign up</h2>
            <form className='signup' ref={form}>
                <label htmlFor='user'>User:</label>
                <input required name='user' id='user' type='text' placeholder='Enter your user' />
                <label htmlFor='password'>Password:</label>
                <input required name='password' id='password' type='password' placeholder='Enter your password' />
                <label htmlFor='email'>Email:</label>
                <input required name='email' id='email' type='email' placeholder='Enter your email' />
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData(form.current);
                    const newUser = {
                        user: formData.get('user'),
                        password: formData.get('password'),
                        email: formData.get('email'),
                        products: []
                    }
                    const passwork = newUser.password.includes('0') || newUser.password.includes('1') || newUser.password.includes('2') || newUser.password.includes('3') || newUser.password.includes('4') || newUser.password.includes('5') || newUser.password.includes('6') || newUser.password.includes('7') || newUser.password.includes('8') || newUser.password.includes('9');
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