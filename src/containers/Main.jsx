import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { myContext } from '../myContext';
import '../style/main.scss';

const Main = ({user, users}) => {
    const {setSite} = useContext(myContext);
    useEffect(() => setSite('Register your salary'), []);
    return ( <main className='home'>
        <h2>Counts</h2>
    </main> );
}

const mapState = state => ({
    user: state.user,
    users: state.users
})

export default connect(mapState)(Main);