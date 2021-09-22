// import styled from 'styled-components';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap'
import { useState } from 'react';
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'

import showPasswordImg from '../images/showPasswordImg.png';
import hidePasswordImg from '../images/hidePasswordImg.png' ;
import './Login.css'
import {useDispatch} from 'react-redux'
import Sidebar from '../Sidebar';
import { actionLoggedIn } from '../../redux/actions/users';



function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const dispatch = useDispatch()

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
                    dispatch(actionLoggedIn(data.user))
                    setErrors([])
                    history.push('/');
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
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Username" />
                </Form.Group>


                <Form.Group className="mb-3 password-container">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type={isRevealPassword ? "text" : "password"} placeholder="Password" /><i className="fa fa-eye password-icon" /><img title={isRevealPassword ? "Hide password" : "Show password"} src={isRevealPassword ? hidePasswordImg : showPasswordImg} onClick={() => setIsRevealPassword(prevState => !prevState)} alt="" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button><br/>
            </Form>

                </Card.Body>
                <Card.Footer>
                    Don't have an account?<Link to="/register">   Sign up here</Link>
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

export default Login
