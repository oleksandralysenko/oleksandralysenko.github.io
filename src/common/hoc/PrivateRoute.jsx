import { AppRoutes } from "../routes/AppRoutes";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({Component, redirectPath = AppRoutes.LOGIN}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user?.role === "admin"
    ? <Component/>
    : <Navigate to={redirectPath} />
}



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


// export default PrivateRoute;


// export const PrivateRoute = ({authUser, Component}) => {
//     return authUser === null ? 
//     <Navigate to={AppRoutes.NOT_FOUND}/>
//     : authUser?.role === "mentor" ?
//     <Component/>
//     : authUser?.role === "student" && <Navigate to={AppRoutes.MAIN_PAGE}/>
// }
