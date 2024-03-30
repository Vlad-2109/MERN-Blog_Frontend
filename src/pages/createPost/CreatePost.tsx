import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_createPost.scss';

const CreatePost: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const [category, setCategory] = useState<string>('Uncategorized');
	const [description, setDescription] = useState<string>('');
	/* eslint-disable */
	// @ts-ignore: Unreachable code error
	const [thumbnail, setThumbnail] = useState<File | string | undefined>('');

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

	return (
		<section className="create-post">
			<div className="container">
				<h2>Create Post</h2>
				<p className="form__error-message">This is an error message</p>
				<form className="form create-post__form">
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