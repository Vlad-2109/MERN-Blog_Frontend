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
