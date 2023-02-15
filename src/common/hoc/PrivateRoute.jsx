import { AppRoutes } from "../routes/AppRoutes";
import { Navigate, Outlet } from "react-router-dom";
import auth from "../../Firebase";

// const PrivateRoute = ({
//       isAllowed,
//       redirectPath = AppRoutes.NOT_FOUND,
//       children,
//       }) => {
//     if (!isAllowed) {
//         return <Navigate to={redirectPath} />;
//     }
//     return children ? children : <Outlet />
// };

export const PrivateRoute = ({Component}) => {
    const user = localStorage.getItem("auth")
    return user?.uid
    ? <Component/>
    : <Navigate to={AppRoutes.NOT_FOUND} />
}

// export default PrivateRoute;


// export const PrivateRoute = ({authUser, Component}) => {
//     return authUser === null ? 
//     <Navigate to={AppRoutes.NOT_FOUND}/>
//     : authUser?.role === "mentor" ?
//     <Component/>
//     : authUser?.role === "student" && <Navigate to={AppRoutes.MAIN_PAGE}/>
// }
