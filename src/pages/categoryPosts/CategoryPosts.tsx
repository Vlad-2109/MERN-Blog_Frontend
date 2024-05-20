import { useEffect, useState } from 'react';
import { Data } from '../../types/dataTypes';
import PostItem from '../../components/postItem/PostItem';
import './_categoryPosts.scss';
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import { useParams } from 'react-router-dom';

const CategoryPosts: React.FC = () => {
	const [posts, setPosts] = useState<Data[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { category } = useParams();

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/categories/${category}`
				);
				setPosts(response?.data);
			} catch (err: any) {
				console.log(err);
			}
			setIsLoading(false);
		};
		fetchPosts();
	}, [category]);

	if (isLoading) {
		return <Loader />;
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

export default CategoryPosts;
