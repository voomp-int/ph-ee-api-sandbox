import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import CustomFormField from './Custom/CustomFormField';
import { 
  FormButton, 
  Container,
  FormLabel, 
  FormInput,
  FormContent, 
  FormInputWrapper,
  LoginContainer
} from '../components/StyledElements/GenericStyledElements'

import { 
  LoginFormTitle, 
  LoginFormWrapper, 
  PasswordResetSection,
  FooterSection,
  CreateAccountSection,
  FootP
} from '../components/StyledElements/LoginStyledElements'

export const ENUM_LOGINERROR = {
  EmailError: "emailError", PasswordError: "passwordError",
  NoError: "noError"
}

const Login = ({}) => {
  const [showSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Helper Functions
  const updateSignUp = () => {
    setSignUp(!showSignUp)
    setEmail(""); 
    setPassword("");
    setErrorMessage("")
  }

  useEffect(() => {

  }, []);

  const updateRole = (role_) => {
    setRole(role_)
  }

  const handleLoginRoute = async() => {
      if (isInputValid()) {
        const data = {
          email: email,
          password: password
        }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        };
        var url = ""
        await fetch(url, requestOptions)
          .then(response => handleErrors(response))
          .then(response => response.json())
          .then(data => {
            setEmail("");
            setPassword("");
            setErrorMessage("")
         
            // redirect the user to duo
            // window.location.href = data.redirect_url

            // navigate(`/home`, {

            // })
          
            // navigate(`/main`, {
            //   state: {
            //   }
            // });
          })
          .catch(error => error)
          .then(data => {
            setError(ENUM_LOGINERROR.EmailError)
            setErrorMessage(data.message);
            setPassword("");
            setEmail("");
          })
    }
  }

  function handleErrors(response) {
    if (response.status != 200) {
      throw response.json()
    }
    return response;
  }

  const checkValidEmail = () => {
      const regex = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if(!email || regex.test(email) === false){
          setErrorMessage("Please Enter valid Email");
          setError(ENUM_LOGINERROR.EmailError)
          return false;
      }
      return true;
  }

  const isInputValid = () => {
      if (checkValidEmail()) {
          if (!password) {
              setErrorMessage("Please enter your password");
              setError(ENUM_LOGINERROR.EmailError)
              return false;
          } else if (password.length <8) {
              setErrorMessage("Password must be of 8 or more characters");
              setError(ENUM_LOGINERROR.PasswordError)
              return false;
          } else {
            setError(ENUM_LOGINERROR.NoError)
            return true
          }
      } else {
        setError(ENUM_LOGINERROR.NoError)
        return true;
      }
  }
  return (
    <>
      <LoginContainer>
        <Container>
          <LoginFormWrapper>
              <LoginFormTitle>WELCOME,</LoginFormTitle>
            <FormContent>
                <FormInputWrapper>
                    <FormLabel color='black' isError={false} htmlFor="email">Email</FormLabel>
                    {
                    error === "emailError" && <FormLabel isError={true}>{errorMessage}</FormLabel>
                    }
                    <FormInput width={"460px"} widthGiven={true} color="#EBF3F5" type="text" name="email" value={email} onChange={e=> setEmail(e.target.value)} required/>
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel color='black' isError={false} htmlFor="password">Password</FormLabel>
                    {
                    error === "passwordError" && <FormLabel isError={true}>{errorMessage}</FormLabel>
                    }
                    <FormInput width={"460px"} widthGiven={true} color="#EBF3F5" type="password" name='password' value={password} onChange={e=> setPassword(e.target.value)} required/>
              </FormInputWrapper>
            <FormButton color={"#7EB6EA"}>Login</FormButton>
              <FooterSection>
              </FooterSection>
            </FormContent>
          </LoginFormWrapper>
        </Container>
        </LoginContainer>
    </>
  );
}

export default Login;