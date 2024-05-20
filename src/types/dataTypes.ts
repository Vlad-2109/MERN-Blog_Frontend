interface Creator{
	_id: string;
	name: string;
	email: string;
}

export interface Data {
	_id: string;
	category: string;
	title: string;
	description: string;
	creator: Creator;
	thumbnail: string;
	createdAt: string;
}

export interface AuthorsData {
	_id: string;
	avatar: string;
	name: string;
	posts: number;
}
