import { ReactNode } from "react";
import { IUserResponse, IUserLogin } from "./user";
import { IResponseTech, ITech } from "./tech";

export interface IUserContext {
  user: IUserResponse;
  submit: (event: IUserLogin) => Promise<void>;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
  setTechsList: (techsList: IResponseTech[]) => void;
  techsList: IResponseTech[];
  isAuthenticated: boolean;
}

export interface ITechContext {
  onModal: boolean;
  setOnModal: (onModal: boolean) => void;
  postTechs: (data: ITech) => void;
  setOnModalEdit: (onModalEdit: boolean) => void;
  onModalEdit: boolean;
  deleteTechs: (id: IResponseTech["id"]) => void;
  editTechs: (data: IResponseTech) => void;
  setElement: (element: IResponseTech) => void;
  element: IResponseTech;
}

export interface IAuthProvider {
  children: ReactNode;
}
