import { RouteComponentProps } from "react-router-dom";

export interface IHeader {
  name: string;
}
export interface IHero {
  name: string;
}
export interface IFooter {
  name: string;
}
export interface IPost {
  name: string;
}
export interface ITagsBox {
  name: string;
}
export interface IMenu {
  name: string;
}
export interface IForm {
  name: string;
}
export interface IProtectedRoute {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | React.LazyExoticComponent<React.ComponentType<any>>
  name: string;
}
