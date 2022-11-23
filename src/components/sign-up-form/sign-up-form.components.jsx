import {useState} from "react";

import FormInput from "../form-input/form-input.components";

import Button from "../button/button.component";

import "./sign-up-form.styles.scss";



import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const {displayName, email, password, confirmPassword} = formFields;

 

  const resetFormFileds = () => {
    setFormFields(defaultFormFileds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password did not match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);

     

      await createUserDocumentFromAuth(user, {displayName});
      resetFormFileds();
    } catch (error) {
      if (error.code === "auth/email-alraedy-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an acocount?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='DisplayName'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
