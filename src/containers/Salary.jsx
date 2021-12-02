import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { myContext } from '../myContext';

const Salary = ({user}) => {
    const {setSite} = useContext(myContext);
    const total = () => {
        const reducer = (acumulator, value) => acumulator + value.price;
        let sum = user.products.reduce(reducer, 0);
        return sum
    }
    useEffect(() => setSite('Go to the Home'), []);
    return (
        <main>
            {Object.keys(user).length === 0 ?
            <Link to='/signup'>You need an user, click here to make it</Link>:
            <>
                <h2 style={{color: 'white'}}>Hello {user.user}</h2>
                <ul>
                    {
                        user.products.map((product, i) => <li key={i} style={{color: 'white'}}>{product.title} {product.price} {product.id}</li>)
                    }
                </ul>
                <p style={{color: 'white'}}>total: {total()}</p>
            </>}
        </main>
    );
}
 
const mapState = state => ({
    user: state.user
})

export default connect(mapState)(Salary);