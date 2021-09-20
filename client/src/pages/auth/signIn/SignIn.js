import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Col, Row, Form, Button, FormControl, Image, FormLabel } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import bg1 from '../../../assets/bg1.jpg'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signin } from '../../../actions/auth';
import { AUTH } from '../../../constant/actionTypes'; 
import { Link } from 'react-router-dom'

const LoginForm = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState({
        name: '', email: '', password: ''
    });
    let name, value;

    const handleInputs = (e) => {        
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});

        // e.preventDefault();
        console.log(value);
    };

    //* Google Authentication
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: AUTH, data: { result, token } });
            history.push('/dashboard/');            
        } catch (error) {
            console.log(error);
        }
    };    
    const googleFailure = () => {
        console.log('Unsuccessful. Please try again');
    };

    return (
        <Sform> 
            <Row>
                {/* Col 1 */}
                <Col md="auto" sm="auto" xs="auto">
                    <StextHeader>Welcome!</StextHeader>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <SformControl className="form-control" type="email" placeholder="Enter email" defaultValue={user.name} onChange={handleInputs}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                    </div>
                    <Form.Group className="mb-3">                        
                        <ScontainerLabel>
                            <SformLabel >
                                Haven't an account?                      
                            </SformLabel>
                            <Link to="/">
                                Sign Up
                            </Link>
                        </ScontainerLabel>
                    </Form.Group>
                </Col>                   
                {/* Col 2 */}
                <Col className="align-self-center">
                    <span>Or</span>
                </Col>
                {/* Col 3 */}
                <Col className="align-self-center">
                    <GoogleLogin 
                        clientId="689295286287-2d3g0on97gt703o2et2h28cmltnukadv.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Sbutton onClick={renderProps.onClick}><GoogleIcon/> Sign In with Google</Sbutton>
                        )}
                        onSuccess={googleSuccess}
                        onFalse={googleFailure} 
                        cookiePolicy="single_host_origin"
                        >

                    </GoogleLogin>
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
export const SformLabel = styled(FormLabel)`
    color: #0D2862;    
    margin-right: 8px;
`
export const ScontainerLabel = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0 0 0;
`