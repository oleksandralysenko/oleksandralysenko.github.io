import React, { ChangeEvent, useState } from "react";
import s from "./LoginPage.module.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";
import AdminCV from "../CV/adminCv/AdminCV.tsx";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  const navigate = useNavigate();
  const [success, setSuccess] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      localStorage.getItem("user", JSON.stringify(user));
      setSuccess(true);
      setTimeout(() => navigate(AppRoutes.ADMIN), 1000);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <>
      {!success ? (
        <>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={12}>
              <Form 
                ref={formRef}
                onChange={setFormValue}
                onCheck={setFormError}
                formValue={formValue}
                model={model}
              >
                <TextField name="email" label="Email"/>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="off"
                />

                <ButtonToolbar>
                  <Button appearance="primary" onClick={handleLogin}>
                    Log in
                  </Button>
                </ButtonToolbar>
              </Form>
            </FlexboxGrid.Item>
        </FlexboxGrid>
        </>
      ) : (
        <h1>Success</h1>
      )
      }

<Routes>
<Route path={AppRoutes.ADMIN} element={<AdminCV />} />
</Routes>


    </>
  );
};

export default LoginPage;
