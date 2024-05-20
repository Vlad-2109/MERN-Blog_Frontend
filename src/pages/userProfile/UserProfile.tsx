import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../../images/avatar15.jpg';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import './_userProfile.scss';
import { UserContext } from '../../context/userContext';

const UserProfile: React.FC = () => {
	const [avatar, setAvatar] = useState<File | string | undefined>(Avatar);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [currentPassword, setCurrentPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

	const navigate = useNavigate();
	const { currentUser } = useContext(UserContext);
	const token = currentUser?.token;

	// redirect to login page for any user who isn't logged in
	useEffect(() => {
		if (!token) {
			navigate('/login');
		}
	});

	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setAvatar(e.target.files[0]);
		}
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentPassword(e.target.value);
	};
	const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPassword(e.target.value);
	};
	const handleConfirmNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmNewPassword(e.target.value);
	};

	return (
		<section className="profile">
			<div className="container profile__container">
				<Link to={'/myposts/ddffss'} className="btn">
					My posts
				</Link>
				<div className="profile__details">
					<div className="avatar__wrapper">
						<div className="profile__avatar">
							{typeof avatar === 'string' ? (
								<img src={avatar} alt="" />
							) : (
								avatar && <img src={URL.createObjectURL(avatar)} alt="" />
							)}
						</div>
						{/*Form to update avatar*/}
						<form className="avatar__form">
							<input
								type="file"
								name="avatar"
								id="avatar"
								accept="png, jpg, jpeg"
								onChange={handleAvatarChange}
							/>
							<label htmlFor="avatar">
								<FaEdit />
							</label>
						</form>
						<button className="profile__avatar-btn">
							<FaCheck />
						</button>
					</div>
					<h1>Ernest Achiever</h1>
					{/*form to update user details*/}
					<form className="form profile__form">
						<p className="form__error-message">This is an error message</p>
						<input
							type="text"
							placeholder="Full Name"
							value={name}
							onChange={handleNameChange}
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={handleEmailChange}
						/>
						<input
							type="password"
							placeholder="Current Password"
							value={currentPassword}
							onChange={handleCurrentPasswordChange}
						/>
						<input
							type="password"
							placeholder="New password"
							value={newPassword}
							onChange={handleNewPasswordChange}
						/>
						<input
							type="password"
							placeholder="Confirm new password"
							value={confirmNewPassword}
							onChange={handleConfirmNewPasswordChange}
						/>
						<button type='submit' className='btn primary'>Update details</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default UserProfile;
