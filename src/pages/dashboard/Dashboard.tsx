import { useContext, useEffect, useState } from 'react';
import { DUMMY_POSTS } from '../../data';
import { Data } from '../../types/dataTypes';
import { Link, useNavigate } from 'react-router-dom';
import './_dashboard.scss';
import { UserContext } from '../../context/userContext';

const Dashboard: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	/* eslint-disable */
	// @ts-ignore: Unreachable code error
	const [posts, setPosts] = useState<Data[]>(DUMMY_POSTS);

	const navigate = useNavigate();
	const { currentUser } = useContext(UserContext);
	const token = currentUser?.token;
	
	// redirect to login page for any user who isn't logged in
	useEffect(() => {
		if (!token) {
			navigate('/login')
		}
	})

	return (
		<section className="dashboard">
			{posts.length ? (
				<div className="container dashboard__container">
					{posts.map((post) => {
						return (
							<article key={post._id} className="dashboard__post">
								<div className="dashboard__post-info">
									<div className="dashboard__post-thumbnail">
										<img src={post.thumbnail} alt="" />
									</div>
									<h5>{post.title}</h5>
								</div>
								<div className="dashboard__post-actions">
									<Link to={`/posts/${post._id}`} className="btn sm">
										View
									</Link>
									<Link
										to={`/posts/${post._id}/edit`}
										className="btn sm primary"
									>
										Edit
									</Link>
									<Link
										to={`/posts/${post._id}/delete`}
										className="btn sm danger"
									>
										Delete
									</Link>
								</div>
							</article>
						);
					})}
				</div>
			) : (
				<h2 className="center">You have no posts yet</h2>
			)}
		</section>
	);
};

export default Dashboard;
