import React from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import BedRoom from './Bedroom';
import Bath from './Bath';

function FloorPlan(props) {
    return (
        <div>
            <BedRoom bedNum='1'/>
            <Kitchen/>
            <Bath size='Full'/>
            <LivingRoom/>
            <BedRoom bedNum='2'/>
            <Bath size='Half'/>
            <BedRoom bedNum='3'/>
        </div>
    );
}


export default FloorPlan;