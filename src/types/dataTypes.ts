export interface Data {
	id: string;
	thumbnail: string;
	category: string;
	title: string;
	desc: string;
	authorID: number;
}

export interface AuthorsData {
	id: number;
	avatar: string;
	name: string;
	posts: number;
}
