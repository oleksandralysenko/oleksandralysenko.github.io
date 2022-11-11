// const signIn = async () => {
//     await signInWithEmailAndPassword(auth, "", "")
//     .then((res:any)=>console.log(res))
//     .catch((e)=>console.log(e))
//     console.log(auth.currentUser)
//     setTimeout(()=>setRender(!render), 3000)
// }


import React, { ChangeEvent, useState } from "react";
import s from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase"


interface FormInfo {
  email: string;
  password: string;
}



const LoginPage = () => {

  const [formValue, setFormValue] = useState<FormInfo>({
    email: "",
    password: "",
  })

  const [success, setSuccess] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try{
const user = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
localStorage.setItem("user", JSON.stringify(user))
setSuccess(true)
setTimeout(()=>navigate(AppRoutes.LOGIN), 3000)
    }catch(e){
console.log(e)
    }finally{

    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setFormValue({
        ...formValue,
        [key]: event?.target.value
    })
  }

  console.log(formValue)

  return (
    <>
    {!success
    ? <>


      {<form className={s.formContainer}>

        <label htmlFor="">Email</label>
        <input
        type="email"
        value={formValue.email}
        onChange={(event)=>handleChange(event, "email")} 
        />

        <label htmlFor="">Password</label>
        <input
        type="password"
        value={formValue.password} 
        onChange={(event)=>handleChange(event, "password")} 
        />

      </form>}
      <button onClick={handleSignUp}>Login</button>
      </>
      : <h1>Success</h1>}
    </>
  );
};
export default LoginPage;