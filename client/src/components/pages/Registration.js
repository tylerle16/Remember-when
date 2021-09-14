// import styled from 'styled-components';
import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react'



function Registration() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                confirmPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)


            })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Create Username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" for='Confirm Password' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default Registration
