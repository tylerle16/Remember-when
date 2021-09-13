// import styled from 'styled-components';
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { useState } from 'react';
import { useHistory } from 'react-router'



function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    history.push('/');
                }
            })
    }

    return (
        <Container>
            {error && (<Alert variant="danger">{error}</Alert>)}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Create Username" />
                </Form.Group>
                

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login
