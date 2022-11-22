import React, { ChangeEvent, useState } from "react";
import s from "./SignUpPage.module.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";
// import AdminCV from "../CV/adminCv/AdminCV.tsx";
import { EnterTypes } from "../../common/Types.tsx";
import LoginPage from "../login/LoginPage.tsx";

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


interface Form {
  name: string;
  email: string;
  password: string;
}

interface Props {
  page: EnterTypes;
}


const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType()
  .isRequired("This field is required."),
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

const SignUpPage = ({ page }: Props) => {
console.log(page);

  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    // name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        // formValue.name,
        formValue.email,
        formValue.password
      );
      setSuccess((prevState)=>!prevState);
      setTimeout(() => {
        setSuccess((prevState)=>!prevState)
        setFormValue({
          // name: "",
          email: "",
          password: "",
        })
      navigate(AppRoutes.LOGIN)
    }, 1000);
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
                {/* <TextField name="name" label="Name"/> */}
                <TextField name="email" label="Email"/>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="off"
                />

                <ButtonToolbar>
                  <Button appearance="primary" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </ButtonToolbar>
              </Form>
            </FlexboxGrid.Item>
        </FlexboxGrid>
        </>
      ) : (
        <h1>Success</h1>
      )}

<Routes>
<Route path={AppRoutes.LOGIN} element={<LoginPage />} />
</Routes>


    </>
  );
};

export default SignUpPage;
