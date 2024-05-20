import {Dispatch, SetStateAction } from 'react';


export interface UserDataRegister {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export interface UserDataLogin {
	email: string;
	password: string;
}

export interface User{
	id: string;
	name: string;
	token: string;
}

export interface UserContextInterface {
	currentUser: null | User;
	setCurrentUser: Dispatch<SetStateAction<null | string>>;
}

export interface UserContextProviderInterface {
	children: React.ReactNode;
}

export interface DeletePostProps{
	postId: string;
}