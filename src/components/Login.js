import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'

function Login(props) {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = () => {
        props.history.push('/dashboard');
    }

    return (
        <>
            <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>
                <Form.Group>
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label" >Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <br /><br />
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <Button variant="secondary" type="submit" className='center' 
                value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} >
                    Login</Button><br /><br />
                <div style={{ fontSize: '20px' }}>Don't have an account yet? <b>Sign Up</b></div>
                <br /><br />
            </Form>
            
        </>
    )
}

export default Login
