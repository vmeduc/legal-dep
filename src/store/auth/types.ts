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
  id?: string|null = undefined;
  name: string;
  firstName?: string|null = null;
  lastName?: string|null = null;
  email?: string|null = null;
  gender?: string|null = null;
  userPic: string|null = null;
  locale?: string|null = null;
  status?: string|null = null;
  lastVisit?: string|null = null;
  roles?: string[] = [];

  password?: string = undefined;

  constructor(name: string) {
    this.name = name;
  }
}