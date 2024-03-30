import { PostItemProps } from '../../types/componentsTypes';
import PostAuthor from '../postAuthor/PostAuthor';
import './_postItem.scss';
import { Link } from 'react-router-dom';

const PostItem: React.FC<PostItemProps> = ({
	postId,
	thumbnail,
	title,
	category,
	description,
}) => {

	const shortDescription = description.length > 145 ? description.substring(0, 145) + '...' : description;
	const postTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

	return (
		<article className="post">
			<div className="post__thumbnail">
				<img src={thumbnail} alt={title} />
			</div>
			<div className="post__content">
				<Link to={`/posts/${postId}`}>
					<h3>{postTitle}</h3>
				</Link>
				<p>{shortDescription}</p>
				<div className="post__footer">
					<PostAuthor />
					<Link to={`/posts/categories/${category}`} className="btn category">
						{category}
					</Link>
				</div>
			</div>
		</article>
	);
};

export default PostItem;
