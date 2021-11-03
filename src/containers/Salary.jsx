import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { myContext } from '../myContext';

const Salary = ({user}) => {
    const {setSite} = useContext(myContext);
    useEffect(() => setSite('Go to the Home'), []);
    return (
        <main>
            {Object.keys(user).length === 0 ?
            <Link to='/signup'>You need an user, click here to make it</Link>:
            <h2>Hello {user.user}</h2>}
        </main>
    );
}
 
const mapState = state => ({
    user: state.user
})

export default connect(mapState)(Salary);