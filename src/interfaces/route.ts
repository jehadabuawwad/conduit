import { RouteComponentProps } from "react-router-dom";
export interface IRoute {
  path: string;
  component: any;
  exact: boolean;
}
export interface IProtectedRoute {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | React.LazyExoticComponent<React.ComponentType<any>>;
  name: string;
  path: string;
}
