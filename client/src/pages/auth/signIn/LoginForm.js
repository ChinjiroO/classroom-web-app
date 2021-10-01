import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AUTH } from "../../../constant/actionTypes";
import {
  GoogleIcon,
  Sbutton,
  ScontainerLabel,
  Sform,
  SformControl,
  SformLabel,
  StextHeader,
  Slink,
} from "./Styled";

export const LoginForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  //* Google Authentication
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({
        type: AUTH,
        data: { result, token },
      });
      history.push("/h");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Unsuccessful. Please try again");
  };

  return (
    <Sform>
      <Row>
        {/* Col 1 */}
        <Col md="auto" sm="auto" xs="auto">
          <StextHeader>Welcome!</StextHeader>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <SformControl
              className="form-control"
              type="email"
              placeholder="Enter email"
              // defaultValue={user.name}
            />
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
              <SformLabel>Haven't an account?</SformLabel>
              <Slink to="/">Sign Up</Slink>
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
              <Sbutton onClick={renderProps.onClick}>
                <GoogleIcon /> Sign In with Google
              </Sbutton>
            )}
            onSuccess={googleSuccess}
            onFalse={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </Col>
      </Row>
    </Sform>
  );
};
