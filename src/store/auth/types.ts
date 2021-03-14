export interface AuthState {
  status?: string;
  token?: string|null;
}

export interface AuthRequest {
  email?: string;
  password?: string;
}

export interface AuthResponse {
  email: string;
  token: string;
}