export enum Routes {
  HOME = '/',
}
export enum RouteNames {
  HOME = 'Home',
}

export interface IData {
  question: string;
  emailFrom: string;
}

export interface IModalItem {
  message: string;
  isError: boolean;
}
