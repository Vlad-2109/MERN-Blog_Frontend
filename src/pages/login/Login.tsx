import { useState, useContext, FormEvent } from 'react';
import { UserDataLogin } from '../../types/pagesTypes';
import './_login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/userContext';

const Login: React.FC = () => {
	const [userData, setUserData] = useState<UserDataLogin>({
		email: '',
		password: '',
	});
	const [error, setError] = useState<string>('');
	const navigate = useNavigate();
	
	const { setCurrentUser } = useContext(UserContext);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const loginUser = async (e: FormEvent) => {
		e.preventDefault();
		setError('');
		try {
			const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users/login`, userData);
			const user = await response.data;
			setCurrentUser(user);
			navigate('/');
		} catch (err: any) {
			setError(err.response.data.message);
		}

	};

	return (
		<section className="login">
			<div className="container">
				<h2>Sign In</h2>
				<form className="form login__form" onSubmit={loginUser}>
					{error && <p className="form__error-message">{error}</p>}
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
