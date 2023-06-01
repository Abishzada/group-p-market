import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postRemoved } from './../../Redux/actions/index';
import { Row, Col } from 'antd';

const Cart = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch(state);

    const handleClose = (item) => {
        dispatch(postRemoved(item))
    }

    const cartItems = (cart) => {
        return (
           <>
           <div >
                <Row style={{ margin: 40, border: "1px solid black" }} key={cart.id} >
                    <Col span={6} style={{ textAlign: "center" }}>
                        <img src={cart.image} alt={cart.title} height="100px" width="100px" />
                    </Col>
                    <Col span={16} style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize: 18 }}>{cart.title}</h1>
                        <h3 style={{ fontWeight: 600 }}> $ {cart.price}</h3>
                    </Col>
                    <Col span={2} style={{ textAlign: "center" }}>
                        <button onClick={() => handleClose(cart)}>X</button>
                    </Col>
                </Row>
                </div>

                </>

        )
    }


    return (
        
        <>
        
            {state.length !== 0 && state.map(cartItems)}
        </>
    );
}




export default Cart;
