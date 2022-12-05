import { Button, Form } from "react-bootstrap";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <h1 className="login-title">LOGIN</h1>
      <Form className="login-input">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
