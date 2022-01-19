import IRoute from "../interfaces/route";
import HomePage from "../pages/home";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

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
    path: "/sign-up",
    component: SignUp,
    exact: true,
  },
];

export default routes;
