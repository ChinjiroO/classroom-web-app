import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Col, Row, Form, Button, FormControl, Image } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import bg1 from '../../../assets/bg1.jpg'

const LoginForm = props => {
    const [user, setUser] = useState({
        name: '', email: '', password: ''
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }    

    return (
        <Sform> 
                <Row>
                    {/* Col 1 */}
                    <Col md="auto" sm="auto" xs="auto">
                        <StextHeader>Welcome!</StextHeader>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <SformControl className="form-control" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Col>                   
                    {/* Col 2 */}
                    <Col className="align-self-center">
                        <span>Or</span>
                    </Col>
                    {/* Col 3 */}
                    <Col className="align-self-center">
                        <Sbutton>
                            <GoogleIcon/> Signin with Google
                        </Sbutton>                            
                    </Col>
                </Row>
            </Sform>        
        )
    }

function SignIn() {
    return (
        <Scontainer fluid>            
        <Simg src={bg1}/>
            <Row className="justify-content-center">                
                <Col md="auto" sm="auto" xs="auto">
                    {/* Variable width content <FcGoogle /> */}
                    <LoginForm />
                </Col>                
            </Row>            
        </Scontainer>
    )
}

export default SignIn

//position: absolute;
//*horizontal align
//justify-content: center;
//*vertical align
//align-items: center;

export const Scontainer = styled(Container)`
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Sform = styled(Form)`
    background-color: white;
    border-radius: 1.25em;
    padding: 4rem;
    color: #000;    
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;    
`
export const Sbutton = styled(Button)`
    background-color: #F8FAFD;
    border: none;
    min-width: 15rem;
    color: #5B6D94;
    border-radius : 0.5rem;
    &:hover {
        color: #0D2862;
        background-color: #EFEFEF;
        border: none;
    }
`
export const Simg = styled(Image)`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;    
`
export const GoogleIcon = styled(FcGoogle)`
    background-color: transparent;
`
export const SformControl = styled(FormControl)`
    width: 20rem;
`
export const StextHeader = styled.h1`
    color: #0D2862;
`