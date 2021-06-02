import { User } from "../auth/types";

export interface ReqsState {
  reqs: Req[];
}

export class Req {
  request_text: string|null = null;
  meeting_time: string|null = null;
  userSpecialistId: User;
  
  created?: string;
  decision?: string|null;
  file?: any|null;
  id?: number;
  status?: number;
  userId?: User;

  constructor(user: string|null = null) {
    this.userSpecialistId = new User(user);
  }
}