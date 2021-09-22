
import { Form, Button, Container, Alert, Card } from 'react-bootstrap'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import Sidebar from '../Sidebar';

import showPasswordImg from '../images/showPasswordImg.png';
import hidePasswordImg from '../images/hidePasswordImg.png' ;
import './Registration.css'





function Registration() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const [isRevealConPassword, setIsRevealConPassword] = useState(false);


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
                if (data.errors) {
                    setErrors(data.errors)
                }
                else {
                    setErrors([])
                    history.push('/login')

                }


            })

    }

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
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
                            <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Create Username" />
                        </Form.Group>
                        <Form.Group className="mb-3 " >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3, password-container">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type={isRevealPassword ? "text" : "password"} placeholder="Password" /><i className="fa fa-eye password-icon" /><img title={isRevealPassword ? "Hide password" : "Show password"} src={isRevealPassword ? hidePasswordImg : showPasswordImg} onClick={() => setIsRevealPassword(prevState => !prevState)} alt="" />
                        </Form.Group>
                        <p />
                        <Form.Group className="mb-3, confirm-password-container" >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={isRevealConPassword ? "text" : "password"} placeholder="Confirm Password" for='Confirm Password' /><img className="input-group-append" title={isRevealConPassword ? "Hide password" : "Show password"} src={isRevealConPassword ? hidePasswordImg : showPasswordImg} onClick={() => setIsRevealConPassword(prevState => !prevState)} alt="" />
                        </Form.Group>
                        <p />
                        <Button  variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>

                </Card.Body>
                <Card.Footer>
                    Already have an account?<Link to="/Login">    Sign in here</Link>
                </Card.Footer>

                </Card>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </Container>
        </>

    
    )
}

export default Registration
