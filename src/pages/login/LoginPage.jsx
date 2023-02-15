import React, { ChangeEvent, useState } from "react";
import s from "./LoginPage.module.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";
import AdminCV from "../CV/adminCv/AdminCV";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase";

import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  FlexboxGrid,
} from "rsuite";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
});

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const LoginPage = () => {
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState(
    {email: "", 
    password: ""});
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess((prevState) => !prevState);
        setFormValue({email: "", password: ""})
        navigate(AppRoutes.ADMIN)
      }, 1000);
    } catch (e) {
      console.log(e);
      navigate(AppRoutes.NOT_FOUND);
    } finally {
    }
  };

  const handleChange = (event, key) => {
    setFormValue({
      ...formValue,
      [key]: event.target.value,
    });
  };

  return (
    <>
      {!success ? (
        <>
          <FlexboxGrid justify="center" className={s.mainContainer}>
            <FlexboxGrid.Item>
              <Panel header={<h3>Login</h3>} bordered>
                <Form
                  ref={formRef}
                  onChange={setFormValue}
                  onCheck={setFormError}
                  formValue={formValue}
                  model={model}
                >
                  <TextField
                    name="email"
                    label="Email"
                    value={formValue.email}
                    onChange={(event) => handleChange(event, "email")}
                  />
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={formValue.password}
                    onChange={(event) => handleChange(event, "password")}
                    autoComplete="off"
                  />

                  <ButtonToolbar className={s.btnContainer}>
                    <Button onClick={handleLogin} className={s.btn}>
                      Log in
                    </Button>
                  </ButtonToolbar>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </>
      ) : (
        <h1>Success</h1>
      )}

      <Routes>
        <Route path={AppRoutes.ADMIN} element={<AdminCV />} />
      </Routes>
    </>
  );
};

export default LoginPage;
