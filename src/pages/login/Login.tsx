import { useState } from 'react';
import { UserDataLogin } from '../../types/pagesTypes';
import './_login.scss';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
	const [userData, setUserData] = useState<UserDataLogin>({
		email: '',
		password: '',
	});

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	return (
		<section className="login">
			<div className="container">
				<h2>Sign In</h2>
				<form className="form login__form">
					<p className="form__error-message">This is an error message</p>
					<input
						type="text"
						placeholder="Email"
						name="email"
						value={userData.email}
						onChange={handleChangeInput}
						autoFocus
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={userData.password}
						onChange={handleChangeInput}
					/>
					<button type="submit" className="btn primary">
						Login
					</button>
				</form>
				<small>
					Don't have an account? <Link to={'/register'}>Sign up</Link>
				</small>
			</div>
		</section>
	);
};

export default Login;
