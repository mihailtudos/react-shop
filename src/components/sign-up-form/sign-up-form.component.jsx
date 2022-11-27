import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const SignUpForm = () => {
	const [formFields, setFormFields]  = useState(defaultFormFields);
	const {displayName, email, password, confirmPassword} = formFields;

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('hit 1');
		if (password !== confirmPassword) {
			alert('Password doesnt not match')
			return;
		}

		console.log('hit 2')
		try {
			console.log('hit 3')
			const response = await createAuthUserWithEmailAndPassword(email, password);
			console.log(response);
		}catch (error) {
			console.log("User not signed up", error.message);
		}
	}

	return (
	  <div>
		  <h1>Sign up with your email and password</h1>
		  <form onSubmit={handleSubmit}>
			  <label htmlFor="">Display name</label>
			  <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>

			  <label htmlFor="">Email</label>
			  <input type="email" required onChange={handleChange} name='email' value={email}/>

			  <label htmlFor="">Password</label>
			  <input type="password" required onChange={handleChange} name='password' value={password}/>
			  <label htmlFor="">Confirm password</label>
			  <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
			  <button type='submit'>Sign Up</button>
		  </form>
	  </div>
	)
}
export default SignUpForm;
