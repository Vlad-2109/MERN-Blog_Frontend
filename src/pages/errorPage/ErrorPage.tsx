import { Link } from 'react-router-dom';
import './_errorPage.scss';

const ErrorPage: React.FC = () => {
	return (
		<section className="error-page">
			<div className="center">
				<Link to="/" className="btn primary">
					Go Back Home
				</Link>
				<h2>Page Not Found</h2>
			</div>
		</section>
	);
};

export default ErrorPage;
