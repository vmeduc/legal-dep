export interface AuthState {
  status?: string;
  token?: string|null;
  user?: User;
}

export interface AuthRequest {
  name?: string;
  password?: string;
}

export interface AuthResponse {
  role: string;
  username: string;
  token: string;
}

export class User {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  // userPic?: null;
  email?: string;
  // gender?: string;
  // locale?: string;
  // status?: string;
  // lastVisit?: string;
  // roles?: string[];

  constructor(name: string) {
    this.name = name;
  }
}