import { IAuthService } from "./types";

class AuthService implements IAuthService{
	constructor(private AUTH_TOKEN:string) {}
	isAuthenticate() {
		return !!localStorage.getItem(AUTH_TOKEN);
	}

	signIn(token:string){
		localStorage.setItem(AUTH_TOKEN, token);
	}

	logout() {
		localStorage.removeItem(AUTH_TOKEN);
	}

	get token() {
		return localStorage.getItem(AUTH_TOKEN);
	}
}

export const AUTH_TOKEN = "auth_token";

const authService = new AuthService(AUTH_TOKEN);

export default authService;
