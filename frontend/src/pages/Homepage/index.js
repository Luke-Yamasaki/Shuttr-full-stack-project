import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';



const Homepage = () => {
    const user = useSelector((state) => state.user);

    if (!user) {
        return <Redirect to='/welcome' />
    }

    return (
        <div>

        </div>
    )
}

export default Homepage;
