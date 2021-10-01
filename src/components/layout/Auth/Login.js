import { Breadcrumb, Button, Form, Input, Row, Col } from 'antd';
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Support from '../../common/Support/index';
import { itemRender, ROUTES } from '../../../constants/Routing_Register';
import { API_KEY } from '../../../constants/API_Google.js';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetGmailApi, PostGmailApi } from '../../../Redux/Reducer/gmailReducer';

const Login = () => {
  const dispatch = useDispatch();

  const listUser = useSelector((state) => {
    // console.log('listUser ~ state', state);
    return state.gmail.listUser;
  });

  React.useEffect(() => {
    dispatch(GetGmailApi());
    dispatch(PostGmailApi());
  }, []);


  const clientId = API_KEY.Google;
  const history = useHistory();

  const [showButton, setShowButton] = React.useState({
    Login: true,
    Logout: false,
  });

  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
  });
  const { email, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const onFinish = (values) => {
    if (values.email === 'admin@gmail.com' && values.password === 'admin') {
      const token = { token: 'token-website', email: 'admin@gmail.com' };
      const TOKEN = 'token';
      localStorage.setItem(TOKEN, token.token);
      history.push('/admin');
    } else {
      alert('Password or email incorrect !');
    }
  };

  //----------------Check Gmail Login ------------------
  const onLoginSuccess = (res) => {
    console.log('Successfully logged in', res.profileObj);
    alert('you have been logged in successfully !!');
    dispatch(
      PostGmailApi(
      {
        email: res.profileObj.email,
        familyName: res.profileObj.familyName,
        givenName: res.profileObj.givenName, 
        googleId: res.profileObj.googleId,
        imageUrl: res.profileObj.imageUrl,
        name: res.profileObj.name,
      })
    );
    if(window.confirm('Do you want to go homepage ?')){
    history.push('/home');
    }
    dispatch(GetGmailApi());
    setShowButton({ Login: false, Logout: true });
  };
  const onFailureSuccess = (res) => {
    console.log("Failure logged in", res);
  };
  const onSignOutSuccess = () => {
    const isLogout = window.confirm("Do you want to logout ?");
    if (isLogout) {
      setShowButton({ Login: true, Logout: false });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register">
      <div className="container">
        <Breadcrumb
          itemRender={itemRender}
          routes={ROUTES}
          className="register__breadcrumb"
        />
        <h1>CUSTOMER LOGIN</h1>
        <Row>
          <Col md={12} xs={24} lg={12}>
            <div className=" register__Loginform">
              <Form
                layout={"vertical"}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <h3>Registered Customers</h3>
                <p>If you have an account, sign in with your email address.</p>
                <Form.Item
                  label="Email"
                  name="email"
                  value={email}
                  onChange={onChangeLoginForm}
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    className="register__Loginform--input"
                    placeholder="Enter your email..."
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  value={password}
                  onChange={onChangeLoginForm}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    className="register__Loginform--input"
                    placeholder="Enter your password..."
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Sign In
                  </Button>
                  <a>Forgot Your Password?</a>
                </Form.Item>
                <Form.Item>
                  {showButton.Login && (
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Login With Google"
                      onSuccess={onLoginSuccess}
                      onFailure={onFailureSuccess}
                      cookiePolicy={"single_host_origin"}
                    />
                  )}
                  {showButton.Logout && (
                    <GoogleLogout
                      clientId={clientId}
                      buttonText="Logout"
                      onLogoutSuccess={onSignOutSuccess}
                    ></GoogleLogout>
                  )}
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col md={12} lg={12}>
            <div className=" register__Linkform mobileHidden">
              <Form>
                <h3>New Customer?</h3>
                <Form.Item>
                  <p>Creating an account has many benefits:</p>
                </Form.Item>
                <Form.Item>
                  <li>• Check out faster</li>
                  <li>• Keep more than one address</li>
                  <li>• Track orders and more</li>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Create An Account</Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={24}>
            <div className=" register__Linkform mobileVisible">
              <Form>
                <h3>New Customer?</h3>
                <Form.Item>
                  <p>Creating an account has many benefits:</p>
                </Form.Item>
                <Form.Item>
                  <li>• Check out faster</li>
                  <li>• Keep more than one address</li>
                  <li>• Track orders and more</li>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Create An Account</Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>

        <Support />
      </div>
    </div>
  );
};

export default Login;
