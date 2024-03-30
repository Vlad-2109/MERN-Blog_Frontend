import { useState } from 'react';
import Avatar1 from '../../images/avatar1.jpg';
import Avatar2 from '../../images/avatar2.jpg';
import Avatar3 from '../../images/avatar3.jpg';
import Avatar4 from '../../images/avatar4.jpg';
import Avatar5 from '../../images/avatar5.jpg';
import { AuthorsData } from '../../types/dataTypes';
import { Link } from 'react-router-dom';
import './_authors.scss';

const authorsData: AuthorsData[] = [
	{ id: 1, avatar: Avatar1, name: 'Ernest Achiever', posts: 3 },
	{ id: 2, avatar: Avatar2, name: 'Jahe Doe', posts: 5 },
	{ id: 3, avatar: Avatar3, name: 'Dramani Mahama', posts: 0 },
	{ id: 4, avatar: Avatar4, name: 'Nana Addo', posts: 2 },
	{ id: 5, avatar: Avatar5, name: 'Hajia Bintu', posts: 1 },
];

const Authors: React.FC = () => {
	const [authors, setAuthors] = useState<AuthorsData[]>(authorsData);

	return (
		<section className="authors">
			{authors.length > 0 ? (
				<div className="container authors__container">
					{authors.map((author) => {
						return (
							<Link
								key={author.id}
								to={`/posts/users/${author.id}`}
								className="author"
							>
								<div className="author__avatar">
									<img src={author.avatar} alt={`Image of ${author.name}`} />
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
