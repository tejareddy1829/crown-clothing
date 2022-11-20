import {sigInWithGooglePopup} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await sigInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default SignIn;
