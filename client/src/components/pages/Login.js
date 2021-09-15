// import styled from 'styled-components';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap'
import { useState } from 'react';
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
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
                console.log(data.error)
                if (data.errors) {
                    setErrors(data.errors)
                } else if (data.error) {
                    setErrors([{ msg: data.error }])
                }
                else {
                    setErrors([])
                    history.push('/');
                }
            })
    }

    return (
        <Container>
            {errors.map((error, idx) => {
                return (
                    <Alert key={idx} variant='warning'>
                        {error.msg}</Alert>
                )
            })}
            <Card>
                <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Username" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button><br/>
            </Form>

                </Card.Body>
                <Card.Footer>
                    Don't have an account?<Link to="/register">Sign up here</Link>
                </Card.Footer>
                </Card>
        </Container>
    )
}

export default Login
