import React from 'react';
import Login from './Login'
// import Signup from './Signup'
import '../styles/Main.css'

const Main = (props) => {
    return (
        <div className='main'>
            {/* <Signup /> */}
            <Login />
        </div>
    )
}

export default Main