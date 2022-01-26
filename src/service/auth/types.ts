export interface IAuthService {
    isAuthenticate(): boolean
    signIn(token:string): void
    logout():void
}