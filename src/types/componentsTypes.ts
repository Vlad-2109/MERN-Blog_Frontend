export interface PostItemProps {
	postId: string;
	thumbnail: string;
	category: string;
	title: string;
	description: string;
	authorID: string;
	createdAt: string;
}

export interface PostAuthorProps {
	authorID: string;
	createdAt: string;
}

export interface Author {
	_id: string;
	name: string;
	email: string;
	posts: number;
	avatar?: string;
}