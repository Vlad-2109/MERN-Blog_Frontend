import LoadingGif from '../../images/LoadingGif.gif';
import './_loader.scss';

const Loader: React.FC = () => {
	return (
		<div className="loader">
			<div className="loader__image">
				<img src={LoadingGif} alt="loading" />
			</div>
		</div>
	);
};

export default Loader;
