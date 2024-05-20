import './_header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/uniswap-uni-logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';

const Header: React.FC = () => {
	const [isNavShowing, setIsNavShowing] = useState<boolean>(
		window.innerWidth > 800 ? true : false
	);
	const { currentUser } = useContext(UserContext);

	const handleNavShowing = () => {
		setIsNavShowing((prevState) => !prevState);
	};

	const handleClose = () => {
		if (window.innerWidth < 800) {
			setIsNavShowing(false);
		} else {
			setIsNavShowing(true);
		}
	};
	return (
		<nav>
			<div className="container nav__container">
				<Link to="/" className="nav__logo" onClick={handleClose}>
					<img src={Logo} alt="Navbar Logo" />
				</Link>
				{currentUser?.id && isNavShowing && (
					<ul className="nav__menu">
						<li>
							<Link to="/profile/sdfsdf" onClick={handleClose}>
								{currentUser.name}
							</Link>
						</li>
						<li>
							<Link to="/create" onClick={handleClose}>
								Create Post
							</Link>
						</li>
						<li>
							<Link to="/authors" onClick={handleClose}>
								Authors
							</Link>
						</li>
						<li>
							<Link to="/logout" onClick={handleClose}>
								Logout
							</Link>
						</li>
					</ul>
				)}
				{!currentUser?.id && isNavShowing && (
					<ul className="nav__menu">
						<li>
							<Link to="/authors" onClick={handleClose}>
								Authors
							</Link>
						</li>
						<li>
							<Link to="/login" onClick={handleClose}>
								Login
							</Link>
						</li>
					</ul>
				)}
				<button className="nav__toggle-btn" onClick={handleNavShowing}>
					{isNavShowing ? <AiOutlineClose /> : <FaBars />}
				</button>
			</div>
		</nav>
	);
};

export default Header;
