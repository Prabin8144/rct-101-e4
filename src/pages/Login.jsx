import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth } from "../store/auth/auth.actions";

const Login = () => {
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const {loading,error} = useSelector((state) => state.auth.auth)
const navigate = useNavigate()


  const handleSubmit =(e)=> {
    e.preventDefault()
    
    let payload = {
      mail: "",
      password: "",
    };
    dispatch(getAuth(payload,navigate));

    setMail("");
    setPassword("");
  }
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Oops, Something went wrong</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" placeholder="mail" type="text" value={mail} onClick={(e)=> setMail(e.target.value)}/>Mail
        <input data-cy="login-password" placeholder="Password" type="text" value={password} onClick={(e)=>setPassword(e.target.value)}/>Password
        <button data-cy="login-submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
