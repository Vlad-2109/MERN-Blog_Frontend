import { useEffect, useState } from 'react';
import './_posts.scss';
import PostItem from '../postItem/PostItem';
import { Data } from '../../types/dataTypes';
import Loader from '../loader/Loader';
import axios from 'axios';

const Posts: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	/* eslint-disable */
	// @ts-ignore: Unreachable code error
	const [posts, setPosts] = useState<Data[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/posts`);
				setPosts(response?.data);
			} catch (err: any) {
				console.log(err);
			}
			setIsLoading(false);
		}
		fetchPosts();
	}, [])

	if (isLoading) {
		return <Loader/>
	}

	return (
		<section className="posts">
			{posts.length > 0 ? (
				<div className="container posts__container">
					{posts.map((post) => (
						<PostItem
							key={post._id}
							postId={post._id}
							thumbnail={post.thumbnail}
							category={post.category}
							title={post.title}
							description={post.description}
							authorID={post.creator._id}
							createdAt={post.createdAt}
						/>
					))}
				</div>
			) : (
				<h2 className="center">No posts found</h2>
			)}
		</section>
	);
};

export default Posts;
