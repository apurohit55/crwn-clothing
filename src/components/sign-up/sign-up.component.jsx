import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (event) => {
		// don't do the normal thing (aka HTML form action)
		event.preventDefault();

		// get some variables from component state
		const { displayName, email, password, confirmPassword } = this.state;

		// do a basic sanity check => both password fields should be same
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		// signup logic
		try {
			/*
				await => es6 (newer?) function that is synctatic sugar for Promises
					=> or: lets you call an async function, as if it were synchronous
				
				old: 
					Promise.resolve(auth.createUser(e,p) => {
						handleResponse()
					}).then((response) => {
						useResponse(response);
					})
				
				new:
					const response = await auth.createUse(e,p)
			*/
			// create new firebase user
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			// create some other user profile
			await createUserProfileDocument(user, { displayName });
			// update component state *after* login
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			// handle error
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have a account</h2>
				<span>Sign up with email and passord</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
