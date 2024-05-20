import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import PostAuthor from '../../components/postAuthor/PostAuthor';
import './_postDetail.scss';
import Loader from '../../components/loader/Loader';
import DeletePost from '../deletePost/DeletePost';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import PostAuthor from '../../components/postAuthor/PostAuthor';

interface Creator{
	_id: string;
	name: string;
	email: string;
}
interface PostInterface {
	_id: string;
	title: string;
	category: string;
	description: string;
	creator: Creator
	thumbnail: string;
	createdAt: string;
}

const PostDetail: React.FC = () => {
	const { id } = useParams();
	const [post, setPost] = useState<PostInterface>();
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const { currentUser } = useContext(UserContext);

	useEffect(() => {
		const getPost = async() => {
			setIsLoading(true);
			try {
				const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`);
				setPost(response.data);
			} catch (err: any) {
				setError(error)
			}
			setIsLoading(false);
		}
		getPost();
	}, [])

	if (isLoading) {
		return <Loader />
	}

	return (
		<section className="post-detail">
			{error && <p className="error">{error}</p>}
			{post && (
				<div className="container post-detail__container">
					<div className="post-detail__header">
						<PostAuthor authorID={post.creator._id} createdAt={post.createdAt} />
						{currentUser?.id == post?.creator._id && (
							<div className="post-detail__buttons">
								<Link to={`/posts/${post?._id}/edit`} className="btn sm primary">
									Edit
								</Link>
								<DeletePost postId={id || ''} />
							</div>
						)}
					</div>
					<h1>{post.title}</h1>
					<div className="post-detail__thumbnail">
						<img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
					</div>
					<p dangerouslySetInnerHTML={{__html: post.description}}></p>
				</div>
			)}
		</section>
	);
};

export default PostDetail;
