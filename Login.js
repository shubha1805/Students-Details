import React, { Component } from 'react'
import { render } from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel, Form, Card } from "react-bootstrap";
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            passward: ''
        };
    }

    handleFormChange = (name,value) => {
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Card className="op-Login-area">
                <Card.Title className="text-center">Login</Card.Title>
                <Card.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="emailId" value={this.state.emailId} onChange={event => this.handleFormChange(event.target.name, event.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="passward" value={this.state.passward} onChange={event => this.handleFormChange(event.target.name, event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" id="button-1">
                    Submit
            </Button>
                <Button variant="secondary" type="Cancel" id="button-2">
                    Cancel
            </Button>
            </Form>
            </Card.Body>
            </Card>

        );
    }
}
 



export default Login

const duplicate = [1,2,3,2,1,4,5,9,5,6,]