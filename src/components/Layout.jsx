import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import img from '../imgs/logo.png';
import {myContext} from '../myContext';
import { out } from '../actions';
import '../style/layout.scss';

const Layout = ({user, out}) => {
    const {site} = useContext(myContext)
    return (
        <header className='layout'>
            <figure>
                <Link to='/home'><img src={img} /><h1>My Finanhelp</h1></Link>
            </figure>
            <div>
                {site === 'Go to the Home' && Object.keys(user).length === 0 ?
                <><Link to='/home'>{site}</Link></> : site === 'Go to the Home' ? <><Link to='/home'>{site}</Link><button onClick={() => out()}>Log out</button></> : site === 'Register your salary' && Object.keys(user).length > 0 ? 
                <><Link to='/salary'>{site}</Link><button onClick={() => out()}>Log out</button></> : site === 'Register your salary' && Object.keys(user).length === 0 && 
                <><Link style={{marginRight: '25px'}} to='/signup'>Sign up</Link><Link to='/login'>Log in</Link></>}
            </div>
        </header>
    );
}

const mapState = state => (
    {
        user: state.user
    }
)

const mapDispatch = {
    out
}

export default connect(mapState, mapDispatch)(Layout);