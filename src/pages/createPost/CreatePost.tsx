import { useState, useContext, useEffect, FormEvent } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_createPost.scss';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const [category, setCategory] = useState<string>('Uncategorized');
	const [description, setDescription] = useState<string>('');
	/* eslint-disable */
	// @ts-ignore: Unreachable code error
	const [thumbnail, setThumbnail] = useState<File | string | undefined>('');
	const [error, setError] = useState<string>('');

	const { currentUser } = useContext(UserContext);
	const token = currentUser?.token;
	const navigate = useNavigate();

	// redirect to ligin page for any  user who isn't logged in
	useEffect(() => {
		if (!token) {
			navigate('/login')
		}
	}, [])

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image'],
			['clean'],
		],
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
	];

	const POST_CATEGORIES = [
		'Agriculture',
		'Business',
		'Education',
		'Entertainment',
		'Art',
		'Investment',
		'Uncategorized',
		'Weather',
	];

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleDescriptionChange = (e: any) => {
		setDescription(e.target.value);
	};
	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setThumbnail(e.target.files[0]);
		}
	};

	const createPost = async (e: FormEvent) => {
		e.preventDefault();

		const postData = new FormData();
		postData.set('title', title);
		postData.set('category', category);
		postData.set('description', description);
		if (thumbnail instanceof File) {
			postData.set('thumbnail', thumbnail);
		}

		try {
			const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/posts`,
				postData,
				{ withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
			if (response.status === 201) {
				navigate('/');
			}
		} catch (err:any) {
			setError(err.response.data.message)
		}

	}

	return (
		<section className="create-post">
			<div className="container">
				<h2>Create Post</h2>
				{error && <p className='error'>{error}</p>}
				<form className="form create-post__form" onSubmit={createPost}>
					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={handleTitleChange}
						autoFocus
					/>
					<select
						name="category"
						value={category}
						onChange={handleCategoryChange}
					>
						{POST_CATEGORIES.map((cat) => (
							<option key={cat}>{cat}</option>
						))}
					</select>
					<ReactQuill
						modules={modules}
						formats={formats}
						value={description}
						onChange={handleDescriptionChange}
					/>
					<input
						type="file"
						accept="png, jpg, jpeg"
						onChange={handleAvatarChange}
					/>
					<button type="submit" className="btn primary">
						Create
					</button>
				</form>
			</div>
		</section>
	);
};

export default CreatePost;
