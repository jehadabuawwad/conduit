import IRoute from "../interfaces/route";
import HomePage from "../pages/home";
import SignIn from "../pages/signin";
import SignOut from "../pages/signout";

const routes: IRoute[] = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/sign-in",
    component: SignIn,
    exact: true,
  },
  {
    path: "/sign-out",
    component: SignOut,
    exact: true,
  },
];

export default routes;
