import { useState } from 'react';
import { DUMMY_POSTS } from '../../data';
import { Data } from '../../types/dataTypes';
import PostItem from '../../components/postItem/PostItem';
import './_authorPosts.scss';

const AuthorPosts: React.FC = () => {
	const [posts, setPosts] = useState<Data[]>(DUMMY_POSTS);
	return (
		<section className="posts">
			{posts.length > 0 ? (
				<div className="container posts__container">
					{posts.map((post) => (
						<PostItem
							key={post.id}
							postId={post.id}
							thumbnail={post.thumbnail}
							category={post.category}
							title={post.title}
							description={post.desc}
							authorID={post.authorID}
						/>
					))}
				</div>
			) : (
				<h2 className="center">No posts found</h2>
			)}
		</section>
	);
};

export default AuthorPosts;
