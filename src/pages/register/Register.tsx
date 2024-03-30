import { useState } from 'react';
import { UserDataRegister } from '../../types/pagesTypes';
import './_register.scss';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
	const [userData, setUserData] = useState<UserDataRegister>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	return (
		<section className="register">
			<div className="container">
				<h2>Sign Up</h2>
				<form className="form register__form">
					<p className="form__error-message">This is an error message</p>
					<input
						type="text"
						placeholder="Full Name"
						name="name"
						value={userData.name}
						onChange={handleChangeInput}
					/>
					<input
						type="text"
						placeholder="Email"
						name="email"
						value={userData.email}
						onChange={handleChangeInput}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={userData.password}
						onChange={handleChangeInput}
					/>
					<input
						type="password"
						placeholder="Confirm password"
						name="password2"
						value={userData.password2}
						onChange={handleChangeInput}
					/>
					<button type="submit" className="btn primary">
						Register
					</button>
				</form>
				<small>
					Already have an account? <Link to={'/login'}>Sign in</Link>
				</small>
			</div>
		</section>
	);
};

export default Register;
