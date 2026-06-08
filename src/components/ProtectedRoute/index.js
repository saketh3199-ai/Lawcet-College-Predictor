import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Cookie.get("JWT_TOKEN") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default ProtectedRoute;