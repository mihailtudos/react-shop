import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase.utils'
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in/sign-in-form.component";

const Authentication = () => {
	return (
		<div>
			<SignInForm />
			<SignUpForm />
		</div>
	)
}
export default Authentication;
