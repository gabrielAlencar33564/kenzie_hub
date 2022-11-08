import { IResponseTech } from "./tech";

export interface IUserResponse {
  id: string | number;
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  course_module: string;
  avatar_url: string | null;
  techs: IResponseTech[];
  created_at: Date;
  updated_at: Date;
}

export interface IUserRegistration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface DataProps {
  user: IUserResponse;
  token: string;
}
