import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { myContext } from '../myContext';
import {getP} from '../actions';
import axios from 'axios';
import '../style/main.scss';

const Main = ({user, getP}) => {
    const {setSite} = useContext(myContext);
    const [products, setProducts] = useState([]);
    const [element, setElements] = useState([]);
    const API = 'https://arcane-crag-90274.herokuapp.com/api/myFinanhelp/products';
    const getProduct = async () => {
        let response = await axios(API);
        setProducts(response.data);
        setElements(response.data)
    }
    useEffect(() => {
        setSite('Register your salary');
        getProduct();
    }, []);
    return ( <main className='home'>
        <h2>Counts</h2>
        <input onChange={(e) => {const ele = products.filter(a => a.name.toLowerCase().includes(e.target.value)); setElements(ele)}} />
        <ul>
            {products.length > 0 ? element.map((e) => {
                return (
                    <li onClick={() => {if (Object.keys(user).length > 0) {getP(e)}}} key={e.id} style={{color: 'white'}}>
                    <h2>{e.name}</h2>
                    {e.price} {e.id}
                    </li>
                )
            }): <h1 style={{color: 'white'}}>Loading...</h1>}
        </ul>
    </main> );
}

const mapState = state => ({
    user: state.user,
    users: state.users
})

const mapDispatch = {
    getP
}

export default connect(mapState, mapDispatch)(Main);