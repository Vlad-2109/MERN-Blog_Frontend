import { Link } from 'react-router-dom';
import './_footer.scss';

const Footer: React.FC = () => {
	return (
		<footer>
			<ul className="footer__categories">
				<li>
					<Link to="posts/categories/Agriculture">Agriculture</Link>
				</li>
				<li>
					<Link to="posts/categories/Business">Business</Link>
				</li>
				<li>
					<Link to="posts/categories/Education">Education</Link>
				</li>
				<li>
					<Link to="posts/categories/Entertainment">Entertainment</Link>
				</li>
				<li>
					<Link to="posts/categories/Art">Art</Link>
				</li>
				<li>
					<Link to="posts/categories/Ivestment">Ivestment</Link>
				</li>
				<li>
					<Link to="posts/categories/Uncategorized">Uncategorized</Link>
				</li>
				<li>
					<Link to="posts/categories/Weather">Weather</Link>
				</li>
			</ul>
			<div className="footer__copyright">
				<small>All rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
			</div>
		</footer>
	);
};

export default Footer;
