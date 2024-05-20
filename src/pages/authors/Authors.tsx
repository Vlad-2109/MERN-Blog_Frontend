import { useEffect, useState } from 'react';
import { AuthorsData } from '../../types/dataTypes';
import { Link } from 'react-router-dom';
import './_authors.scss';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const Authors: React.FC = () => {
	const [authors, setAuthors] = useState<AuthorsData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getAuthors = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users`);
				setAuthors(response.data);
			} catch (err: any) {
				console.log(err);
			}
			setIsLoading(false);
		}
		getAuthors();
	}, [])

	if (isLoading) {
		return <Loader />
	}

	return (
		<section className="authors">
			{authors.length > 0 ? (
				<div className="container authors__container">
					{authors.map((author) => {
						return (
							<Link
								key={author._id}
								to={`/posts/users/${author._id}`}
								className="author"
							>
								<div className="author__avatar">
									<img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${author.avatar}`} alt={`Image of ${author.name}`} />
								</div>
								<div className="author__info">
									<h4>{author.name}</h4>
									<p>{author.posts}</p>
								</div>
							</Link>
						);
					})}
				</div>
			) : (
				<h2 className="center">No users/authors found</h2>
			)}
		</section>
	);
};

export default Authors;
