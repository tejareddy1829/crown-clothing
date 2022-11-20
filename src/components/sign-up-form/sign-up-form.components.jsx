import {useState} from "react";

const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const {displayName, email, password, confirmPassword} = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div>
      <h1>sign up with yoyr email and password</h1>
      <form onSubmit={() => {}}>
        <label>display name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <label>email</label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <label>password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <label>confirm password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
