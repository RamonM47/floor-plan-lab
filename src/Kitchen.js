import React from 'react';
import Oven from './Oven';
import Sink from './sink';

function Kitchen(props) {
    return (
        <div>
            <h1>Kitchen</h1>
            <Oven />
            <Sink />
        </div>
    );
}


export default Kitchen;