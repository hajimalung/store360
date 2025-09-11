export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User{
    id : number,
    username : string,
    email: string,
    createdAt: string
}

export interface LoginResponse{
  message : string,
  token?: string,
  user?:User
}
