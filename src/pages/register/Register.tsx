import { useState, FormEvent } from 'react';
import { UserDataRegister } from '../../types/pagesTypes';
import './_register.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
	const [userData, setUserData] = useState<UserDataRegister>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [error, setError] = useState<string>('');
	const navigate = useNavigate();

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const registerUser = async (e: FormEvent) => {
		e.preventDefault();
		try {	
			const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users/register`, userData);
			const newUser = await response.data;
			console.log(newUser);
			if(!newUser){
				setError(`Couldn't register user. Please try again`)
			}
			navigate('/login')
		} catch (err: any) {
			setError(err.response.data.message)
		}
	}

	return (
		<section className="register">
			<div className="container">
				<h2>Sign Up</h2>
				<form className="form register__form" onSubmit={registerUser}>
					{error && <p className="form__error-message">{error}</p>}
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
