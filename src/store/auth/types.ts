export interface AuthState {
  status?: string;
  token?: string|null;
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