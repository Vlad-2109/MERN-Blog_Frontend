import { Link } from 'react-router-dom';
import './_postAuthor.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Author, PostAuthorProps } from '../../types/componentsTypes';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import de from 'javascript-time-ago/locale/de.json';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(de);

const PostAuthor: React.FC<PostAuthorProps> = ({ authorID, createdAt }) => {
	const [author, setAuthor] = useState<Author>();
	
	useEffect(() => {
		const getAuthor = async () => {
			try {
				const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${authorID}`);
				console.log(response)
				setAuthor(response?.data);
			} catch (err: any) {
				console.log(err);
			}
		}

		getAuthor();
	}, [])

	return (
		<Link to={`/posts/users/${authorID}`} className="post__author">
			<div className="post__author-avatar">
				<img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="avatar" />
			</div>
			<div className="post__author-details">
				<h5>By: {author?.name}</h5>
				<small><ReactTimeAgo date={new Date(createdAt)} locale='en-Us' /></small>
			</div>
		</Link>
	);
};

export default PostAuthor;
